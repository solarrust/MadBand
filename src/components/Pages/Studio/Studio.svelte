<script>
  import { gsap } from "gsap";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  import { onMount, afterUpdate, onDestroy, beforeUpdate } from "svelte";
  import { locale, t } from "../../services/i18n";
  import { Router } from "svelte-navigator";

  import StretchSquares from "../../Patterns/StretchSquares.svelte";
  import { strokeTextCreator } from "../Main/Main.svelte";

  import Contacts from "../Main/Contacts.svelte";
  import dataRU from "../../../lang/ru.json";
  import dataEN from "../../../lang/en.json";
  import StuffSlider from "./StuffSlider.svelte";
  import Locus from "../../Patterns/Locus.svelte";
  import WorksPattern from "../../Patterns/WorksPattern.svelte";
  import { cursorDefault, cursorMoveHandler } from "../../../App.svelte";

  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);

  let localeStuff = {
    ru: dataRU.studioPage.stuff,
    en: dataEN.studioPage.stuff,
  };

  let philosophyItems = {
    ru: dataRU.studioPage.philosophy.items,
    en: dataEN.studioPage.philosophy.items,
  };

  let anim;

  onMount(() => {
    // strokeTextCreator();
    window.scrollTo(0, 0);

    let customCursor = document.querySelector(".custom-cursor");
    let links = document.querySelectorAll("a");
    let targets = document.querySelectorAll("[data-hover-trigger]");

    cursorDefault(customCursor);
    cursorMoveHandler(customCursor, links, targets);

    /* let patternParent = document.querySelector(".portfolio__pattern");
    let blockW = patternParent.offsetWidth;
    let blockH = patternParent.offsetHeight;
    let circleSize = 75;

    let circles =
      Math.ceil(blockW / circleSize) * Math.ceil(blockH / circleSize);

    for (let i = 0; i <= circles; i++) {
      let circleBlock = document.createElement("div");
      circleBlock.classList.add("portfolio__pattern-item");
      patternParent.appendChild(circleBlock);
    }*/

    /*let sliderContainerWidth =
      document.querySelectorAll(".swiper-slide").length * (355 + 40);

    let breakpoints = {
      980: {
        slidesPerView: 3.8,
        spaceBetween: 40,
      },
    };

    breakpoints[sliderContainerWidth] = {
      slidesPerView: document.querySelectorAll(".swiper-slide").length,
      draggable: false,
      grabCursor: false,
    };

    let swiper = new Swiper("[data-slider]", {
      slidesPerView: 2,
      spaceBetween: 20,
      grabCursor: true,
      breakpoints: breakpoints,
    });

    console.log(swiper.originalParams.breakpoints);*/
  });
  afterUpdate(() => {
    strokeTextCreator();
  });
</script>

<Router>
  <section class="studio">
    <div class="studio__content">
      <h2 class="studio__title">{@html $t("studioPage.title")}</h2>
    </div>

    <div class="studio__slider">
      <StuffSlider />
    </div>

    <div class="studio__content">
      <p class="studio__text">
        {$t("studioPage.subtitle")}
      </p>
    </div>

    <div class="studio__content">
      <StretchSquares extraClass={"studio__pattern"} />

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
          <Locus />
          <div class="philosophy__content">
            <p class="philosophy__text">{$t("studioPage.philosophy.text")}</p>
            <p class="philosophy__big-text">
              {@html $t("studioPage.philosophy.bigText")}
            </p>
          </div>
        </div>
        <div class="philosophy__items">
          <ul class="philosophy-list">
            {#each philosophyItems[$locale] as item}
              <li
                class="philosophy-list__item"
                data-stroke-parent
                data-hover-trigger
              >
                <div class="philosophy-list__text" data-stroke-text>
                  {@html item}
                </div>
              </li>
            {/each}
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
  <WorksPattern extraClass={"_blue"} />
  <Contacts />
</Router>

<style>
  .studio {
    --bkg-color: var(--sky-blue);

    min-height: 100vh;
    padding: 220px 0 60px;
    color: var(--green);
    background-color: var(--bkg-color);
  }

  .studio__content {
    width: 85%;
    max-width: 1440px;
    margin: 0 auto;
  }

  .studio__subtitle {
    margin-bottom: 30px;
    font-size: var(--m-text-size);
    line-height: var(--m-text-lh);
    text-align: center;
  }

  .studio__title {
    width: 90%;
    max-width: 1050px;
    margin: 0 auto;
    font-family: var(--accent-font);
    font-weight: normal;
    font-size: var(--title-text-size);
    text-align: center;
  }

  .studio__text {
    font-size: var(--m-text-size);
    line-height: var(--m-text-lh);
  }

  :global(.studio__pattern) {
    margin: 100px 0 180px;
  }

  .mission {
    position: relative;
    margin-bottom: 150px;
  }

  .mission__text {
    margin-left: 85px;
    font-family: var(--accent-font);
    font-size: var(--title-text-size);
    line-height: 1.2;
  }

  .label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: var(--s-text-size);
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

  .philosophy__content {
    margin-left: 75px;
  }

  .philosophy__text {
    font-size: var(--m-text-size);
    line-height: var(--m-text-lh);
  }

  .philosophy__big-text {
    margin-top: 30px;
    font-size: var(--title-text-size);
    font-family: var(--accent-font);
    font-weight: normal;
    line-height: 1.2;
  }

  .philosophy__items {
    margin-top: 230px;
  }

  .philosophy-list {
    list-style: none;
    counter-reset: philosophy-list;
  }

  .philosophy-list__item {
    position: relative;
    padding: 40px 100px;
    font-size: var(--l-text-size);
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 1px solid var(--green);

    color: var(--bkg-color);
    text-shadow: -1px -1px 0 var(--green), 1px -1px 0 var(--green),
      -1px 1px 0 var(--green), 1px 1px 0 var(--green);
  }

  .philosophy-list__item:first-child {
    border-top: 1px solid var(--green);
  }

  .philosophy-list__item:before {
    counter-increment: philosophy-list;
    content: counter(philosophy-list);
    position: absolute;
    top: 50px;
    left: 10px;
    font-size: var(--s-text-size);
    font-weight: 600;
    color: var(--green);
    text-shadow: none;
  }

  .philosophy-list__text {
    position: relative;
  }

  @media (max-width: 1280px) {
    .studio {
      padding-top: 140px;
    }

    :global(.studio__pattern) {
      margin: 120px 0;
    }

    .studio__title {
      width: 100%;
    }

    .mission__text {
      margin-left: 0;
    }

    .philosophy__block {
      flex-direction: column;
    }

    .philosophy__content {
      margin-top: 100px;
      margin-left: 0;
    }

    .label {
      position: static;
    }

    .philosophy__label {
      margin-bottom: 30px;
      transform: none;
    }

    .philosophy-list__item {
      padding: 40px;
      padding-right: 0;
    }
  }

  @media (max-width: 680px) {
    .mission {
      margin-bottom: 100px;
    }

    .philosophy {
      padding-top: 100px;
    }

    .philosophy__items {
      margin-top: 100px;
    }

    .philosophy-list__item {
      padding: 30px 0;
      font-size: 24px;
    }

    .philosophy-list__item:before {
      display: none;
    }
  }
</style>
