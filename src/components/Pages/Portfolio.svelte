<script>
  import Contacts from "./Main/Contacts.svelte";
  import { dict, t, locale } from "../services/i18n";
  import { Link, Router } from "svelte-navigator";

  import data from "../data/projects.json";
  import { onMount } from "svelte";

  let projects = data.projects;
  let categories = data.categories;

  let filter;
  let filteredProjects = filter
    ? data.projects.filter((pr) => pr.category == filter + 1)
    : projects;

  let current = "_horizontal";

  function onChange(event) {
    filter = event.currentTarget.value;
    filteredProjects = data.projects.filter((pr) => pr.category == filter + 1);
  }

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
</script>

<Router>
  <section class="works portfolio">
    <div class="works__content">
      <ul class="works__category-list category-list">
        {#each categories as category, i}
          <li class="category-list__item">
            <label class="category-list__btn _{i}">
              <input
                type="radio"
                name="category"
                value={i}
                on:change={onChange}
              />
              <span>
                {#if $locale === "en"}
                  {category.en}
                {:else}
                  {category.ru}
                {/if}
              </span>
            </label>
          </li>
        {/each}
      </ul>
      <div class="works__text">
        {@html $t("workPage.text")}
      </div>
      <div class="works__list">
        {#each filteredProjects as project}
          <Link
            to="portfolio"
            class="work works__item {project.isVideoCover === true
              ? current
              : ''}"
          >
            <div class="work__cover">
              <div class="work__name">
                {#if $locale === "en" || project.projectName.ru === ""}
                  {project.projectName.en}
                {:else}
                  {project.projectName.ru}
                {/if}
              </div>
              <img src={project.cover} alt={project.projectName.en} />
            </div>
          </Link>
        {/each}
      </div>
    </div>
    <div class="work__call-to-action">
      <a href="#contacts"
        >{@html $t("workPage.callToAction")}
        <div class="work__call-to-action__arrows" />
      </a>
    </div>
  </section>
  <div class="work__pattern">
    <div class="portfolio__pattern" />
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

  .category-list__item {
    margin-right: 20px;
  }

  .category-list__btn {
    display: block;
    font-size: 14px;
    padding: 20px 25px;
    text-align: center;
    text-transform: uppercase;

    cursor: pointer;
  }

  .category-list__btn._0 {
    color: var(--dandelion);
    background-color: var(--green);
  }

  .category-list__btn._1 {
    color: var(--oriole);
    background-color: var(--thistle);

    transform: rotate(2deg);
  }

  .category-list__btn._2 {
    color: var(--dandelion);
    background-color: var(--oriole);

    transform: rotate(-2deg);
  }

  .category-list__btn._3 {
    color: var(--green);
    background-color: var(--sky-blue);

    transform: rotate(2deg);
  }

  .category-list__btn._4 {
    color: var(--oriole);
    background-color: var(--cherry-blossom);

    transform: rotate(-2deg);
  }

  .category-list__item input {
    display: none;
  }

  .works__text {
    max-width: 62%;
    margin: 0 auto;
    font-size: 24px;
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
    font-size: 56px;
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
  }

  :global(.portfolio__pattern-item:after) {
    content: "";
    position: absolute;

    display: block;
    border-radius: 50%;
    background-color: var(--portfolio-bkg);
    animation: circle-blinking 3s ease-in-out infinite alternate-reverse;
    transform-origin: center;
  }

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
</style>
