<script>
  import { onMount } from "svelte";

  export let link;

  import data from "../../../data/projects.json";
  import Case from "./Case.svelte";
  import ExploreMore from "./ExploreMore.svelte";

  let categories = data.categories;
  let projects = data.projects;

  let extraClass = "_purple";

  let currentCase;
  let currentCategory;
  let bckColor;
  let moreProjects = [];

  function currentCaseDetector(idx) {
    if (
      projects[idx].projectName.en.replace(/ /g, "_").toLowerCase() === link
    ) {
      currentCase = projects[idx];
    }
  }

  function currentCatDetector() {
    currentCategory = categories[currentCase.category - 1];
  }

  function bkgColorDetector() {
    bckColor = currentCase.category % 2 ? "thistle" : "dandelion";
  }

  function currentDataAgregator() {
    for (let i = 0; i < projects.length; i++) {
      currentCaseDetector(i);

      if (currentCase) {
        currentCatDetector();

        if (currentCategory) {
          bkgColorDetector();
        }
      }
    }
  }

  currentDataAgregator();

  function moreProjectsCollector() {
    for (let i = 0; i < projects.length; i++) {
      if (
        projects[i].category === currentCase.category &&
        projects[i] !== currentCase
      ) {
        moreProjects.push(projects[i]);
      }
    }
  }

  moreProjectsCollector();

  function caseRefreshHandler() {
    window.location.refresh();
  }

  let projectData = {
    title: link,
    project: currentCase,
    category: currentCategory,
    bkg: bckColor,
  };

  onMount(() => {});
</script>

<slot>
  <Case {...projectData} />

  <ExploreMore {moreProjects} on:click={caseRefreshHandler} />
</slot>

<style>
</style>
