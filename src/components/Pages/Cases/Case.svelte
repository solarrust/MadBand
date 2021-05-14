<script>
  import { tns } from "tiny-slider/src/tiny-slider";

  import { dict, t, locale } from "../../services/i18n";
  import { onMount } from "svelte";

  export let title;
  export let project;
  export let category;
  export let bkg;

  function photosRowCreator(arr) {
    let count = Math.round(arr.length / 2);

    for (let i = 0; i < count; i++) {
      let rowBlock = document.createElement("div");
      rowBlock.classList.add("photos__row");
      document.querySelector(".photos").append(rowBlock);
    }
  }

  function photosInsert(arr, parentClass) {
    let parents = document.querySelectorAll(`.${parentClass}`);
    let photosArr1 = [];
    let photosArr2 = [];

    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        photosArr1.push(arr[i]);
      } else {
        photosArr2.push(arr[i]);
      }
    }

    for (let i = 0; i < parents.length; i++) {
      let img;
      let currentArr;
      let count = 0;

      while (count < 2) {
        if (parents[i].innerHTML === "") {
          currentArr = photosArr2;
        } else {
          currentArr = photosArr1;
        }
        if (currentArr[i].src !== "") {
          img = document.createElement("img");
          img.src = `/${currentArr[i].src}`;
          if (currentArr[i].flag !== "") {
            currentArr[i].flag
              .split(" ")
              .forEach((cl) => img.classList.add(cl));
          }
        } else {
          img = document.createElement("div");
          img.classList.add("empty");
        }

        img.classList.add("photos__photo");

        parents[i].append(img);

        count++;
      }
    }
  }

  function classCreator(img) {
    img.onload = () => {
      let w = img.width;
      let h = img.height;

      if (w > h) {
        img.classList.add("_horizontal");

        img.parentNode.childNodes.forEach((ch) => {
          if (!ch.classList.contains("_horizontal")) {
            ch.classList.add("_stretch");
          }
        });
      }
    };
  }

  onMount(() => {
    window.scrollTo(0, 0);

    photosRowCreator(project.photos);
    photosInsert(project.photos, "photos__row");

    let rows = document.querySelectorAll(".photos__row");

    rows.forEach((r) => {
      r.childNodes.forEach((c) => {
        classCreator(c);
      });
    });

    // document.querySelector("[data-slick]").slick({});

    const slider = tns({
      container: "[data-slider]",
      items: 3,
      mouseDrag: true,
      slideBy: 1,
      swipeAngle: false,
      speed: 400,
      gutter: 35,
      center: true,
      controls: false,
      nav: false,
      preventScrollOnTouch: "auto",
    });
  });
</script>

<div class="case-page _{bkg}">
  <section class="case">
    {#if $locale === "ru" && project.projectName.ru !== ""}
      <h2 class="case__client">{project.projectName.ru}</h2>
    {:else}
      <h2 class="case__client">{project.projectName.en}</h2>
    {/if}
    <h1 class="case__name">{project.caseName}</h1>

    <div class="case__cover-block">
      <span
        class="case__category"
        style={`
      --fontColor:
      ${category.font};
      --bkg:
      ${category.bkg}`}>{category[$locale]}</span
      >

      {#if project.isVideoCover}
        <div class="case__video-wrapper">
          <video
            src="/{project.videoCover}"
            class="case__video-cover"
            poster="/{project.pageCover}"
            muted
            controls
          />
        </div>
      {:else}
        <img src="/{project.pageCover}" alt="" />
      {/if}
    </div>
    <div class="case__parent">
      <aside class="case__aside">
        <ul class="case__aside-list">
          {#each Object.entries(project.data) as [key, value]}
            <li class="case__aside-item">
              <span class="case__aside-label">{key}</span>
              {#if typeof value === "object"}
                {#each value as el}
                  {el}<br />
                {/each}
              {:else}
                {value}
              {/if}
            </li>
          {/each}
        </ul>
      </aside>
      <main class="case__main">
        <p class="case__text">{@html project.text[$locale]}</p>
      </main>
    </div>

    {#if project.photos}
      <div class="case__photos photos" />
    {/if}
  </section>

  {#if project.gallery}
    <div class="case__gallery gallery" data-slider>
      {#each project.gallery as photo}
        <img src="/{photo}" alt="" class="gallery__photo" loading="lazy" />
      {/each}
    </div>
  {/if}

  <div class="work__call-to-action">
    <a href="#contacts">
      <div class="work__call-to-action__arrows" />
    </a>
  </div>
</div>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
  />
  <!--[if (lt IE 9)]><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.helper.ie8.js"></script><![endif]-->
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
  <!-- NOTE: prior to v2.2.1 tiny-slider.js need to be in <body> -->
</svelte:head>

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
    font-size: 56px;
    color: var(--green);
    text-transform: capitalize;
  }

  .case__name {
    font-size: 56px;
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
    padding-bottom: 40%;
  }

  .case__video-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: black;
  }

  .case__category {
    position: absolute;
    left: 65px;
    top: -37px;
    z-index: 1;
    padding: 30px;
    color: var(--fontColor);
    font-family: var(--main-font);
    font-size: 14px;
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
    font-size: 24px;
  }

  .photos {
    margin-top: 150px;
  }

  :global(.photos__row) {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-column-gap: 35px;
    align-items: center;
  }

  :global(.photos__row:not(:last-child)) {
    margin-bottom: 100px;
  }

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
    margin: 200px 0;
  }

  .gallery__photo {
    max-width: 530px;
    cursor: grab;
  }
</style>
