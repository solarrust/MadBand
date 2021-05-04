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

  let philisophyItems = {
    ru: dataRU.studioPage.philosophy.items,
    en: dataEN.studioPage.philosophy.items,
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
      <p class="studio__subtitle">{$t("studioPage.subtitle")}</p>
      <h2 class="studio__title">{@html $t("studioPage.title")}</h2>

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

      <p class="studio__text">
        {$t("studioPage.text")}
      </p>

      <div class="studio__pattern square-pattern" />

      <div class="studio__mission mission">
        <span class="mission__label label"
          >{$t("studioPage.mission.label")}</span
        >
        <p class="mission__text">{@html $t("studioPage.mission.text")}</p>
      </div>

      <div class="studio__philosophy philosophy">
        <div class="philosophy__block">
          <span class="philosophy__label label"
            >{$t("studioPage.philosophy.label")}</span
          >
          <div class="philosophy__img locus">
            <div class="locus">
              <div class="locus__item" />
              <div class="locus__item" />
              <div class="locus__item" />
              <div class="locus__star" />
            </div>
          </div>
          <div class="philosophy__content">
            <p class="philosophy__text">{$t("studioPage.philosophy.text")}</p>
            <p class="philosophy__big-text">
              {@html $t("studioPage.philosophy.bigText")}
            </p>
          </div>
        </div>
        <div class="philosophy__items">
          <ul class="philosophy-list">
            {#if $locale === "ru"}
              {#each philisophyItems.ru as item}
                <li class="philosophy-list__item">{item}</li>
              {/each}
            {:else}
              {#each philisophyItems.en as item}
                <li class="philosophy-list__item">{item}</li>
              {/each}
            {/if}
          </ul>
        </div>
      </div>
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
    padding: 220px 0 60px;
    color: var(--green);
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

  .studio__subtitle {
    margin-bottom: 30px;
    font-size: 24px;
    text-align: center;
  }

  .studio__title {
    width: 80%;
    margin: 0 auto;
    font-family: var(--accent-font);
    font-weight: normal;
    font-size: 56px;
    text-align: center;
  }

  .studio__stuff {
    margin-top: 160px;
    margin-bottom: 105px;
  }

  .stuff {
    display: flex;
  }

  .studio__text {
    font-size: 28px;
  }

  .studio__pattern {
    margin: 100px 0 180px;
  }

  .mission {
    position: relative;
    margin-bottom: 150px;
  }

  .mission__text {
    margin-left: 85px;
    font-family: var(--accent-font);
    font-size: 56px;
  }

  .label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
  }

  .mission__label {
    transform: translate(-50%, 240%) rotate(-90deg);
  }

  .philosophy {
    padding-top: 230px;
    border-top: 1px solid var(--green);
  }

  .philosophy__block {
    position: relative;
    display: flex;
  }

  .philosophy__label {
    transform: translate(-50%, 240%) rotate(-90deg);
  }

  .locus {
    position: relative;
    z-index: 1;
    display: flex;
  }

  .locus__item {
    position: relative;
    width: 270px;
    height: 550px;
    border: 1px solid var(--green);
    border-radius: 50%;
  }

  .locus__item:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 13px;
    height: 13px;
    background-color: var(--green);
    border-radius: 50%;
    offset-path: path(
      "M270.5 275c0 75.879-15.155 144.551-39.636 194.233-24.495 49.715-58.242 80.267-95.364 80.267-37.122 0-70.869-30.552-95.364-80.267C15.656 419.551.5 350.879.5 275S15.655 130.449 40.136 80.767C64.63 31.052 98.377.5 135.5.5c37.122 0 70.869 30.552 95.364 80.267C255.345 130.449 270.5 199.12 270.5 275z"
    );
    animation: move 20s infinite linear;
  }

  .locus__item:nth-child(2):after {
    animation-delay: -10s;
  }

  .locus__item:nth-child(3):after {
    animation-delay: -5s;
  }

  .locus__item:not(:first-child) {
    margin-left: -170px;
  }

  .locus__star {
    position: absolute;
    top: calc(50% - 37px);
    left: calc(50% - 37px);
    width: 75px;
    height: 75px;
    z-index: -1;
    background-image: url("../svg/yellow-star.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .philosophy__content {
    margin-left: 75px;
  }

  .philosophy__text {
    font-size: 24px;
  }

  .philosophy__big-text {
    margin-top: 30px;
    font-size: 56px;
    font-family: var(--accent-font);
    font-weight: normal;
  }

  .philosophy__items {
    margin-top: 230px;
  }

  @keyframes move {
    100% {
      offset-distance: 100%;
    }
  }
</style>
