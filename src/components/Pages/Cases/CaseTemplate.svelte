<script>
  import { gsap } from "gsap";
  import { Link, Router, Route } from "svelte-navigator";
  import { dict, t, locale } from "../../services/i18n";

  export let id;

  import data from "../../data/projects.json";

  let categories = data.categories;
  let projects = data.projects;
</script>

{#each projects as p}
  <Route render="cases/{p.caseName.replace(/ /g, '_').toLowerCase()}">
    <section class="case" {id}>
      <h1 class="case__title">{p.caseName}</h1>
    </section>
  </Route>
{/each}

<style></style>
