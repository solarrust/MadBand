<script>
  import { gsap } from "gsap";
  import { Link, Router, Route } from "svelte-navigator";
  import { dict, t, locale } from "../../services/i18n";

  export let id;

  import data from "../../../data/projects.json";
  import Case from "./Case.svelte";
  import ExploreMore from "./ExploreMore.svelte";
  import Lang from "../../../lang/Lang.svelte";

  let categories = data.categories;
  let projects = data.projects;

  let extraClass = "_purple";

  let currentCase;
  let currentCategory;
  let bckColor;
  let moreProjects = [];

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectName.en.replace(/ /g, "_").toLowerCase() === id) {
      currentCase = projects[i];

      if (projects[i].category % 2) {
        bckColor = "thistle";
      } else {
        bckColor = "dandelion";
      }

      currentCategory = categories[projects[i].category - 1];
    }
  }

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].category === currentCase.category) {
      moreProjects.push(projects[i]);
    }
  }
</script>

<slot>
  <Case
    title={id}
    data={currentCase}
    category={currentCategory}
    bkg={bckColor}
  />

  <ExploreMore {moreProjects} />
  <Lang />
</slot>

<style>
</style>
