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
  <Swiper
    spaceBetween={40}
    slidesPerView="auto"
    on:slideChange={() => console.log("slide change")}
    on:swiper={(e) => console.log(e.detail[0])}
  >
    {#each localeStuff[$locale] as person}
      <SwiperSlide>
        <Person
          className={"person__slide"}
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

  .studio__stuff :global(.swiper-slide) {
    flex-shrink: 1;
  }
</style>
