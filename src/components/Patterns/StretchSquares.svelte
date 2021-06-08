<script>
  import { gsap, TimelineLite } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  gsap.registerPlugin(ScrollTrigger);

  export let extraClass;

  onMount(() => {
    let animLines = Array.from(
      document.querySelectorAll(".square-pattern__line")
    );

    let anim = gsap.timeline();

    animLines.forEach((line, i) => {
      line.style.height = `${10 * (i + 1)}%`;

      anim.to(line, {
        height: `${10 * (animLines.length - i)}%`,
        ease: "sine.out",
      });

      ScrollTrigger.create({
        animation: anim,
        trigger: ".square-pattern",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        scrub: true,
        markers: true,
      });

      window.onscroll = () => {
        let oldPos = anim.scrollTrigger.start;
        anim.scrollTrigger.refresh();

        if (oldPos !== anim.scrollTrigger.start) {
          anim.scrollTrigger.refresh();
          console.log("anim refreshed");
        }
      };

      return () => anim.kill();
    });
  });
</script>

<div class="square-pattern {extraClass}">
  <div class="square-pattern__line">
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
  </div>
  <div class="square-pattern__line">
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
  </div>
  <div class="square-pattern__line">
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
  </div>
  <div class="square-pattern__line">
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
    <div class="square-pattern__child" />
  </div>
</div>

<style>
  .square-pattern {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .square-pattern__line {
    display: flex;
    flex-grow: 0;
    width: 100%;
    height: 25%;
    transition: all 0.1s;
    /*animation-play-state: paused;*/
    /*animation-timing-function: ease-in-out;*/
    /*animation-duration: 2s;*/
  }

  /*.square-pattern__line:nth-child(2),*/
  /*.square-pattern__line:nth-child(3) {*/
  /*  flex-grow: 1;*/
  /*  flex-shrink: 2;*/
  /*}*/

  /*.square-pattern__line:first-child {*/
  /*  animation-name: stretch;*/
  /*  animation-direction: alternate;*/
  /*}*/

  /*.square-pattern__line:nth-child(2) {*/
  /*  animation-name: stretch-small;*/
  /*  animation-direction: alternate-reverse;*/
  /*}*/

  /*.square-pattern__line:nth-child(3) {*/
  /*  animation-name: stretch-small;*/
  /*  animation-direction: alternate;*/
  /*}*/

  /*.square-pattern__line:last-child {*/
  /*  animation-name: stretch;*/
  /*  animation-direction: alternate-reverse;*/
  /*}*/

  /*:global(.square-pattern__line.active) {*/
  /*  animation-play-state: running;*/
  /*}*/

  .square-pattern__child {
    width: 20%;
    height: 100%;
    /*border: 1px solid red;*/
    /*background-image: linear-gradient(*/
    /*  75deg,*/
    /*  var(--bkg-color) 0,*/
    /*  var(--bkg-color) 22%,*/
    /*  var(--thistle) 22%,*/
    /*  var(--thistle) 80%,*/
    /*  var(--bkg-color) 80%*/
    /*);*/
    clip-path: polygon(0 0, 52% 0, 100% 60%, 100% 100%, 50% 100%, 0 30%);

    background-color: var(--thistle);
  }

  /*@keyframes stretch {*/
  /*  0% {*/
  /*    height: 50%;*/
  /*  }*/
  /*  100% {*/
  /*    height: 15%;*/
  /*  }*/
  /*}*/

  /*@keyframes stretch-small {*/
  /*  0% {*/
  /*    height: 20%;*/
  /*  }*/
  /*  100% {*/
  /*    height: 35%;*/
  /*  }*/
  /*}*/
</style>
