<script context="module">
  import { gsap, TimelineLite } from "gsap";
  import * as scrollTrigger from "gsap/ScrollTrigger";
  import * as CSSRulePlugin from "gsap/CSSRulePlugin";
  import { onMount } from "svelte";
  gsap.registerPlugin(scrollTrigger);
  gsap.registerPlugin(CSSRulePlugin);

  /*let patternParent = document.querySelector(".portfolio__pattern");
  let blockW = patternParent.offsetWidth;
  let blockH = patternParent.offsetHeight;
  let circleSize = 75;

  let circleByW = Math.ceil(blockW / circleSize);
  let circleByH = Math.ceil(blockH / circleSize);
  let circles = circleByW * circleByH;

  for (let i = 0; i <= circles; i++) {
    let circleBlock = document.createElement("div");
    circleBlock.classList.add("portfolio__pattern-item");
    patternParent.appendChild(circleBlock);
  }*/

  export function circlesAnimation(target) {
    let tl = new TimelineLite();
    return tl.to(target, {
      backgroundImage: `radial-gradient(circle at center, var(--pattern-color) 0px, var(--thistle) 0px)`,
      scrollTrigger: {
        trigger: target,
        start: "30% bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
        scrub: true,
        // id: id,
        // markers: true,
      },
    });
  }
</script>

<script>
  export let extraClass = "";
</script>

<div class="portfolio__pattern {extraClass}" />

<style>
  :global(.portfolio__pattern) {
    --pattern-color: var(--portfolio-bkg);

    height: 100vh;
    margin-top: -35px;
    margin-left: -35px;
    margin-right: -35px;
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: space-between;*/
    background-color: var(--thistle);
    background-image: radial-gradient(
      circle at center,
      var(--pattern-color) 40px,
      var(--thistle) 40px
    );
    background-size: 75px 75px;
  }

  :global(.portfolio__pattern._blue) {
    --pattern-color: var(--sky-blue);
  }

  /*:global(.portfolio__pattern-item) {*/
  /*  position: relative;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*  width: 75px;*/
  /*  height: 75px;*/
  /*  border-radius: 50%;*/
  /*background-color: var(--portfolio-bkg);*/
  /*transform-origin: center;*/
  /*transform-style: preserve-3d;*/
  /*will-change: auto;*/
  /*transform: scale(1.5);*/
  /*background-image: radial-gradient(*/
  /*  circle at center,*/
  /*  var(--portfolio-bkg) 70%,*/
  /*  transparent 70%*/
  /*);*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: 100% 100%;*/
  /*}*/

  /*:global(.portfolio__pattern-item:after) {*/
  /*  content: "";*/
  /*  position: absolute;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  display: block;*/
  /*  border-radius: 50%;*/
  /*  background-color: var(--portfolio-bkg);*/
  /*  !*animation: circle-blinking 3s ease-in-out infinite alternate-reverse;*!*/
  /*  transform-origin: center;*/
  /*}*/

  /*@keyframes circle-blinking {*/
  /*  from {*/
  /*    width: 35%;*/
  /*    height: 35%;*/
  /*  }*/
  /*  to {*/
  /*    width: 100%;*/
  /*    height: 100%;*/
  /*  }*/
  /*}*/
</style>
