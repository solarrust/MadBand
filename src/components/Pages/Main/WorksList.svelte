<script>
  import { locale, t } from "../../services/i18n";
  import { Link, Router } from "svelte-routing";

  export let projects;
  let current = "_horizontal";
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
          <img src={project.cover} alt="" />
        </div>
      </Link>
    {/each}
  </div>
</Router>

<style>
  :global(.works__list) {
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 20px));
    grid-auto-rows: minmax(45vh, max-content);
    gap: 40px 20px;
    grid-gap: 40px 20px;
    margin: 30px auto;
  }

  :global(.works__item) {
    display: flex;
    justify-content: center;
    align-items: center;
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

  :global(.work__cover) {
    position: relative;
    padding: 0 10px;
  }

  :global(.work__name) {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--oriole);
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    transform: scale(-1, -1);
    writing-mode: tb;
  }

  :global(.works__item:nth-of-type(even) .work__name) {
    top: auto;
    bottom: 0;
  }

  :global(.works__item._horizontal .work__name) {
    left: auto;
    right: 0;
  }
</style>
