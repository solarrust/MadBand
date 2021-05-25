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

  onMount(() => {
    window.scrollTo(0, 0);
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
</style>
