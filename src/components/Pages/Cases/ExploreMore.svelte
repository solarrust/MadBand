<script>
  import { dict, t, locale } from "../../services/i18n";
  import { Link, Router, Route } from "svelte-navigator";
  import Lang from "../Main/Lang.svelte";

  export let moreProjects;
</script>

<Router>
  <div class="cases__explore">
    <p class="cases__explore-text">{$t("casePage.exploreText")}</p>
    <ul class="cases__explore-list">
      {#each moreProjects as project}
        <li class="cases__explore-item">
          <Link
            class="cases__explore-link"
            to="/cases/{project.projectName.en
              .replace(/ /g, '_')
              .toLowerCase()}"
            on:click
          >
            {#if project.projectName[$locale]}
              {project.projectName[$locale]}
            {:else}
              {project.projectName.en}
            {/if}
          </Link>
          <div class="cases__explore-img-block">
            <img
              class="cases__explore-img"
              src="/{project.cover}"
              alt=""
              loading="lazy"
            />
          </div>
        </li>
      {/each}
    </ul>
    <Lang />
  </div>
</Router>

<style>
  .cases__explore {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 200px 40px;
    color: var(--thistle);
    background-color: var(--green);
  }

  .cases__explore-text {
    margin-bottom: 2rem;
    font-size: var(--s-text-size);
  }

  .cases__explore-list {
    position: relative;
    z-index: 0;
    justify-content: center;
    max-width: 1280px;
    width: 85%;
    list-style: none;
    font-family: var(--accent-font);
    font-size: var(--title-text-size);
    font-weight: normal;
    text-transform: capitalize;
    text-align: center;
  }

  .cases__explore-item {
    display: inline-block;
    z-index: 1;
  }

  :global(a.cases__explore-link) {
    display: block;
    color: var(--thistle);
    transition: color 0.3s;
  }

  :global(a.cases__explore-link:hover) {
    color: var(--dandelion);
    text-decoration: none;
    transition: color 0.1s;
  }

  :global(.cases__explore-item:not(:last-child) a.cases__explore-link) {
    margin-right: 0.2em;
  }

  :global(.cases__explore-item:not(:last-child) a.cases__explore-link:after) {
    content: ",";
  }

  .cases__explore-item:hover .cases__explore-img-block {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .cases__explore-img-block {
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 90vw;
    max-height: 50vh;
    z-index: -1;
    opacity: 0;
    border-radius: 15em;
    overflow: hidden;
    transition: opacity 0.2s;
  }

  .cases__explore-img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .cases__explore-item:nth-child(odd) .cases__explore-img-block {
    transform: translate(-50%, -50%) rotate(-5deg);
  }

  .cases__explore-item:nth-child(even) .cases__explore-img-block {
    transform: translate(-50%, -50%) rotate(5deg);
  }

  @media (max-width: 1280px) {
    .cases__explore-list {
      width: 100%;
      font-size: 40px;
    }
  }

  @media (max-width: 680px) {
    .cases__explore-list {
      font-size: 28px;
    }
  }
</style>
