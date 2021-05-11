<script>
  import translations from "./components/lang/translations";
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

  onMount(() => {
    let strokeTextBlocks = document.querySelectorAll("[data-stroke-text]");

    strokeTextBlocks.forEach((el) => {
      el.setAttribute("aria-label", el.innerHTML);

      let textParent = document.createElement("div");
      textParent.classList.add("stroke__text-parent");

      let strokeTextWords = el.innerHTML.split(" ");

      strokeTextWords.forEach((word) => {
        let wordParent = document.createElement("div");
        wordParent.classList.add("stroke__word-parent");
        let char = word.split("");

        char.forEach((ch) => {
          let charParent = document.createElement("span");
          charParent.classList.add("stroke__char-parent");
          charParent.setAttribute("aria-hidden", "true");
          charParent.setAttribute("data-content", ch);
          charParent.innerHTML = ch;

          wordParent.appendChild(charParent);
        });

        textParent.appendChild(wordParent);
        el.innerHTML = "";
        el.appendChild(textParent);
      });
    });
  });
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

    <Route path="cases/:id" let:params>
      <Header />

      <CaseTemplate id={params.id} />
    </Route>
  </main>
</Router>
