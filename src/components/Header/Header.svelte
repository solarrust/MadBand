<script>
  import { onMount } from "svelte";
  import Logo from "./Logo.svelte";
  import { Link } from "svelte-navigator";

  import { t } from "../services/i18n";

  let y;

  onMount(() => {
    let header = document.querySelector(".header");
    let headerBottom = header.getBoundingClientRect().y + header.offsetHeight;
    let hero = document.querySelector(".hero");
    let heroBottom;
    if (hero) {
      heroBottom = hero.getBoundingClientRect().y + hero.offsetHeight;
    }

    document.addEventListener("scroll", function (e) {
      if (hero) {
        if (
          Math.abs(document.body.getBoundingClientRect().top) >
          heroBottom - headerBottom / 2
        ) {
          header.classList.remove("_small");
        } else {
          header.classList.add("_small");
        }
      }
    });

    let loc = window.location.hash;
    let anchorLink = document.querySelector(".nav__item._anchor");
    anchorLink.addEventListener("click", (e) => {
      if (!e.target.classList.contains("active") || loc === "#contacts") {
        e.target.classList.add("active");
      }
    });
  });
</script>

<header class="header">
  <div class="header__box">
    <Logo />
    <nav class="nav header__nav">
      <Link to="portfolio" class="nav__item">{$t("header.menu.work")}</Link>
      <Link to="studio" class="nav__item">{$t("header.menu.studio")}</Link>
      <a href="#contacts" class="nav__item _anchor"
        >{$t("header.menu.contacts")}</a
      >
    </nav>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 50%;
    transition: width 0.5s ease-in;
  }

  :global(.header:not(._small)) {
    width: 100%;
    transition: width 0.5s ease-out;
  }

  .header__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*max-width: 1440px;*/
    margin: 0 auto;
    padding: 30px 40px;
  }

  .nav {
    display: flex;
  }

  :global(.nav__item) {
    color: var(--green);
    font-size: 12px;
    font-weight: 600;
  }

  :global(.nav__item:not(:last-child)) {
    margin-right: 45px;
  }

  :global(.nav__item._anchor:after) {
    content: "";
    display: inline-block;
    width: 100%;
    height: 13px;
    background-image: url("../svg/menu-contact-active.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    opacity: 0;
    transition: opacity 0.2s;
  }

  :global(.nav__item._anchor.active:after) {
    opacity: 1;
  }
</style>
