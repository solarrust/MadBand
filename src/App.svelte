<script context="module">
  import { TweenMax } from "gsap";

  let customCursor;
  let links;
  let targets;

  export function cursorDefault(cursor) {
    if (cursor) {
      cursor.classList.remove("_hover");
      if (cursor.classList.contains("_big")) {
        cursor.classList.remove("_big");
      }
    }
  }

  export function cursorMoveHandler(cursor, links, targets) {
    document.addEventListener("mousemove", (e) => {
      TweenMax.to(cursor, 0.05, {
        top: `${e.clientY - cursor.offsetHeight / 2}px`,
        left: `${e.clientX - cursor.offsetWidth / 2}px`,
      });
    });

    function cursorHoverHandler(links, targets) {
      // let links = Array.from(
      //   document.querySelectorAll("[data-hover-trigger]")
      // );
      links.forEach((el) => {
        el.addEventListener("mouseout", () => {
          cursor.classList.remove("_hover");
        });
        el.addEventListener("mouseover", () => {
          cursor.classList.add("_hover");
        });
      });

      targets.forEach((el) => {
        el.addEventListener("mouseout", () => {
          cursor.classList.remove("_hover");
        });
        el.addEventListener("mouseover", () => {
          cursor.classList.add("_hover");
        });
      });
    }

    cursorHoverHandler(links, targets);
  }
</script>

<script>
  import translations from "./lang/translations";
  import { dict, locale, t } from "./components/services/i18n";
  import { Router, Link, Route } from "svelte-routing";
  import { afterUpdate, onMount } from "svelte";
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
  <div class="custom-cursor" />
  <Header />
  <Route path="/">
    <Main />
  </Route>

  <Route path="cases">
    <Portfolio />
  </Route>

  <Route path="studio">
    <Studio />
  </Route>

  <Route path="cases/:id" let:params>
    <CaseTemplate link={params.id} />
  </Route>
</Router>
