<script>
  import translations from "./components/lang/translations";
  import { dict, locale, t } from "./components/services/i18n";
  import { Router, Route, Link } from "svelte-navigator";
  import Logo from "./components/Header/Logo.svelte";
  import Main from "./components/Pages/Main.svelte";
  import Studio from "./components/Pages/Studio.svelte";
  import Portfolio from "./components/Pages/Portfolio.svelte";

  $: languages = Object.keys(translations);
  $: dict.set(translations);
</script>

<Router>
  <header>
    <Logo />
    <nav>
      <Link to="portfolio">{$t("header.menu.work")}</Link>
      <Link to="studio">{$t("header.menu.studio")}</Link>
      <Link to="#contacts">{$t("header.menu.contacts")}</Link>
    </nav>
  </header>
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

    <section id="contacts">Contacts</section>
  </main>
  <footer>
    <select bind:value={$locale}>
      {#each languages as lang}
        <option value={lang}>
          {lang}
        </option>
      {/each}
    </select>
  </footer>
</Router>
