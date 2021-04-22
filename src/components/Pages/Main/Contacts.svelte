<script>
  import { t } from "../../services/i18n";
</script>

<section class="main__section contacts" id="contacts">
  <div class="contacts__content">
    <div class="contacts__block">
      <span class="contacts__big-text">{@html $t("mainPage.contactUs")}</span>
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

    <span class="contacts__big-text _italic">{$t("mainPage.or")}</span>
    <div class="contacts__block _right">
      <span class="contacts__big-text">{@html $t("mainPage.connect")}</span>
      <form action="" class="contacts__form contact-form">
        <label class="contact-form__label">
          <input
            class="contact-form__input"
            type="text"
            placeholder={$t("mainPage.inputName")}
          />
        </label>
        <label class="contact-form__label">
          <input
            class="contact-form__input"
            type="text"
            placeholder={$t("mainPage.inputTel")}
          />
        </label>
        <button class="contact-form__button" type="submit"
          >{$t("mainPage.button")}</button
        >
      </form>
    </div>
  </div>
  <div class="contacts__pattern">
    <div class="lines-pattern">
      <div class="lines-pattern__row" />
      <div class="lines-pattern__row" />
      <div class="lines-pattern__row" />
      <div class="lines-pattern__row" />
      <div class="lines-pattern__row" />
      <div class="lines-pattern__row" />
    </div>
  </div>
</section>

<style>
  .contacts {
    padding-top: 145px;
    background-color: var(--thistle);
  }

  .contacts__content {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }

  .contacts__big-text {
    color: var(--green);
    font-family: var(--accent-font);
    font-size: 56px;
    line-height: 1.2;
  }

  .contacts__big-text._italic {
    font-style: italic;
  }

  .contacts__list {
    display: flex;
    justify-content: space-between;
  }

  .contacts__item {
    display: flex;
    flex-direction: column;
  }

  .contacts__block {
    width: 40%;
  }

  .contacts__block._right {
    display: flex;
  }

  .contacts__block._right > .contacts__big-text {
    width: 40%;
  }

  :global(.lightgreen-marker) {
    position: relative;
    z-index: 1;
  }

  :global(.lightgreen-marker:after) {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 0;
    left: -5px;
    right: -5px;
    z-index: -1;
    background-color: var(--sky-blue);
    transform: rotate(-1.35deg);
  }

  :global(.green-marker._thistle-text) {
    color: var(--thistle);
  }

  .contacts__form {
    flex-grow: 1;
  }

  .contact-form__label {
    width: 100%;
    margin-bottom: 12px;
  }

  .contact-form__input {
    width: 100%;
    padding: 15px 20px;
    color: var(--green);
    font-size: 14px;
    border: 1px solid var(--green-rgb);
    border-radius: 100px;
    background-color: transparent;
    transition: border 0.2s;
  }

  .contact-form__input::placeholder {
    color: var(--green);
    font-size: 14px;
  }

  .contact-form__input:focus {
    border-color: var(--green);
  }

  .contact-form__button {
    width: 100%;
    margin: 13px 0 0;
    padding: 15px 25px;
    color: var(--thistle);
    font-size: 12px;
    border: none;
    border-radius: 100px;
    background-color: var(--oriole);
    cursor: pointer;
  }
</style>
