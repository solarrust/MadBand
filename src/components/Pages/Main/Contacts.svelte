<script>
  import { t } from "../../services/i18n";
  import { AsYouType, parsePhoneNumber } from "libphonenumber-js";
  import { onMount } from "svelte";
  import Lang from "./Lang.svelte";
  import Lines from "../../Patterns/Lines.svelte";
  const FORMSPARK_ACTION_URL = "https://submit-form.com/zH0XbYXF";
  let name = "",
    phone = "";
  let submitting = false;
  let isSent = false;

  async function onSubmit() {
    try {
      submitting = true;
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });
      name = "";
      phone = "";
    } finally {
      isSent = true;
      if (isSent) {
        document.querySelector("form.contact-form").classList.add("_sent");
      } else {
        document.querySelector("form.contact-form").classList.remove("_sent");
      }
    }

    isSent = true;
    if (isSent) {
      document.querySelector("form.contact-form").classList.add("_sent");
    } else {
      document.querySelector("form.contact-form").classList.remove("_sent");
    }
  }

  onMount(() => {
    const phoneInput = document.querySelector("#form-phone");
    const form = document.querySelector("form.contact-form");
    const formBtn = form.querySelector("button[type='submit']");

    formBtn.disabled = true;

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
      // return new parsePhoneNumber(number, "RU").isValid();
      return true;
    }

    async function onChange() {
      phoneInput.classList.remove("_invalid");
      form.classList.remove("_invalid");
      let oldVal = this.value;
      this.value = new AsYouType("RU").input(oldVal);
    }

    document.querySelector("#form-phone").addEventListener("keyup", onChange);

    document
      .querySelector("#form-phone")
      .addEventListener("focusout", (e) => phoneValidation(e.target));

    document.querySelector("#form-name").addEventListener("keyup", function () {
      this.value = this.value.replace(/[\d]/g, "");
    });

    form.querySelectorAll("input").forEach((input) => {
      input.addEventListener("keyup", () => {
        if (
          !form.classList.contains("_invalid") &&
          phoneInput.value !== "" &&
          document.querySelector("#form-name").value !== ""
        ) {
          formBtn.disabled = false;
        }
      });
    });

    let anchorLink = document.querySelector(".nav__item._anchor");
    let contactsTop = document.querySelector("#contacts").offsetTop;

    let scrollPos = 0;

    let pageWidth = window.innerWidth;

    if (pageWidth >= 680) {
      window.addEventListener("scroll", function () {
        if (document.body.getBoundingClientRect().top > scrollPos) {
          window.location.hash = "";
          anchorLink.classList.remove("_active");
          anchorLink.parentNode.classList.remove("_contacts");
        }

        if (
          Math.abs(document.body.getBoundingClientRect().top) >= contactsTop
        ) {
          if (!anchorLink.classList.contains("_active")) {
            anchorLink.classList.add("_active");
            anchorLink.parentNode.classList.add("_contacts");
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
          <a href="madBand_presentation.pdf" download="madBand_presentation.pdf"
            >{$t("mainPage.presentation")}</a
          >
        </div>
      </div>
    </div>

    <span class="contacts__big-text _italic">{$t("mainPage.or")}</span>
    <div class="contacts__block _right">
      <span class="contacts__big-text">{@html $t("mainPage.connect")}</span>
      <form
        method="post"
        on:submit|preventDefault={onSubmit}
        class="contacts__form contact-form"
        action="/epic.spb.ru/madBand/emailSender.php"
      >
        <input type="hidden" name="_append" value="false" />
        <label class="contact-form__label">
          <input
            id="form-name"
            class="contact-form__input"
            name="name"
            type="text"
            placeholder={$t("mainPage.inputName")}
            pattern="^[a-zA-ZА-Яа-яЁё\s]+$"
            bind:value={name}
          />
        </label>
        <label class="contact-form__label">
          <input
            id="form-phone"
            class="contact-form__input"
            name="phone"
            type="tel"
            placeholder={$t("mainPage.inputTel")}
            bind:value={phone}
          />
        </label>
        <button
          id="form-submit"
          class="contact-form__button"
          type="submit"
          disabled={submitting}
          data-hover-trigger>{$t("mainPage.button")}</button
        >
        <div class="contact-form_tnx">
          <span>👌</span>
          <br />
          <p>{@html $t("mainPage.tnx")}</p>
        </div>
      </form>
    </div>
  </div>
  <div class="contacts__pattern">
    <Lines />
  </div>
  <Lang extraClass="contacts__lang" />
</section>

<style>
  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    margin: 0 5vw 0 2vw;
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
    max-width: 130px;
    margin-top: 0;
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
    flex-grow: 1;
    /*width: 40%;*/
    /*max-width: 515px;*/
  }

  .contacts__block._right {
    display: flex;
    flex-grow: 1;
    /*max-width: 560px;*/
  }

  .contacts__block._right > .contacts__big-text {
    width: 400px;
    margin-right: 5vw;
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
    position: relative;
    flex: 50% 0 0;
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
    transition: all 0.2s;
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

  :global(._sent .contact-form__input) {
    opacity: 0;
  }

  :global(.contact-form__button) {
    width: 100%;
    margin: 13px 0 0;
    padding: 15px 25px;
    color: var(--contacts-bkg);
    font-size: var(--xs-text-size);
    border: none;
    border-radius: 100px;
    background-color: var(--oriole);
    cursor: none;
    transition: all 0.2s;
  }

  :global(._sent .contact-form__button) {
    opacity: 0;
  }

  .contact-form__button[disabled] {
    color: var(--contacts-bkg);
    background-color: var(--green);
    cursor: none;
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

  :global(.contact-form_tnx) {
    opacity: 0;
    z-index: -1;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 60px;
    color: var(--thistle);
    text-align: center;
    background-color: var(--oriole);

    transition: all 0.2s;
  }

  :global(.contact-form._sent .contact-form_tnx) {
    opacity: 1;
    z-index: 1;
  }

  .contacts__pattern {
    margin-top: 50px;
    min-height: 225px;
    height: 40vh;
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

    /*.contacts__pattern {*/
    /*  margin-top: 90px;*/
    /*}*/
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
      width: 340px;
      margin-right: 0;
      margin-bottom: 20px;
      text-align: center;
    }

    .contacts__form {
      width: 100%;
    }

    /*.contacts__pattern {*/
    /*  margin-top: 50px;*/
    /*}*/
  }
</style>
