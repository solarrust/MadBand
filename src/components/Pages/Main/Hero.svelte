<script>
  import { t } from "../../services/i18n";
</script>

<section class="hero main__section">
  <div class="hero__block">
    <h1 class="hero__title">{@html $t("mainPage.title")}</h1>
    <p class="hero__subtitle">{$t("mainPage.subtitle")}</p>
  </div>
  <div class="hero__block">
    <div class="square-pattern">
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
  </div>
</section>

<style>
  .hero {
    display: flex;
    color: var(--green);
    background-color: var(--sky-blue);
    overflow: hidden;
  }

  .hero__block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 50%;
  }

  .hero__title {
    margin: auto 40px;
    font-family: var(--accent-font);
    font-size: 56px;
    font-weight: 400;
    line-height: 1.2;
  }

  .hero__subtitle {
    width: 380px;
    margin-bottom: 35px;
    margin-right: 40px;
    justify-self: flex-end;
    align-self: flex-end;
    font-size: 14px;
  }

  .square-pattern {
    display: flex;
    position: relative;
    top: -50px;
    width: 100%;
    height: 100vh;
  }

  .line {
    width: calc(100% / 12);
    height: calc(100% + 50px);
    background-image: linear-gradient(to top, #fbfe67 50px, transparent 50px);
    background-size: 50px 100px;

    animation: line-run infinite linear reverse;

    animation-duration: 10s;
  }

  .line:not(:last-child) {
    margin-right: 5px;
  }

  .line:nth-child(5n + 1) {
    transform: translateY(25px);
    animation-duration: 25s;
  }

  .line:nth-child(5n + 2) {
    transform: translateY(50px);
    animation-duration: 16s;
  }

  .line:nth-child(5n + 3) {
    transform: translateY(25px);
    animation-duration: 10s;
  }

  .line:nth-child(5n + 4) {
    transform: translateY(10px);
    animation-duration: 20s;
  }

  @keyframes line-run {
    from {
      background-position-y: 0;
    }
    to {
      background-position-y: 1000px;
    }
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
    height: 110%;
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
</style>
