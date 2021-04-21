<script>
  import { t } from "../../services/i18n";
  import { Link } from "svelte-navigator";
  import Hero from "./Hero.svelte";
  import Works from "./Works.svelte";
</script>

<Hero />

<Works />

<section class="main__section contacts" id="contacts">
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
</section>

<style>
  .main__section {
    min-height: 100vh;
  }

  .contacts {
    background-color: var(--thistle);
  }
</style>
