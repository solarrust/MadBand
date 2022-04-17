<script>
  import { dict, t, locale } from "../services/i18n";
  import { Link, Router, useLocation } from "svelte-navigator";
  import { onMount, onDestroy, beforeUpdate } from "svelte";

  import data from "../../data/projects.json";
  import Contacts from "./Main/Contacts.svelte";
  import WorksList from "./Main/WorksList.svelte";
  import WorksPattern from "../Patterns/WorksPattern.svelte";
  import { cursorDefault, cursorMoveHandler } from "../../App.svelte";

  let projects = data.projects;
  let categories = data.categories;

  let filter;
  let filteredProjects = projects;

  let animation;

  const urlParams = new URLSearchParams(window.location.search);

  function searchParamHandler() {
    if (urlParams.toString() !== "") {
      filter = urlParams.get("category");

      document.querySelector(`input[value='${filter}']`).checked = true;
    }
  }

  function projectFiltering() {
    return (filteredProjects = filter
      ? data.projects.filter((pr) => pr.category == filter)
      : projects);
  }

  let sortCategories = (function () {
    let filterCatList = [];

    projects.forEach((pr) => {
      if (!filterCatList.includes(pr.category)) {
        filterCatList.push(pr.category);
      }
    });

    return filterCatList;
  })();

  let current = "_horizontal";

  function onChange(event) {
    filter = event.currentTarget.value;
    if (filter) {
      urlParams.set("category", filter);
      window.location.search = urlParams;
    }
    projectFiltering();
  }

  onMount(() => {
    window.scrollTo(0, 0);

    let customCursor = document.querySelector(".custom-cursor");
    let links = document.querySelectorAll("a");
    let targets = document.querySelectorAll("[data-hover-trigger]");

    cursorDefault(customCursor);
    cursorMoveHandler(customCursor, links, targets);
    searchParamHandler();
    projectFiltering();
  });

  beforeUpdate(() => {});
</script>

