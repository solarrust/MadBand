<script>
  import { onMount } from "svelte";
  import Contacts from "../Main/Contacts.svelte";
  import { dict, t, locale } from "../../services/i18n";
  import { Link, Router } from "svelte-navigator";
  import Person from "./Person.svelte";

  import dataRU from "../../lang/ru.json";
  import dataEN from "../../lang/en.json";

  let localeStuff = {
    ru: dataRU.studioPage.stuff,
    en: dataEN.studioPage.stuff,
  };

  onMount(() => {
    let patternParent = document.querySelector(".portfolio__pattern");
    let blockW = patternParent.offsetWidth;
    let blockH = patternParent.offsetHeight;
    let circleSize = 75;

    let circleByW = Math.ceil(blockW / circleSize);
    let circleByH = Math.ceil(blockH / circleSize);
    let circles = circleByW * circleByH;

    for (let i = 0; i <= circles; i++) {
      let circleBlock = document.createElement("div");
      circleBlock.classList.add("portfolio__pattern-item");
      patternParent.appendChild(circleBlock);
    }
  });

  let currentLocale;
</script>

<Router>
  <section class="studio">
    <div class="studio__content">
      {$t("studioPage.subtitle")}
      {@html $t("studioPage.title")}

      <div class="stuff studio__stuff">
        {#if $locale === "ru"}
          {#each localeStuff.ru as person}
            <Person
              name={person.name}
              position={person.position}
              img={person.img}
            />
          {/each}
        {:else}
          {#each localeStuff.en as person}
            <Person
              name={person.name}
              position={person.position}
              img={person.img}
            />
          {/each}
        {/if}
      </div>

      <p class="studio-text">
        {$t("studioPage.text")}
      </p>
    </div>
    <div class="work__call-to-action">
      <a href="#contacts"
        >{@html $t("studioPage.callToAction")}
        <div class="work__call-to-action__arrows" />
      </a>
    </div>
  </section>
  <div class="work__pattern">
    <div class="portfolio__pattern _blue" />
  </div>
  <Contacts />
</Router>

<style>
  .studio {
    padding: 100px 0 60px;
    background-color: var(--sky-blue);
  }

  .studio__content {
    min-height: 100vh;
    width: 85%;
    max-width: 1440px;
    margin: 0 auto;
  }

  :global(.portfolio__pattern._blue .portfolio__pattern-item:after) {
    background-color: var(--sky-blue);
  }
</style>
