<script>
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { locale, t } from "../../services/i18n";
  import { Link, Router } from "svelte-routing";
  import WorkList from "./WorksList.svelte";

  import data from "../../../data/projects.json";
  import AllWorksBlock from "./AllWorksBlock.svelte";
  import WorksPattern from "../../Patterns/WorksPattern.svelte";

  let projects = data.projects;

  let animation;

  onMount(() => {});

  beforeUpdate(() => {});
</script>

<Router>
  <section class="main__section works">
    <div class="works__content">
      <div class="works__text">
        {@html $t("mainPage.workText")}
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
    font-size: var(--m-text-size);
    line-height: var(--m-text-lh);
  }

  :global(.works__text p:not(:last-child)) {
    margin-bottom: 24px;
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
