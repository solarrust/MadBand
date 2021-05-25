<script>
  import { dict, t, locale } from "../services/i18n";
  import { Link, Router } from "svelte-navigator";
  import { onMount, onDestroy, beforeUpdate } from "svelte";

  import data from "../../data/projects.json";
  import Contacts from "./Main/Contacts.svelte";
  import WorksList from "./Main/WorksList.svelte";
  import WorksPattern from "../Patterns/WorksPattern.svelte";

  let projects = data.projects;
  let categories = data.categories;

  let filter;
  let filteredProjects;

  let animation;

  function projectFiltering() {
    return (filteredProjects = filter
      ? data.projects.filter((pr) => pr.category == filter)
      : projects);
  }

  projectFiltering();

  let current = "_horizontal";

  function onChange(event) {
    filter = event.currentTarget.value;
    projectFiltering();
  }

  onMount(() => {
    window.scrollTo(0, 0);
  });

  beforeUpdate(() => {});
</script>

<Router>
  <section class="works portfolio">
    <div class="works__content">
      <ul class="works__category-list category-list">
        {#each categories as category, i}
          <li class="category-list__item">
            <label
              class="category-list__btn _{i + 1}"
              style={`
      --fontColor:
      ${category.font};
      --bkg:
      ${category.bkg}`}
            >
              <input
                type="radio"
                name="category"
                value={i + 1}
                on:change={onChange}
              />
              <span>
                {category[$locale]}
              </span>
            </label>
          </li>
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
    display: block;
    padding: 20px 25px;
    text-align: center;
    text-transform: uppercase;
    color: var(--fontColor);
    font-size: var(--xs-text-size);
    font-weight: 500;
    background-color: var(--bkg);

    cursor: pointer;
  }

  .category-list__btn._1 {
    /*  color: var(--dandelion);*/
    /*  background-color: var(--green);*/
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

  .works__text:after {
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
    font-family: var(--accent-font);
    font-size: var(--title-text-size);
    color: var(--green);
  }

  :global(.work__call-to-action a:hover) {
    text-decoration: none;
  }

  :global(.work__call-to-action__arrows) {
    height: 40px;
    background-image: url("../svg/arrow-green.svg");
    background-repeat: repeat-x;
    background-size: 80px 20px;
    animation: arrow-bottom 2s alternate-reverse infinite;
  }

  :global(.work__pattern) {
    overflow: hidden;
  }

  :global(.portfolio__pattern) {
    height: 100vh;
    margin-top: -35px;
    margin-left: -35px;
    margin-right: -35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: var(--thistle);
  }

  :global(.portfolio__pattern-item) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    background-image: radial-gradient(
      circle at center,
      var(--portfolio-bkg) 75%,
      transparent 75%
    );
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

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
