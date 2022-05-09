<script>
  import { locale, t } from "../../services/i18n";
  import { Link, Router } from "svelte-navigator";
  import { onMount } from "svelte";
  import lozad from "lozad";

  export let projects;
  let current = "_horizontal";

  function transform() {
    const items = Array.from(document.querySelectorAll(".work"));
    let count = 0;

    items.forEach((item) => {
      if (item.classList.contains("_horizontal")) {
        if (count % 2) {
          item.querySelector(".work__img").style.transform = "rotate(3deg)";
        } else {
          item.querySelector(".work__img").style.transform = "rotate(-3deg)";
        }
        count++;
      }
    });
  }

  onMount(() => {
    window.addEventListener("load", transform);
    const observer = lozad();
    observer.observe();
  });
</script>

<Router>
  <div class="works__list">
    {#each projects as project}
      <Link
        to="/cases/{project.projectName.en.replace(/ /g, '_').toLowerCase()}"
        class="work works__item {project.isVideoCover === true ? current : ''}"
      >
        <div class="work__cover">
          <div class="work__name">
            {#if project.projectName[$locale]}
              {project.projectName[$locale]}
            {:else}
              {project.projectName.en}
            {/if}
          </div>
          <div class="work__img">
            <img
              data-src={project.cover}
              alt={project.projectName[$locale]}
              class="lozad"
            />
          </div>
        </div>
      </Link>
    {/each}
  </div>
</Router>

<style>
  .works__list {
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 15px));
    grid-auto-rows: minmax(350px, max-content);
    grid-auto-flow: row dense;
    gap: 40px 20px;
    grid-gap: 40px 20px;
    margin: 30px auto;
  }

  :global(.works__item) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .work__cover img {
    max-width: 100%;
  }

  .work__img {
    width: 196px;
    height: 288px;
    border-radius: 15em;
    overflow: hidden;
    transition: 0.2s;
  }

  :global(._horizontal) .work__img {
    width: 100%;
    max-width: 550px;
    height: 100%;
    max-height: 250px;
  }

  .work__img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  :global(.works__item:nth-child(2n + 1)) {
    align-self: flex-end;
  }

  :global(.works__item:nth-child(2n + 2)) {
    align-self: center;
  }

  :global(.works__item:nth-child(4n)) {
    align-self: flex-start;
  }

  :global(.works__item._horizontal) {
    grid-column: span 2;
  }

  :global(.works__item:not(._horizontal):nth-of-type(2n + 1) .work__img) {
    transform: rotate(6deg);
  }

  :global(.works__item:not(._horizontal):nth-of-type(2n + 2) .work__img) {
    transform: rotate(0);
  }

  :global(.works__item:not(._horizontal):nth-of-type(4n) .work__img) {
    transform: rotate(-6deg);
  }

  /*:global(.works__item._horizontal:nth-of-type(odd) .work__img) {*/
  /*  transform: rotate(-3deg);*/
  /*}*/

  /*:global(.works__item._horizontal:nth-of-type(even) .work__img) {*/
  /*  transform: rotate(3deg);*/
  /*}*/

  .work__cover {
    position: relative;
    padding: 0 10px;
  }

  .work__name {
    position: absolute;
    top: 0;
    left: -20px;
    z-index: 1;
    color: var(--oriole);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    transform: scale(-1, -1);
    writing-mode: tb;
  }

  /*:global(.works__item:nth-of-type(even) .work__name) {*/
  /*  top: auto;*/
  /*  bottom: 0;*/
  /*}*/

  /*:global(.works__item._horizontal .work__name) {*/
  /*  left: auto;*/
  /*  right: -10px;*/
  /*}*/

  @media (max-width: 1280px) {
    .works__list {
      grid-template-columns: repeat(2, calc(50% - 10px));
      grid-auto-rows: minmax(40vmin, min-content);
    }

    :global(.works__item:nth-child(odd)) {
      align-self: flex-end;
    }

    :global(.works__item:nth-child(even)) {
      align-self: flex-start;
    }

    :global(.works__item._horizontal) {
      width: 100%;
      place-self: center;
      align-self: center;
    }

    .work__cover {
      display: flex;
      justify-content: center;
      align-items: center;
      /*width: 100%;*/
    }

    :global(.works__item._horizontal .work__cover) {
      /*width: 100%;*/
    }

    .work__cover img {
      width: 100%;
    }

    .work__img {
      width: 208px;
    }

    :global(.works__item._horizontal .work__cover img) {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .works__list {
      grid-auto-rows: auto;
    }

    :global(.works__item._horizontal) {
      align-self: center;
    }

    :global(.works__item._horizontal .work__cover) {
      max-width: 560px;
    }

    .work__cover {
      /*width: 100%;*/
    }

    .work__img {
      width: 128px;
      height: 180px;
    }
  }
</style>
