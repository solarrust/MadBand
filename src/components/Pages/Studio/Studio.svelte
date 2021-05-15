<script>
  import { gsap } from "gsap";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

  import { onMount } from "svelte";
  import { locale, t } from "../../services/i18n";
  import { Router } from "svelte-navigator";
  import Contacts from "../Main/Contacts.svelte";
  import { strokeTextCreator } from "../Main/Main.svelte";
  import Person from "./Person.svelte";
  import dataRU from "../../../lang/ru.json";
  import dataEN from "../../../lang/en.json";

  gsap.registerPlugin(MotionPathPlugin);

  let localeStuff = {
    ru: dataRU.studioPage.stuff,
    en: dataEN.studioPage.stuff,
  };

  let philosophyItems = {
    ru: dataRU.studioPage.philosophy.items,
    en: dataEN.studioPage.philosophy.items,
  };

  onMount(() => {
    strokeTextCreator();

    window.scrollTo(0, 0);

    let patternParent = document.querySelector(".portfolio__pattern");
    let blockW = patternParent.offsetWidth;
    let blockH = patternParent.offsetHeight;
    let circleSize = 75;

    let circles =
      Math.ceil(blockW / circleSize) * Math.ceil(blockH / circleSize);

    for (let i = 0; i <= circles; i++) {
      let circleBlock = document.createElement("div");
      circleBlock.classList.add("portfolio__pattern-item");
      patternParent.appendChild(circleBlock);
    }

    let pointNodes = document.querySelectorAll(".locus__point");
    let pointAnimationPath =
      "M270.5 275c0 75.879-15.155 144.551-39.636 194.233-24.495 49.715-58.242 80.267-95.364 80.267-37.122 0-70.869-30.552-95.364-80.267C15.656 419.551.5 350.879.5 275S15.655 130.449 40.136 80.767C64.63 31.052 98.377.5 135.5.5c37.122 0 70.869 30.552 95.364 80.267C255.345 130.449 270.5 199.12 270.5 275z";

    pointNodes.forEach((el, i) => {
      gsap.to(el, {
        motionPath: {
          path: pointAnimationPath,
          autoRotate: true,
        },
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: 20,
        delay: -(i * 5),
        ease: "linear",
      });
    });
  });
</script>

<Router>
  <section class="studio">
    <div class="studio__content">
      <p class="studio__subtitle">{$t("studioPage.subtitle")}</p>
      <h2 class="studio__title">{@html $t("studioPage.title")}</h2>

      <div class="stuff studio__stuff">
        {#each localeStuff[$locale] as person}
          <Person
            name={person.name}
            position={person.position}
            img={person.img}
          />
        {/each}
      </div>

      <p class="studio__text">
        {$t("studioPage.text")}
      </p>

      <div class="studio__pattern square-pattern">
        <div class="square-pattern__line">
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
        </div>
        <div class="square-pattern__line">
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
        </div>
        <div class="square-pattern__line">
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
        </div>
        <div class="square-pattern__line">
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
          <div class="square-pattern__child" />
        </div>
      </div>

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
              <div class="locus__item">
                <div class="locus__point" />
              </div>
              <div class="locus__item">
                <div class="locus__point" />
              </div>
              <div class="locus__item">
                <div class="locus__point" />
              </div>
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
            {#each philosophyItems[$locale] as item}
              <li class="philosophy-list__item" data-stroke-parent>
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
  <div class="work__pattern">
    <div class="portfolio__pattern _blue" />
  </div>
  <Contacts />
</Router>

<style>
  .studio {
    --bkg-color: var(--sky-blue);

    padding: 220px 0 60px;
    color: var(--green);
    background-color: var(--bkg-color);
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
    font-size: var(--m-text-size);
    text-align: center;
  }

  .studio__title {
    width: 80%;
    margin: 0 auto;
    font-family: var(--accent-font);
    font-weight: normal;
    font-size: var(--title-text-size);
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
    font-size: var(--title-text-size);
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

  .locus__point {
    position: absolute;
    top: calc(0% - 8px);
    left: calc(0% - 8px);
    width: 13px;
    height: 13px;
    background-color: var(--green);
    border-radius: 50%;
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
    font-size: var(--m-text-size);
  }

  .philosophy__big-text {
    margin-top: 30px;
    font-size: var(--title-text-size);
    font-family: var(--accent-font);
    font-weight: normal;
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
    color: var(--green);
    text-shadow: none;
  }

  .philosophy-list__text {
    position: relative;
  }

  :global(.stroke__text-parent) {
    display: flex;
    flex-wrap: wrap;
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

  :global([data-stroke-parent]:hover .stroke__char-parent:before) {
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
  }

  .square-pattern {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .square-pattern__line {
    display: flex;
    width: 100%;
    height: 25%;
  }

  .square-pattern__line:first-child {
    animation: stretch ease-in-out 5s infinite alternate;
  }

  .square-pattern__line:nth-child(2) {
    animation: stretch-small ease-in-out 5s infinite alternate-reverse;
  }

  .square-pattern__line:nth-child(3) {
    animation: stretch-small ease-in-out 5s infinite alternate;
  }

  .square-pattern__line:last-child {
    animation: stretch ease-in-out 5s infinite alternate-reverse;
  }

  .square-pattern__child {
    width: 20%;
    height: 100%;
    /*border: 1px solid red;*/
    background-image: linear-gradient(
      75deg,
      var(--bkg-color) 0,
      var(--bkg-color) 22%,
      var(--thistle) 22%,
      var(--thistle) 80%,
      var(--bkg-color) 80%
    );
  }

  @keyframes stretch {
    0% {
      height: 50%;
    }
    100% {
      height: 15%;
    }
  }

  @keyframes stretch-small {
    0% {
      height: 20%;
    }
    100% {
      height: 35%;
    }
  }
</style>