<Router>
  <section class="works portfolio">
    <div class="works__content">
      <ul class="works__category-list category-list">
        {#each categories as category, i}
          {#if sortCategories.includes(i + 1)}
            <li class="category-list__item">
              <input
                type="radio"
                name="category"
                value={i + 1}
                id={i + 1}
                on:change={onChange}
              />
              <label
                for={i + 1}
                class="category-list__btn _{i + 1}"
                data-hover-trigger
                style={`
                  --fontColor:
                  ${category.font};
                  --bkg:
                  ${category.bkg}`}
              >
                <span>
                  {category[$locale]}
                </span>
              </label>
            </li>
          {/if}
        {/each}
      </ul>
      <div class="works__text">
        {@html $t("workPage.text")}
      </div>
      <WorksList projects={filteredProjects} />
    </div>
    <div class="work__call-to-action">
      <a href="#contacts"
        >{@html $t("workPage.callToAction")}
        <div class="work__call-to-action__arrows" />
      </a>
    </div>
  </section>
  <div class="work__pattern">
    <WorksPattern extraClass={"_cases"} />
  </div>
  <Contacts />
</Router>

<style>
  .portfolio {
    padding-bottom: 60px;
    background-color: var(--portfolio-bkg);
  }

  .works__category-list {
    margin-bottom: 50px;
  }

  .category-list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  .category-list__item:not(:last-child) {
    margin-right: 20px;
  }

  .category-list__btn {
    position: relative;
    z-index: 0;
    display: block;
    padding: 20px 25px;
    text-align: center;
    text-transform: uppercase;
    color: var(--fontColor);
    font-size: var(--xs-text-size);
    font-weight: 500;
    background-color: var(--bkg);

    cursor: none;
  }

  .category-list__btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    opacity: 0;
    transition: opacity 0.1s ease-in;
  }

  input:checked ~ .category-list__btn::after {
    opacity: 1;
    transition: none;
  }

  .category-list__btn._1::after {
    background-image: url("../svg/btn-active-1.svg");
  }

  .category-list__btn._2::after {
    background-image: url("../svg/btn-active-2.svg");
  }

  .category-list__btn._3::after {
    background-image: url("../svg/btn-active-3.svg");
  }

  .category-list__btn._4::after {
    background-image: url("../svg/btn-active-4.svg");
  }

  .category-list__btn._5::after {
    background-image: url("../svg/btn-active-5.svg");
  }

  .category-list__btn._2 {
    /*  color: var(--oriole);*/
    /*  background-color: var(--thistle);*/

    transform: rotate(2deg);
  }

  .category-list__btn._3 {
    /*  color: var(--dandelion);*/
    /*  background-color: var(--oriole);*/

    transform: rotate(-2deg);
  }

  .category-list__btn._4 {
    /*  color: var(--green);*/
    /*  background-color: var(--sky-blue);*/

    transform: rotate(2deg);
  }

  .category-list__btn._5 {
    /*  color: var(--oriole);*/
    /*  background-color: var(--cherry-blossom);*/

    transform: rotate(-2deg);
  }

  .category-list__item input {
    display: none;
  }

  .works__text {
    max-width: 62%;
    margin: 0 auto;
    font-size: var(--m-text-size);
    line-height: var(--m-text-lh);
    color: var(--green);
    text-align: center;
  }

  .works__text::after {
    content: "";
    display: block;
    width: 75px;
    height: 75px;
    margin: 25px auto 50px;
    background: url("../svg/star.svg") no-repeat center / contain;
  }

  :global(.work__call-to-action) {
    margin-top: 150px;
    text-align: center;
  }

  :global(.work__call-to-action a) {
    display: block;
    font-family: var(--accent-font);
    font-size: var(--title-text-size);
    color: var(--green);
  }

  :global(.work__call-to-action a:hover) {
    text-decoration: none;
  }

  :global(.work__call-to-action__arrows) {
    height: 25px;
    margin-top: 30px;
    background-image: url("../svg/arrow-green.svg");
    background-repeat: repeat-x;
    background-size: 80px 20px;
    animation: arrow-bottom 0.8s alternate ease-in-out infinite;
  }

  /*:global(.portfolio__pattern) {*/
  /*  height: 100vh;*/
  /*  margin-top: -35px;*/
  /*  margin-left: -35px;*/
  /*  margin-right: -35px;*/
  /*  display: flex;*/
  /*  flex-wrap: wrap;*/
  /*  justify-content: space-between;*/
  /*  background-color: var(--thistle);*/
  /*}*/

  /*:global(.portfolio__pattern-item) {*/
  /*  position: relative;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*  width: 75px;*/
  /*  height: 75px;*/
  /*  background-image: radial-gradient(*/
  /*    circle at center,*/
  /*    var(--portfolio-bkg) 75%,*/
  /*    transparent 75%*/
  /*  );*/
  /*  background-position: center;*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: 100% 100%;*/
  /*}*/

  /*:global(.portfolio__pattern-item:after) {*/
  /*  content: "";*/
  /*  position: absolute;*/
  /*  width: 35%;*/
  /*  height: 35%;*/
  /*  display: block;*/
  /*  border-radius: 50%;*/
  /*  background-color: var(--portfolio-bkg);*/
  /*  !*animation: circle-blinking 3s ease-in-out infinite alternate-reverse;*!*/
  /*  transform-origin: center;*/
  /*}*/

  @keyframes arrow-bottom {
    from {
      background-position-y: top;
    }
    to {
      background-position-y: bottom;
    }
  }

  @keyframes circle-blinking {
    from {
      width: 35%;
      height: 35%;
    }
    to {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1280px) {
    .works__text {
      max-width: 80%;
    }

    .category-list {
      flex-wrap: wrap;
    }

    .category-list__item {
      margin-bottom: 20px;
    }

    .works__text:after {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1024px) {
    .category-list__btn {
      cursor: pointer;
    }
  }

  @media (max-width: 680px) {
    .portfolio > .works__content {
      width: auto;
      padding: 0 30px;
    }

    .works__text {
      max-width: 100%;
    }

    .category-list__btn {
      padding: 15px 10px;
    }

    .category-list__item {
      flex-grow: 1;
      max-width: 180px;
    }

    .category-list__item:not(:last-child) {
      margin-right: 8px;
    }

    .works__text:after {
      margin-bottom: 0;
    }
  }
</style>
