<script>
  import { t } from "../../services/i18n";
  import Squares from "../../Patterns/Squares.svelte";
</script>

<section class="hero main__section">
  <div class="hero__block">
    <h1 class="hero__title">
      {@html $t("mainPage.title")}
    </h1>
    <p class="hero__subtitle">
      {$t("mainPage.subtitle")}
    </p>
  </div>

  <div class="hero__block hero__pattern">
    <Squares />
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    min-height: 660px;
    display: flex;
    justify-content: space-between;
    color: var(--green);
    background-color: var(--main-bkg);
    overflow: hidden;
  }

  .hero__block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 50%;
  }

  .hero__title {
    max-width: 620px;
    margin: auto 25px auto 40px;
    font-family: var(--accent-font);
    font-size: var(--title-text-size);
    font-weight: 400;
    line-height: 1.2;
  }

  .hero__subtitle {
    width: 380px;
    margin-bottom: 35px;
    margin-right: 40px;
    justify-self: flex-end;
    align-self: flex-end;
    font-size: var(--s-text-size);
  }

  :global(.marker) {
    position: relative;
    display: inline-block;
    white-space: nowrap;
  }

  :global(.underline) {
    position: relative;
  }

  :global(.underline:after) {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 0;
    right: 0;
    height: 17px;
    background-image: url("../svg/underline.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  :global(.wave-underline:after) {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 0;
    right: 0;
    height: 17px;
    background-image: url("../svg/wave-underline.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  :global(.pink-marker) {
    position: relative;
    z-index: 1;
  }

  :global(.pink-marker:after) {
    content: "";
    position: absolute;
    top: 20px;
    bottom: 0;
    left: -5px;
    right: -5px;
    z-index: -1;
    background-color: #dac5fa;
    transform: rotate(-1.1deg);
  }

  :global(.pink-marker:nth-of-type(2):after) {
    transform: rotate(1.8deg);
  }

  :global(.circle) {
    position: relative;
  }

  :global(.circle:after) {
    content: "";
    position: absolute;
    top: 0;
    bottom: -5px;
    left: -5px;
    right: -5px;
    z-index: 1;
    width: 110%;
    height: 120%;
    background-image: url("../svg/round.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }

  :global(.green-marker) {
    position: relative;
    z-index: 1;
    color: var(--sky-blue);
  }

  :global(.green-marker:after) {
    content: "";
    position: absolute;
    top: 15px;
    bottom: 5px;
    left: -5px;
    right: -5px;
    z-index: -1;
    background-color: var(--green);
    transform: rotate(-1.15deg);
  }

  :global(.yellow-marker) {
    position: relative;
    z-index: 1;
  }

  :global(.yellow-marker:after) {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 0;
    left: -5px;
    right: -5px;
    z-index: -1;
    background-color: var(--dandelion);
    transform: rotate(-3deg);
  }

  :global(.red-marker) {
    position: relative;
    z-index: 1;
    color: var(--sky-blue);
  }

  :global(.red-marker:after) {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 0;
    left: -5px;
    right: -5px;
    z-index: -1;
    background-color: var(--oriole);
    transform: rotate(-1.35deg);
  }

  @media (max-width: 1280px) {
    .hero {
      height: auto;
      padding-top: 145px;
      flex-direction: column;
    }

    .hero__block {
      width: 100%;
      flex-basis: 50%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .hero__pattern {
      height: 380px;
      flex-basis: 380px;
    }

    .hero__title {
      margin-left: 30px;
      margin-bottom: 80px;
    }

    .hero__subtitle {
      width: 22%;
      min-width: 170px;
      margin-top: 0;
      margin-bottom: 80px;
    }
  }

  @media (max-width: 680px) {
    .hero {
      min-height: auto;
      padding-top: 110px;
    }

    .hero__block {
      flex-direction: column;
    }

    .hero__pattern {
      height: 260px;
      flex-basis: 260px;
    }

    .hero__title {
      margin: 0 20px 20px 30px;
    }

    .hero__subtitle {
      width: auto;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 30px;
    }

    :global(.pink-marker:after) {
      top: 10px;
    }
    :global(.green-marker:after) {
      top: 10px;
      bottom: 0;
    }
  }
</style>
