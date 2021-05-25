<script>
  import { gsap } from "gsap";
  import * as ScrollToPlugin from "gsap/ScrollToPlugin";
  import { onMount } from "svelte";

  import Logo from "./Logo.svelte";
  import { Link, Router } from "svelte-routing";

  import { t } from "../services/i18n";
  import MobileMenu from "./MobileMenu.svelte";

  gsap.registerPlugin(ScrollToPlugin);

  let extraClass;

  let header;
  let headerBottom;
  let hero;
  let heroBottom;

  onMount(() => {
    header = document.querySelector(".header");
    headerBottom = header.getBoundingClientRect().y + header.offsetHeight;
    hero = document.querySelector(".hero");
    heroBottom;

    let loc = window.location.hash;
    let anchorLink = document.querySelector(".nav__item._anchor");
    let menu = document.querySelector(".nav");

    anchorLink.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, { duration: 0, scrollTo: "#contacts" });
      if (!e.target.classList.contains("_active") || loc === "#contacts") {
        e.target.classList.add("_active");
        menu.classList.add("_contacts");
      } else {
        menu.classList.remove("_contacts");
      }
    });

    menu.querySelectorAll(".nav__item").forEach((link) => {
      if (!link.classList.contains("_anchor")) {
        link.addEventListener("click", () => {
          gsap.to(window, { scrollTo: 0 });
        });
      }
    });

    /*let pageWidth = window.innerWidth;

    if (pageWidth >= 680) {
      if (hero) {
        heroBottom = hero.getBoundingClientRect().y + hero.offsetHeight;
        header.classList.add("_small");
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
    }*/
  });
</script>

<header class={`header ${extraClass || ""}`}>
  <div class="header__box">
    <Logo />

    <div class="header__mobile">
      <div class="header__mobile-burger">
        <MobileMenu />
      </div>
    </div>

    <nav class="nav header__nav">
      <a href="/cases" class="nav__item _works">{$t("header.menu.work")}</a>
      <a href="/studio" class="nav__item _studio">{$t("header.menu.studio")}</a>
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
    width: 100%;
    transition: width 0.2s ease-in;
  }

  .header__mobile {
    display: none;
  }

  .header__mobile-burger {
    margin-left: 20px;
  }

  :global(.header._small) {
    width: 50%;
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
    position: relative;
    color: var(--green);
    font-size: var(--xs-text-size);
    font-weight: 600;
  }

  :global(.nav__item:not(:last-child)) {
    margin-right: 45px;
  }

  :global(.nav__item:hover) {
    text-decoration: none;
  }

  :global(.nav__item:after),
  :global(._contacts .nav__item[aria-current="page"]:after) {
    content: "";
    position: absolute;
    left: 0;
    bottom: -100%;
    display: inline-block;
    width: 100%;
    height: 13px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    opacity: 0;
    transition: opacity 0.2s;
  }

  :global(.nav__item._anchor:after) {
    background-image: url("../svg/menu-contact-active.svg");
  }

  :global(.nav__item._works:after) {
    height: 20px;
    background-image: url("../svg/menu-works-active.svg");
  }

  :global(.nav__item._studio:after) {
    background-image: url("../svg/menu-studio-active.svg");
  }

  :global(.nav__item._anchor._active),
  :global(*:not(._contacts) > .nav__item[aria-current="page"]) {
    pointer-events: none;
    cursor: default;
  }

  :global(.nav__item._anchor._active:after),
  :global(.nav__item[aria-current="page"]:after) {
    opacity: 1;
  }

  @media (max-width: 1280px) {
    :global(.header._small) {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .header__box {
      padding: 30px 25px;
    }

    .header__nav {
      display: none;
    }

    .header__mobile {
      display: flex;
    }
  }
</style>
