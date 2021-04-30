<script>
  import { t, locale } from "../../services/i18n";
  import { Link } from "svelte-navigator";

  import data from "../../data/projects.json";

  let projects = data.projects;

  let current = "_horizontal";
</script>

<section class="main__section works">
  <div class="works__content">
    <div class="works__text">
      {@html $t("mainPage.workText")}
    </div>
    <div class="works__list">
      {#each projects as project}
        <Link
          to="portfolio"
          class="work works__item {project.isVideoCover === true
            ? current
            : ''}"
        >
          <div class="work__cover">
            <div class="work__name">
              {#if $locale === "en" || project.projectName.ru === ""}
                {project.projectName.en}
              {:else}
                {project.projectName.ru}
              {/if}
            </div>
            <img src={project.cover} alt={project.projectName.en} />
          </div>
        </Link>
      {/each}
    </div>
  </div>

  <div class="works__all-link">
    <Link to="portfolio">
      <div class="ticker">
        <div class="ticker__item _big" />
        <div class="ticker__item _small" />
      </div>
    </Link>
  </div>
</section>

<style>
  :global(.works) {
    padding: 100px 0 140px;
    background-color: var(--dandelion);
  }

  :global(.works__content) {
    width: 85%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .works__text {
    margin-left: auto;
    width: 65%;
    color: var(--green);
    font-size: 24px;
  }

  :global(.works__text p:not(:last-child)) {
    margin-bottom: 24px;
  }

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

  .works__all-link {
    margin-top: 65px;
  }

  :global(.ticker__item._big) {
    height: 85px;
    background-color: var(--thistle);
    background-image: url("../svg/all-cases.svg");
    background-position-y: center;
    background-repeat: repeat-x;
    animation: allCases 14s infinite linear;
  }

  :global(.works__all-link:hover .ticker__item._big) {
    animation-play-state: paused;
  }

  :global(.ticker__item._small) {
    height: 40px;
    background-image: url("../svg/see-more.svg");
    background-position-y: center;
    background-repeat: repeat-x;
    animation: allCases 10s infinite linear reverse;
  }

  :global(.works__all-link:hover .ticker__item._small) {
    animation-direction: normal;
    background-image: url("../svg/see-more-hover.svg");
    background-size: 100px;
  }

  @keyframes allCases {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 1500px;
    }
  }
</style>
