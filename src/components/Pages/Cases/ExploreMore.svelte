<script>
  import { dict, t, locale } from "../../services/i18n";
  import { Link, Router, Route } from "svelte-navigator";

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
          <img class="cases__explore-img" src="/{project.cover}" alt="" />
        </li>
      {/each}
    </ul>
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
    font-size: 14px;
  }

  .cases__explore-list {
    position: relative;
    z-index: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 915px;
    width: 65%;
    list-style: none;
    font-family: var(--accent-font);
    font-size: 56px;
    font-weight: normal;
    text-transform: capitalize;
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

  .cases__explore-item:hover .cases__explore-img {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .cases__explore-img {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s;
  }
</style>
