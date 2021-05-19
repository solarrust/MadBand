<script>
  import { onMount } from "svelte";
  import { locale, t } from "../../services/i18n";
  import EmblaCarousel from "embla-carousel";

  import Person from "./Person.svelte";
  import dataRU from "../../../lang/ru.json";
  import dataEN from "../../../lang/en.json";

  let localeStuff = {
    ru: dataRU.studioPage.stuff,
    en: dataEN.studioPage.stuff,
  };

  onMount(() => {
    const emblaNode = document.querySelector(".embla");
    const options = {
      align: "start",
      containScroll: "trimSnaps",
      inViewThreshold: 0.5,
      speed: 2,
    };

    let containerW =
      document.querySelectorAll(".embla__slide").length * (355 + 40);

    let embla = EmblaCarousel(emblaNode, options);

    function envClassHelper(contW) {
      if (window.innerWidth > contW) {
        emblaNode.classList.add("_no-ev");
      } else {
        emblaNode.classList.remove("_no-ev");
      }
    }

    envClassHelper(containerW);

    window.addEventListener("resize", () => {
      embla.scrollTo(0);
      envClassHelper(containerW);
    });
  });
</script>

<div class="stuff studio__stuff embla" data-slider>
  <div class="embla__container">
    {#each localeStuff[$locale] as person}
      <Person
        extraClass={"embla__slide"}
        name={person.name}
        position={person.position}
        img={person.img}
      />
    {/each}
  </div>
</div>

<style>
  :global(.stuff.embla) {
    cursor: grab;
  }

  :global(.stuff._no-ev .embla__container) {
    justify-content: center;
  }

  :global(.stuff .embla__slide) {
    position: relative;
    flex: 0 0 25%;
    max-width: 355px;
  }

  :global(.stuff .embla__slide:not(:last-child)) {
    margin-right: 40px;
  }

  :global(.stuff.embla.is-drugging) {
    cursor: grabbing;
  }

  @media (max-width: 980px) {
    :global(.stuff .embla__slide) {
      position: relative;
      flex: 0 0 40%;
    }

    :global(.stuff .embla__slide:not(:last-child)) {
      margin-right: 20px;
    }
  }

  .studio__stuff {
    margin-top: 160px;
    margin-bottom: 105px;
  }

  .stuff {
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .stuff-wrapper {
    /*display: flex;*/
    /*padding: 0 40px;*/
    /*overflow-x: scroll;*/
  }

  /*.stuff-wrapper:after {*/
  /*  content: "";*/
  /*  display: block;*/
  /*  margin-right: 80px;*/
  /*}*/

  /*.stuff-wrapper::-webkit-scrollbar {*/
  /*  display: none;*/
  /*}*/

  /*.stuff-wrapper::-webkit-scrollbar-track {*/
  /*  background-color: transparent;*/
  /*}*/
</style>
