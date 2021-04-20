<script>
  import { onMount } from "svelte";
  import Logo from "./Logo.svelte";
  import { Link } from "svelte-navigator";

  import { t } from "../services/i18n";

  let y;

  onMount(() => {
    let header = document.querySelector(".header");
    let secondScreen = document.querySelector(".works");
    let secScrTop = secondScreen.getBoundingClientRect().y;

    if (secondScreen) {
      header.classList.add("_small");
    }

    document.addEventListener("scroll", function (e) {
      if (secondScreen) {
        if (window.pageYOffset > secScrTop) {
          header.classList.remove("_small");
        } else {
          header.classList.add("_small");
        }
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
      <Link to="#contacts" class="nav__item">{$t("header.menu.contacts")}</Link>
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
    transition: width 0.5s ease-in;
  }

  :global(.header._small) {
    width: 50%;
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

  :global(.nav__item) {
    color: var(--green);
    font-size: 12px;
    font-weight: 600;
  }

  :global(.nav__item:not(:last-child)) {
    margin-right: 45px;
  }
</style>
