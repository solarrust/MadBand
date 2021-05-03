<script>
  import translations from "./components/lang/translations";
  import { dict, locale, t } from "./components/services/i18n";
  import { Router, Link, Route } from "svelte-routing";
  import Main from "./components/Pages/Main/Main.svelte";
  import Studio from "./components/Pages/Studio/Studio.svelte";
  import Portfolio from "./components/Pages/Portfolio.svelte";
  import Header from "./components/Header/Header.svelte";

  $: languages = Object.keys(translations);
  $: dict.set(translations);

  export let url = "";
</script>

<Router {url}>
  <main>
    <Route path="/">
      <Header class="_small" />

      <Main />
    </Route>

    <Route path="portfolio">
      <Header />

      <Portfolio />
    </Route>

    <Route path="studio">
      <Header />

      <Studio />
    </Route>
  </main>
</Router>
