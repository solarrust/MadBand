<script>
  import { locale, t } from "../../services/i18n";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";

  import Person from "./Person.svelte";
  import dataRU from "../../../lang/ru.json";
  import dataEN from "../../../lang/en.json";
  import { onMount } from "svelte";

  let localeStuff = {
    ru: dataRU.studioPage.stuff,
    en: dataEN.studioPage.stuff,
  };

  onMount(() => {
    let sliderW = (355 + 40) * localeStuff[$locale].length;
    let swiper = document.querySelector(".swiper");

    function pointerFunc(width) {
      if (width > sliderW) {
        swiper.style.pointerEvents = "none";
      } else {
        swiper.style.pointerEvents = "all";
      }
    }

    pointerFunc(window.innerWidth);

    window.addEventListener("resize", () => {
      pointerFunc(window.innerWidth);
    });
  });
</script>

<div class="stuff studio__stuff">
  <Swiper spaceBetween={40} slidesPerView="auto">
    {#each localeStuff[$locale] as person, i}
      <SwiperSlide>
        <Person
          className="person__slide _{i}"
          name={person.name}
          position={person.position}
          img={person.img}
        />
      </SwiperSlide>
    {/each}
  </Swiper>
</div>

<style>
  .studio__stuff {
    margin-top: 160px;
    margin-bottom: 105px;
  }

  :global(.studio__stuff .swiper-slide) {
    flex-shrink: 1;
  }
</style>
