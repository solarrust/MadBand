<script>
  import translations from "./lang/translations";
  import { dict, locale, t } from "./components/services/i18n";
  import { Router, Link, Route } from "svelte-routing";
  import { onMount } from "svelte";
  import Main from "./components/Pages/Main/Main.svelte";
  import Studio from "./components/Pages/Studio/Studio.svelte";
  import Portfolio from "./components/Pages/Portfolio.svelte";
  import Header from "./components/Header/Header.svelte";
  import CaseTemplate from "./components/Pages/Cases/CaseTemplate.svelte";
  import ExploreMore from "./components/Pages/Cases/ExploreMore.svelte";

  $: languages = Object.keys(translations);
  $: dict.set(translations);

  export let url = "";
</script>

<Router {url}>
  <main>
    <Route path="/" replace>
      <Header class="_small" />

      <Main />
    </Route>

    <Route path="cases" replace>
      <Header />

      <Portfolio />
    </Route>

    <Route path="studio" replace>
      <Header />

      <Studio />
    </Route>

    <Route path="cases/:id" let:params replace>
      <Header />

      <CaseTemplate link={params.id} />
    </Route>
  </main>
</Router>
