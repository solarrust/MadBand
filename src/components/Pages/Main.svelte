<script>
  import { t } from "../services/i18n";
  import { Link } from "svelte-navigator";
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

<section class="main__section works">
  <div class="works__text">
    {$t("mainPage.workText")}
  </div>
  <div class="works__list">
    <div class="work works__item">
      <div class="work__name">Alcon</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item">
      <div class="work__name">ICE ICE PARTY</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item">
      <div class="work__name">OTKRITIE</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item">
      <div class="work__name">GASTRO DINNER</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item _horizontal">
      <div class="work__name">gills</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item">
      <div class="work__name">AB INBEV EFES</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item">
      <div class="work__name">Novartis neva</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item">
      <div class="work__name">Bud 66</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item">
      <div class="work__name">Inventive Retail Group</div>
      <div class="__work__cover" />
    </div>
    <div class="work works__item _horizontal">
      <div class="work__name">BUD 66</div>
      <div class="__work__cover" />
    </div>
  </div>

  <div class="works__all-link">
    <Link to="portfolio">All works</Link>
  </div>
</section>

<footer class="main__section contacts" id="contacts">
  <div class="contacts__block">
    <span>{$t("mainPage.contactUs")}</span>
    <div class="contacts__list">
      <div class="contacts__item">
        Email:
        <a href="mailto:info@mad-band.ru">info@mad-band.ru</a>
      </div>
      <div class="contacts__item">
        {$t("mainPage.phone")}
        <a href="tel:+7(926)-616-11-46">+7(926)-616-11-46</a>
        <a href="tel:+7(903)-590-92-64">+7(903)-590-92-64</a>
      </div>
      <div class="contacts__item">
        <a href="" download="">{$t("mainPage.presentation")}</a>
      </div>
    </div>
  </div>

  <span>{$t("mainPage.or")}</span>
  <div class="contacts__block">
    <span>{$t("mainPage.connect")}</span>
    <form action="">
      <label>
        <input type="text" placeholder={$t("mainPage.inputName")} />
      </label>
      <label>
        <input type="text" placeholder={$t("mainPage.inputTel")} />
      </label>
      <button type="submit">{$t("mainPage.button")}</button>
    </form>
  </div>
</footer>

<style>
  .main__section {
    min-height: 100vh;
  }

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
    justify-self: flex-end;
    align-self: flex-end;
    font-size: 14px;
  }

  .works {
    background-color: var(--dandelion);
  }

  .contacts {
    background-color: var(--thistle);
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

    animation: line-run infinite linear;

    animation-duration: 10s;
  }

  .line:not(:last-child) {
    margin-right: 5px;
  }

  .line:nth-child(5n + 1) {
    transform: translateY(25px);
    animation-duration: 11s;
  }

  .line:nth-child(5n + 2) {
    transform: translateY(50px);
    animation-duration: 12s;
  }

  .line:nth-child(5n + 3) {
    transform: translateY(25px);
    animation-duration: 13s;
  }

  .line:nth-child(5n + 4) {
    transform: translateY(10px);
    animation-duration: 11s;
  }

  @keyframes line-run {
    from {
      background-position-y: 0;
    }
    to {
      background-position-y: 1000px;
    }
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
