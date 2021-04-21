<script>
  import translations from "./components/lang/translations";
  import { dict, locale, t } from "./components/services/i18n";
  import { Router, Route, Link } from "svelte-navigator";
  import Main from "./components/Pages/Main/Main.svelte";
  import Studio from "./components/Pages/Studio.svelte";
  import Portfolio from "./components/Pages/Portfolio.svelte";
  import Header from "./components/Header/Header.svelte";
  import Lang from "./components/lang/Lang.svelte";

  $: languages = Object.keys(translations);
  $: dict.set(translations);
</script>

<Router>
  <Header />

  <main>
    <Route path="/">
      <Main />
    </Route>

    <Route path="portfolio">
      <Portfolio />
    </Route>

    <Route path="studio">
      <Studio />
    </Route>
  </main>
  <Lang />
</Router>
