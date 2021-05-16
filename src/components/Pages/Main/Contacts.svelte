<script>
  import { t } from "../../services/i18n";
  import { AsYouType, parsePhoneNumber } from "libphonenumber-js";
  import { onMount } from "svelte";
  import Lang from "./Lang.svelte";
  import Lines from "../../Patterns/Lines.svelte";

  onMount(() => {
    const phoneInput = document.querySelector("#phone");
    const form = document.querySelector("form.contact-form");

    function onChange() {
      phoneInput.classList.remove("_invalid");
      form.classList.remove("_invalid");
      let oldVal = this.value;
      this.value = new AsYouType("RU").input(oldVal);
    }

    function phoneValidation(input) {
      if (!isValidNumber(input.value)) {
        phoneInput.classList.add("_invalid");
        form.classList.add("_invalid");
      } else {
        phoneInput.classList.remove("_invalid");
        form.classList.remove("_invalid");
      }
    }

    function isValidNumber(number) {
      return new parsePhoneNumber(number, "RU").isValid();
    }

    phoneInput.addEventListener("keyup", onChange);
    phoneInput.addEventListener("focusout", (e) => phoneValidation(e.target));

    let anchorLink = document.querySelector(".nav__item._anchor");
    let contactsTop = document.querySelector("#contacts").offsetTop;

    let scrollPos = 0;

    let pageWidth = window.innerWidth;

    if (pageWidth >= 680) {
      window.addEventListener("scroll", function () {
        if (document.body.getBoundingClientRect().top > scrollPos) {
          window.location.hash = "";
          anchorLink.classList.remove("active");
        }

        if (
          Math.abs(document.body.getBoundingClientRect().top) >= contactsTop
        ) {
          if (!anchorLink.classList.contains("active")) {
            anchorLink.classList.add("active");
          }
        }

        scrollPos = document.body.getBoundingClientRect().top;
      });
    }
  });
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
            id="phone"
            class="contact-form__input"
            type="tel"
            placeholder={$t("mainPage.inputTel")}
            pattern="7 (999) 999-99-99"
          />
        </label>
        <button class="contact-form__button" type="submit"
          >{$t("mainPage.button")}</button
        >
        <span class="contact-form__error">Error</span>
      </form>
    </div>
  </div>
  <div class="contacts__pattern">
    <Lines />
  </div>
  <!-- TODO: спросить у ребят на какие англиязычные компании они расчитывают чтобы правильно форматировать и валидирвать телефон -->
  <Lang extraClass="contacts__lang" />
</section>

<style>
  .contacts {
    padding-top: 145px;
    background-color: var(--contacts-bkg);
  }

  .contacts__content {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }

  .contacts__big-text {
    color: var(--green);
    font-family: var(--accent-font);
    font-size: var(--title-text-size);
    line-height: 1.2;
  }

  .contacts__big-text._italic {
    font-style: italic;
  }

  .contacts__list {
    display: flex;
    justify-content: space-between;
    margin-top: 85px;
    font-size: var(--xs-text-size);
    font-weight: 600;
    color: var(--green);
  }

  .contacts__list a {
    font-size: var(--xs-text-size);
    font-weight: 500;
    color: var(--green);
  }

  .contacts__list a:first-child {
    margin-top: 10px;
  }

  .contacts__list a + a {
    margin-top: 5px;
  }

  .contacts__list a[download] {
    text-decoration: underline;
  }

  .contacts__list a[download]:hover {
    text-decoration: none;
  }

  .contacts__list a[download]:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
    background: url("../svg/download-icon.svg") no-repeat center / contain;
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
    margin-right: 20px;
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
    color: var(--contacts-bkg);
  }

  .contacts__form {
    flex: 50% 1 0;
  }

  .contact-form__label {
    width: 100%;
    margin-bottom: 12px;
  }

  :global(.contact-form__input) {
    width: 100%;
    padding: 15px 20px;
    color: var(--green);
    font-size: var(--s-text-size);
    border: 2px solid var(--green-rgb);
    border-radius: 100px;
    background-color: transparent;
    transition: border 0.2s, color 0.2s;
  }

  .contact-form__input::placeholder {
    color: var(--green);
    font-size: var(--s-text-size);
  }

  :global(.contact-form__input:focus:not(._invalid)) {
    border-color: var(--green);
  }

  :global(.contact-form__input._invalid) {
    color: var(--oriole);
    border-color: currentColor;
  }

  .contact-form__button {
    width: 100%;
    margin: 13px 0 0;
    padding: 15px 25px;
    color: var(--contacts-bkg);
    font-size: var(--xs-text-size);
    border: none;
    border-radius: 100px;
    background-color: var(--oriole);
    cursor: pointer;
  }

  .contact-form__error {
    display: block;
    opacity: 0;
    width: 60%;
    margin: 20px auto 0;
    text-align: center;
    font-size: var(--xs-text-size);
    font-weight: 500;
    color: var(--oriole);
    transition: none;
  }

  :global(.contact-form._invalid .contact-form__error) {
    opacity: 1;
    transition: opacity 0.2s;
  }

  .contacts__pattern {
    margin-top: 150px;
  }

  @media (max-width: 1280px) {
    .contacts__content {
      flex-direction: column;
      align-items: center;
    }

    .contacts__block {
      width: 100%;
    }

    .contacts__block:not(._right) {
      text-align: center;
    }

    .contacts__big-text._italic {
      margin: 40px auto 65px;
    }

    .contacts__list {
      margin-top: 65px;
      text-align: start;
    }
    .contacts__pattern {
      margin-top: 90px;
    }
  }

  @media (max-width: 680px) {
    .contacts {
      padding-top: 135px;
    }

    .contacts__list {
      flex-wrap: wrap;
    }

    .contacts__item {
      min-width: 135px;
    }

    .contacts__big-text._italic {
      margin: 20px auto;
      font-size: 56px;
    }

    .contacts__block._right {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .contacts__block._right > .contacts__big-text {
      margin-right: 0;
      margin-bottom: 20px;
      text-align: center;
    }

    .contacts__form {
      width: 100%;
    }

    .contacts__pattern {
      margin-top: 50px;
    }
  }
</style>
