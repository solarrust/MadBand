<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  import { locale, t } from "../../services/i18n";
  import { Link, Router } from "svelte-routing";
  import WorkList from "./WorksList.svelte";

  import data from "../../../data/projects.json";
  import ru from "../../../lang/ru.json";
  import en from "../../../lang/en.json";
  import AllWorksBlock from "./AllWorksBlock.svelte";
  import WorksPattern from "../../Patterns/WorksPattern.svelte";

  let projects = data.projects;
  let worksList = {
    ru: ru.mainPage.workWithUs,
    en: en.mainPage.workWithUs,
  };

  let animation;
</script>

<Router>
  <section class="main__section works">
    <div class="works__content">
      <div class="works__block">
        <h2 class="works__title">{@html $t("mainPage.workTitle")}</h2>

        <div class="works__list-block">
          {#if $locale === "ru"}
            Работа с нами это:
          {:else}
            Working with us is:
          {/if}

          <ol class="works__list work-list">
            {#each worksList[$locale] as item}
              <li
                class="works__list-item works-list__item"
                data-hover-trigger
                data-stroke-parent
              >
                <h3 class="works-list__title" data-stroke-text>
                  {@html item.title}
                </h3>
                <p class="works-list__text">{item.text}</p>
              </li>
            {/each}
          </ol>
        </div>
        <div class="works__text">
          {@html $t("mainPage.workText")}
        </div>
      </div>

      <WorkList {projects} />
    </div>

    <AllWorksBlock />
  </section>
  <WorksPattern extraClass={"_works"} />
</Router>

<style>
  :global(.works) {
    padding: 100px 0 140px;
    background-color: var(--portfolio-bkg);

    --bkg-color: var(--portfolio-bkg);
  }

  :global(.works__content) {
    width: 85%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .works__block {
    width: 65%;
    margin-left: auto;
    color: var(--green);
  }

  .works__title {
    font-family: var(--accent-font);
    font-size: var(--title-text-size);
    font-weight: 400;
    line-height: 1.2;
  }

  .works__text {
    font-size: var(--m-text-size);
    line-height: var(--m-text-lh);
  }

  .works__list-block {
    width: 55%;
    max-width: 500px;
    margin: 100px 0;
    font-size: var(--l-text-size);
  }

  .work-list {
    margin-top: 12px;
    list-style: none;
    counter-reset: works-list;
  }

  .works-list__item {
    counter-increment: works-list;
  }

  .works-list__item:not(:last-child) {
    margin-bottom: 80px;
  }

  .works-list__title {
    display: flex;
    text-transform: uppercase;
  }

  .works-list__title::before {
    content: counter(works-list);
    margin-right: 12px;
    font-size: 14px;
  }

  .works-list__text {
    margin-top: 15px;
    font-size: 24px;
  }

  :global(.works__text p:not(:last-child)) {
    margin-bottom: 24px;
  }

  @media (max-width: 1280px) {
    .works__block,
    .works__list-block {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .works {
      padding-bottom: 40px;
    }
    .works__text {
      width: 100%;
    }
  }
</style>
