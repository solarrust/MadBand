<script>
  import { dict, locale, t } from "../../services/i18n";
  import translations from "../../../lang/translations";
  import { onMount } from "svelte";

  export let extraClass = "";

  $: languages = Object.keys(translations);

  function onChange(event) {
    $locale = event.currentTarget.value;
    localStorage.setItem("MB_lang", event.currentTarget.value);
  }

  onMount(() => {
    let langEl = document.querySelector(".lang");
    let parent = langEl.parentNode;
    let pageWidth = window.innerWidth;

    function listener(e) {
      if (parent.id && parent.id === "contacts") {
        if (
          window.pageYOffset + document.documentElement.clientHeight * 0.4 >
          parent.offsetTop
        ) {
          langEl.style.position = "absolute";
          langEl.style.bottom = "calc(40vh + 32px)";
        } else {
          langEl.style.position = "fixed";
          langEl.style.bottom = "32px";
        }
      } else {
        if (
          window.pageYOffset + document.documentElement.clientHeight - 32 >
          parent.offsetTop
        ) {
          langEl.classList.add("_thistle");
        } else {
          langEl.classList.remove("_thistle");
        }
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
    <label class="lang__item" aria-label={lang} data-hover-trigger>
      {#if lang === $locale}
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
      <span class="lang__item-text" />
    </label>
  {/each}
</div>

<style>
  .lang {
    position: fixed;
    left: 40px;
    bottom: 32px;
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
    /*font-size: 16px;*/
    font-weight: 600;
    /*border: 1px solid;*/
    /*border-radius: 50%;*/
    /*text-transform: capitalize;*/
    /*cursor: pointer;*/
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    transition: background-image 0.2s;
  }

  [value="ru"] ~ .lang__item-text {
    background-image: url(../svg/lang-ru.svg);
  }

  [value="en"] ~ .lang__item-text {
    background-image: url(../svg/lang-en.svg);
  }

  [value="ru"]:checked ~ .lang__item-text {
    background-image: url(../svg/lang-ru-active.svg);
  }

  [value="en"]:checked ~ .lang__item-text {
    background-image: url(../svg/lang-en-active.svg);
  }

  ._thistle [value="ru"] ~ .lang__item-text {
    background-image: url(../svg/lang-ru-t.svg);
  }

  ._thistle [value="en"] ~ .lang__item-text {
    background-image: url(../svg/lang-en-t.svg);
  }

  ._thistle [value="ru"]:checked ~ .lang__item-text {
    background-image: url(../svg/lang-ru-t-active.svg);
  }

  ._thistle [value="en"]:checked ~ .lang__item-text {
    background-image: url(../svg/lang-en-t-active.svg);
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
