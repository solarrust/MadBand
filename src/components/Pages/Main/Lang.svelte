<script>
  import { dict, locale, t } from "../../services/i18n";
  import translations from "../../../lang/translations";
  import { onMount } from "svelte";

  export let extraClass;

  $: languages = Object.keys(translations);

  function onChange(event) {
    $locale = event.currentTarget.value;
  }

  onMount(() => {
    let langEl = document.querySelector(".contacts__lang");
    let parent = document.querySelector("#contacts");
    let pageWidth = window.innerWidth;

    function listener(e) {
      if (
        window.pageYOffset + document.documentElement.clientHeight / 2 >
        parent.offsetTop
      ) {
        langEl.style.position = "absolute";
        langEl.style.bottom = "calc(50vh + 32px)";
      } else {
        langEl.style.position = "fixed";
        langEl.style.bottom = "32px";
      }
    }

    if (pageWidth >= 680) {
      parent.style.position = "relative";
      document.addEventListener("scroll", listener);
    } else if (pageWidth < 680) {
      document.removeEventListener("scroll", listener);
    }

    window.addEventListener("resize", (e) => {
      pageWidth = window.innerWidth;

      if (pageWidth >= 680) {
        parent.style.position = "relative";
        document.addEventListener("scroll", listener);
      } else if (pageWidth < 680) {
        document.removeEventListener("scroll", listener);
      }
    });
  });
</script>

<div class="lang {extraClass}">
  {#each languages as lang}
    <label class="lang__item">
      {#if lang === "ru"}
        <input
          on:change={onChange}
          type="radio"
          name="lang"
          value={lang}
          checked
        />
      {:else}
        <input on:change={onChange} type="radio" name="lang" value={lang} />
      {/if}
      <span class="lang__item-text">{lang}</span>
    </label>
  {/each}
</div>

<style>
  .lang {
    position: fixed;
    left: 40px;
    bottom: 35px;
    z-index: 10;
    display: flex;
    color: var(--green);
  }

  .lang__item + .lang__item {
    margin-left: 7px;
  }

  .lang__item > input {
    display: none;
  }

  .lang__item {
    user-select: none;
  }

  .lang__item-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 10px 5px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid;
    border-radius: 50%;
    text-transform: capitalize;
    cursor: pointer;
  }

  input:checked + .lang__item-text {
    color: var(--sky-blue);
    border: none;
    background-color: var(--oriole);
  }

  @media (max-width: 680px) {
    .lang {
      top: 36px;
      bottom: auto;
      left: auto;
      right: 70px;
    }

    .lang__item-text {
      width: 28px;
      height: 28px;
    }
  }
</style>
