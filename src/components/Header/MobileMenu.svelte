<script>
  import { onMount } from "svelte";
  import { Link, Router } from "svelte-navigator";
  import { t } from "../services/i18n";

  onMount(() => {
    let burgerBtn = document.querySelector(".burger");
    let mobileMenu = document.querySelector(".mobile-menu");
    let contactsLink = document.querySelector("#contacts-link");
    let menuLinks = document.querySelectorAll(".mobile-menu__item");
    let logoLink = document.querySelector(".logo-link");

    function mobileMenuHelper() {
      burgerBtn.classList.toggle("_menu-opened");
      mobileMenu.classList.toggle("_opened");
    }

    burgerBtn.addEventListener("click", (e) => {
      mobileMenuHelper();
    });

    contactsLink.addEventListener("click", (e) => {
      mobileMenuHelper();
    });

    logoLink.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("_opened")) {
        mobileMenuHelper();
      }
    });

    menuLinks.forEach((link) => {
      if (link.id !== "contacts-link") {
        link.addEventListener("click", (e) => {
          mobileMenuHelper();
        });
      }
    });
  });
</script>

<slot>
  <button class="burger header__burger">
    <span class="burger__line" />
  </button>

  <div class="mobile-menu">
    <Link to="cases" class="mobile-menu__item">{$t("header.menu.work")}</Link>
    <Link to="studio" class="mobile-menu__item">{$t("header.menu.studio")}</Link
    >
    <a href="#contacts" id="contacts-link" class="mobile-menu__item"
      >{$t("header.menu.contacts")}</a
    >
  </div>
</slot>

<style>
  .burger {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 28px;
    height: 28px;
    padding: 7px 3px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .burger__line {
    position: absolute;
    left: 3px;
    top: 7px;
    width: 23px;
    height: 2px;
    background-color: var(--green);

    transform-origin: center;
    transition: all 0.2s;
  }

  :global(._menu-opened .burger__line) {
    transform: rotate(90deg);
  }

  .burger__line::before,
  .burger__line::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--green);

    transform-origin: center;
    transition: all 0.2s;
  }

  .burger__line::before {
    top: 6px;
  }

  :global(._menu-opened .burger__line::before) {
    top: 0;
    transform: rotate(55deg);
  }

  .burger__line:after {
    top: 12px;
  }

  :global(._menu-opened .burger__line::after) {
    top: 0;
    transform: rotate(-55deg);
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    z-index: -1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 15vh;
    padding-left: 25px;
    padding-right: 25px;
    background-color: var(--thistle);

    transition: right 0.5s;
  }

  .mobile-menu::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40vh;
    width: 100%;
    background-image: url(../svg/mobile-menu-pattern.svg);
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  :global(.mobile-menu._opened) {
    right: 0;
  }

  :global(.mobile-menu .mobile-menu__item) {
    color: var(--green);
    font-family: var(--accent-font);
    font-size: 36px;
  }

  :global(.mobile-menu__item::after) {
    content: "";
    display: block;
    height: 30px;
    width: 100%;
    margin-top: 5px;
    background-image: linear-gradient(
      to right,
      var(--green) 1px,
      transparent 1px
    );
    background-size: 8px;
    background-position: 0;
  }
</style>
