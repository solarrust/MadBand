<script context="module">
  export function strokeTextCreator() {
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
  }

  export function strokeTextUpdate(text, element) {
    element.setAttribute("aria-label", text);
    let textParent = document.createElement("div");
    textParent.classList.add("stroke__text-parent");

    let strokeTextWords = text.split(" ");

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
      element.innerHTML = "";
      element.appendChild(textParent);
    });
  }
</script>

<script>
  import Hero from "./Hero.svelte";
  import Works from "./Works.svelte";
  import Contacts from "./Contacts.svelte";
  import { onMount } from "svelte";
  import { cursorDefault, cursorMoveHandler } from "../../../App.svelte";

  onMount(() => {
    window.scrollTo(0, 0);

    let customCursor = document.querySelector(".custom-cursor");
    let links = document.querySelectorAll("a");
    let targets = document.querySelectorAll("[data-hover-trigger]");

    cursorDefault(customCursor);
    cursorMoveHandler(customCursor, links, targets);
  });
</script>

<slot>
  <Hero />

  <Works />

  <Contacts />
</slot>

<style>
  :global(.main__section) {
    min-height: 100vh;
  }

  :global(.stroke__text-parent) {
    display: flex;
    flex-wrap: wrap;
    color: var(--bkg-color);
    text-shadow: -1px -1px 0 var(--green), 1px -1px 0 var(--green),
      -1px 1px 0 var(--green), 1px 1px 0 var(--green);
  }

  :global(.stroke__text-parent > *) {
    display: flex;
  }

  :global(.stroke__text-parent > *:not(:last-child)) {
    margin-right: 0.28em;
  }

  :global(.stroke__char-parent) {
    position: relative;
    display: inline-block;
    white-space: pre;
  }

  :global(.stroke__char-parent:before) {
    display: block;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    content: attr(data-content);
    overflow: hidden;
    pointer-events: none;
    color: var(--green);
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    transition: 0.2s;
  }

  :global([data-stroke-parent]) {
    /*cursor: pointer;*/
    cursor: none;
  }

  :global([data-stroke-parent]:hover .stroke__char-parent:before) {
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
  }
</style>
