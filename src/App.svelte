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

  $: languages = Object.keys(translations);
  $: dict.set(translations);

  export let url = "";
</script>

<Router {url}>
  <Header />
  <main>
    <Route path="/">
      <Main />
    </Route>

    <Route path="cases" replace>
      <Portfolio />
    </Route>

    <Route path="studio" replace>
      <Studio />
    </Route>

    <Route path="cases/:id" let:params replace>
      <CaseTemplate link={params.id} />
    </Route>
  </main>
</Router>
