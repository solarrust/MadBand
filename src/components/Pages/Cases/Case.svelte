<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Navigation, A11y, FreeMode } from "swiper";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/a11y";
  import "swiper/css/free-mode";
  import lozad from "lozad";

  import { locale } from "../../services/i18n";
  import { onMount } from "svelte";

  export let title;
  export let project;
  export let category;
  export let bkg;

  // function photosRowCreator(arr) {
  //   let count = Math.round(arr.length / 2);
  //
  //   for (let i = 0; i < count; i++) {
  //     let rowBlock = document.createElement("div");
  //     rowBlock.classList.add("photos__row");
  //     document.querySelector(".photos").append(rowBlock);
  //   }
  // }

  // function photosInsert(arr, parentClass) {
  //   let parents = document.querySelectorAll(`.${parentClass}`);
  //   let photosArr1 = [];
  //   let photosArr2 = [];
  //
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 2) {
  //       photosArr1.push(arr[i]);
  //     } else {
  //       photosArr2.push(arr[i]);
  //     }
  //   }
  //
  //   for (let i = 0; i < parents.length; i++) {
  //     let img;
  //     let currentArr;
  //     let count = 0;
  //
  //     while (count < 2) {
  //       if (parents[i].innerHTML === "") {
  //         currentArr = photosArr2;
  //       } else {
  //         currentArr = photosArr1;
  //       }
  //       if (currentArr[i] && currentArr[i].src !== "") {
  //         img = document.createElement("img");
  //         // img.loading = "lazy";
  //         img.src = `/${currentArr[i].src}`;
  //
  //         if (currentArr[i].flag !== "") {
  //           currentArr[i].flag
  //             .split(" ")
  //             .forEach((cl) => img.classList.add(cl));
  //         }
  //       } else {
  //         img = document.createElement("div");
  //         img.classList.add("empty");
  //       }
  //
  //       img.classList.add("photos__photo");
  //
  //       parents[i].append(img);
  //
  //       count++;
  //     }
  //   }
  // }

  function classCreator(img) {
    img.onload = () => {
      let w = img.naturalWidth;
      let h = img.naturalHeight;

      if (w > h && !img.classList.contains("big")) {
        img.classList.add("_horizontal");
      } else if (w > h && !img.classList.contains("_horizontal")) {
        img.classList.add("_stretch");
      }
    };
  }

  function handleClick(e) {
    if (e.target.paused) {
      this.play();
      this.parentNode.classList.add("_playing");
    } else {
      this.pause();
      this.parentNode.classList.remove("_playing");
    }
  }

  function videoHeightFinder(video) {
    video.height = video.offsetHeight;
  }

  onMount(() => {
    window.scrollTo(0, 0);

    // photosRowCreator(project.photos);
    // photosInsert(project.photos, "photos__row");
    const observer = lozad();
    observer.observe();

    // let rows = document.querySelectorAll(".photos__row");
    let images = document.querySelectorAll(".photos__photo");

    images.forEach((img) => {
      classCreator(img);
    });

    if (document.querySelector("video")) {
      videoHeightFinder(document.querySelector("video"));
    }
  });
</script>

<div class="case-page _{bkg}">
  <section class="case">
    {#if project.data.client.ru !== ""}
      <h2 class="case__client">{project.data.client[$locale]}</h2>
    {:else}
      <h2 class="case__client">{project.data.client.en}</h2>
    {/if}

    {#if project.caseName.ru !== ""}
      <h1 class="case__name">{project.caseName[$locale]}</h1>
    {:else}
      <h1 class="case__name">{project.caseName.en}</h1>
    {/if}

    <div class="case__cover-block">
      <span
        class="case__category"
        style={`
      --font-color:
      ${category.font};
      --bkg:
      ${category.bkg}`}>{category[$locale]}</span
      >

      {#if project.videoCover && project.videoCover !== ""}
        <div class="case__video-wrapper">
          <video
            class="case__video-cover lozad"
            preload="auto"
            data-poster="/{project.pageCover}"
            data-hover-trigger
            on:click={handleClick}
          >
            <source data-src="/{project.videoCover}" />
          </video>
        </div>
      {:else}
        <img src="/{project.pageCover}" alt="" />
      {/if}
    </div>
    <div class="case__parent">
      <aside class="case__aside">
        <ul class="case__aside-list">
          {#each Object.entries(project.data) as [key, value]}
            {#if value !== undefined && Object.keys(value).length}
              {#if value instanceof Array}
                <li class="case__aside-item _grow">
                  <span class="case__aside-label">{key}</span>
                  {#each value as el}
                    {el}<br />
                  {/each}
                </li>
              {:else if value.hasOwnProperty("ru")}
                {#if key === "client" && $locale === "ru"}
                  <li class="case__aside-item">
                    <span class="case__aside-label">Клиент</span>
                    {value[$locale]}
                  </li>
                {:else}
                  <li class="case__aside-item">
                    <span class="case__aside-label">Client</span>
                    {value[$locale]}
                  </li>
                {/if}
              {/if}
            {/if}
          {/each}
        </ul>
      </aside>
      <main class="case__main">
        <p class="case__text">{@html project.text[$locale]}</p>
      </main>
    </div>

    {#if project.photos}
      <div class="case__photos photos">
        {#each project.photos as photo}
          {#if photo.src !== ""}
            <img
              data-src="/{photo.src}"
              class="photos__photo lozad {photo.flag}"
            />
          {:else}
            <div class="empty" />
          {/if}
        {/each}
      </div>
    {/if}
  </section>

  {#if project.gallery.length}
    <div class="case__gallery">
      <Swiper
        modules={[Navigation, A11y, FreeMode]}
        navigation
        centeredSlides
        centeredSlidesBounds={true}
        slidesPerView="auto"
        loop
        freeMode
        spaceBetween={20}
        breakpoints={{
          "680": {
            spaceBetween: 30,
          },
          "1280": {
            spaceBetween: 35,
          },
        }}
      >
        {#each project.gallery as photo}
          <SwiperSlide>
            <img src="/{photo}" class="gallery__photo" />
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
  {/if}

  <div class="work__call-to-action">
    <a href="#contacts">
      <div class="work__call-to-action__arrows" />
    </a>
  </div>
</div>

<style>
  .case-page {
    --main-color: var(--oriole);
    --second-color: var(--green);
  }

  .case-page._dandelion {
    background-color: var(--dandelion);
  }

  .case-page._thistle {
    background-color: var(--thistle);
  }

  .case {
    padding: 200px 40px 0;
    color: var(--main-color);
    font-family: var(--accent-font);
  }

  .case__client {
    font-size: var(--title-text-size);
    font-weight: 500;
    color: var(--green);
    text-transform: capitalize;
  }

  .case__name {
    font-size: var(--title-text-size);
    font-weight: 500;
  }

  .case__cover-block {
    position: relative;
    margin-top: 70px;
    margin-bottom: 70px;
  }

  .case__cover-block > img,
  .case__cover-block > video {
    width: 100%;
  }

  .case__video-wrapper {
    position: relative;
    /*padding-bottom: 40%;*/
    cursor: none;
  }

  .case__video-wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 0.6) url("../svg/play-btn.svg") no-repeat center /
      60px 60px;
    pointer-events: none;

    transition: opacity 0.2s;
  }

  ._playing.case__video-wrapper::before {
    opacity: 0;
  }

  .case__video-cover {
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    display: block;
    width: 100%;
    /*height: auto;*/
    object-fit: cover;
    background-color: black;
  }

  .case__video-cover[poster] {
    object-fit: cover;
  }

  .case__category {
    position: absolute;
    left: 65px;
    top: -37px;
    z-index: 1;
    padding: 30px;
    color: var(--font-color);
    font-family: var(--main-font);
    font-size: var(--xs-text-size);
    font-weight: 500;
    text-transform: uppercase;
  }

  .case__category::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--bkg);
    transform: rotate(-6deg);
  }

  .case__parent {
    display: flex;
    justify-content: space-between;
    /*max-width: 1288px;*/
    /*margin: 0 auto;*/
  }

  .case__aside {
    width: 27%;
    margin-right: 90px;

    min-width: 375px;
  }

  .case__aside-list {
    list-style: none;
    color: var(--green);
  }

  .case__aside-item {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid var(--green);
  }

  .case__aside-label {
    width: 25%;
    flex-shrink: 0;
    font-weight: 500;
    text-transform: capitalize;
  }

  .case__main {
    padding-right: 40px;
    font-size: var(--m-text-size);
    line-height: var(--m-text-lh);
  }

  .photos {
    margin-top: 150px;
    display: grid;
    grid-template-columns: repeat(3, 31.5%);
    grid-column-gap: 35px;
    grid-row-gap: 100px;
    align-items: center;
  }

  /*:global(.photos__row) {*/
  /*  display: grid;*/
  /*  grid-template-columns: repeat(3, 31.5%);*/
  /*  grid-column-gap: 35px;*/
  /*  align-items: center;*/
  /*}*/

  /*:global(.photos__row:not(:last-child)) {*/
  /*  margin-bottom: 100px;*/
  /*}*/

  :global(.photos__photo) {
    width: 100%;
  }

  :global(.photos__photo.big) {
    grid-column: span 2;
  }

  :global(._stretch) {
    align-self: stretch;
  }

  .case__gallery {
    height: 500px;
    margin: 200px 0;
  }

  .case__gallery :global(.swiper) {
    height: 100%;
  }

  :global(.case__gallery .swiper-slide) {
    /*flex-shrink: 1;*/
    width: auto;
    max-width: 100vw;
  }

  .case__gallery-container {
    /*height: 350px;*/
  }

  .gallery__photo {
    /*flex-basis: 25%;*/
    width: auto;
    max-width: 100%;
    /*height: 350px;*/
    height: 100%;
    object-fit: cover;
    /*height: 350px;*/
    cursor: none;
  }

  :global(.swiper-button-next::after, .swiper-button-prev::after) {
    display: none;
  }

  :global(.swiper-button-next, .swiper-button-prev) {
    border: none;
    width: 40px !important;
    height: 40px !important;
    cursor: none;
    background: url("../svg/slider_arrow.svg") no-repeat center / contain;
  }

  :global(.swiper-button-next:hover, .swiper-button-prev:hover) {
    cursor: none;
  }

  :global(.swiper-button-next) {
    right: 70px !important;
  }

  :global(.swiper-button-prev) {
    left: 70px !important;
    transform: rotate(180deg);
  }

  @media (max-width: 1280px) {
    .case {
      padding-top: 145px;
    }

    .case__main {
      padding-right: 0;
    }

    .case__cover-block {
      margin: 50px -40px 60px;
    }

    .case__parent {
      flex-direction: column;
    }

    .case__aside {
      width: 100%;
      margin-right: 0;
      margin-bottom: 60px;
    }

    .case__aside-list {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height: 110px;
    }

    .case__aside-item {
      width: calc(50% - 25px);
      margin-right: 25px;
    }

    .case__aside-item:nth-child(n + 3) {
      margin-left: 25px;
      margin-right: 0;
    }

    .case__aside-item._grow {
      flex-grow: 1;
    }

    .photos {
      margin-top: 80px;
      grid-column-gap: 20px;
    }

    /*:global(.photos__row) {*/
    /*  grid-column-gap: 20px;*/
    /*}*/

    .case__gallery {
      height: 450px;
      margin: 140px 0;
    }
  }
  @media (max-width: 680px) {
    .case {
      padding-top: 130px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .case__cover-block {
      margin-left: -20px;
      margin-right: -20px;
    }

    .case__category {
      left: 25px;
      top: -27px;
      padding: 15px;
    }

    .case__aside {
      min-width: auto;
    }

    .case__aside-list {
      height: auto;
    }

    .case__aside-item {
      width: 100%;
      margin-right: 0;
    }

    .case__aside-item:nth-child(n + 3) {
      margin-left: 0;
    }

    .case__aside-item:last-child {
      border-bottom: none;
    }

    .photos {
      grid-template-columns: 100%;
      grid-row-gap: 40px;
    }

    :global(.photos__photo.big) {
      grid-column: 1;
    }

    /*:global(.photos__photo:not(:last-child)) {*/
    /*  margin-bottom: 40px;*/
    /*}*/

    /*:global(.photos__row:not(:last-child)) {*/
    /*  margin-bottom: 40px;*/
    /*}*/
    .case__gallery {
      height: 320px;
      margin: 100px 0;
    }
  }
</style>
