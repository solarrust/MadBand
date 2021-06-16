<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  onMount(() => {
    let parentWidth = document.querySelector(".lines-pattern").clientWidth;
    let rows = Array.from(document.querySelectorAll(".lines-pattern__row"));

    let direction = "right";
    let oldx = 0;
    let anim;
    let mouseMoveMethod = function (e) {
      if (e.pageX < oldx) {
        direction = "left";
      } else if (e.pageX > oldx) {
        direction = "right";
      }

      oldx = e.pageX;

      return direction;
    };

    rows.forEach((row, i) => {
      function linesAnim(direction) {
        return gsap.to(row, {
          duration: 60,
          // repeat: -1,
          ease: "none",
          backgroundPositionX:
            direction === "right" ? parentWidth : -parentWidth,
          paused: true,
        });
      }

      if (i % 2) {
        linesAnim("left").duration(30).play();
      } else {
        linesAnim("right").duration(30).play();
      }

      row.addEventListener("mousemove", (e) => {
        direction = mouseMoveMethod(e);
        linesAnim(direction).play();
      });

      // row.addEventListener("mouseout", (e) => {
      //   linesAnim(direction).pause();
      // });
    });
  });
</script>

<div class="lines-pattern">
  <div class="lines-pattern__row" />
  <div class="lines-pattern__row" />
  <div class="lines-pattern__row" />
  <div class="lines-pattern__row" />
  <div class="lines-pattern__row" />
  <div class="lines-pattern__row" />
</div>

<style>
  .lines-pattern {
    min-height: 225px;
    height: 100%;
  }

  .lines-pattern__row {
    height: calc(100% / 6);
    background-image: linear-gradient(
      to right,
      rgb(2 156 83 / 0) 14px,
      var(--green) 15px
    );
    background-size: 15px;
    background-position: 0;
    /*animation: allCases 6s infinite ease-in-out alternate-reverse;*/
  }

  .lines-pattern__row:nth-child(2) {
    background-image: linear-gradient(
      to right,
      rgb(2 156 83 / 0) 6px,
      var(--green) 6px,
      var(--green) 8px,
      rgb(2 156 83 / 0) 8px
    );
    /*animation-delay: 1s;*/
  }

  .lines-pattern__row:nth-child(3) {
    background-image: linear-gradient(
      to right,
      rgb(2 156 83 / 0) 12.1px,
      var(--green) 12.1px
    );
    /*animation-delay: 2s;*/
  }

  .lines-pattern__row:nth-child(4) {
    background-image: linear-gradient(
      to right,
      rgb(2 156 83 / 0) 5px,
      var(--green) 5px,
      var(--green) 9px,
      rgb(2 156 83 / 0) 9px
    );
    /*animation-delay: 1s;*/
  }

  .lines-pattern__row:nth-child(5) {
    background-image: linear-gradient(
      to right,
      rgb(2 156 83 / 0) 10px,
      var(--green) 10px,
      var(--green) 15px,
      rgb(2 156 83 / 0) 15px
    );
    /*animation-delay: 4s;*/
  }

  .lines-pattern__row:nth-child(6) {
    background-image: linear-gradient(
      to right,
      rgb(2 156 83 / 0) 3px,
      var(--green) 3px,
      var(--green) 11px,
      rgb(2 156 83 / 0) 11px
    );
    /*animation-delay: 3s;*/
  }

  /*@keyframes allCases {*/
  /*  from {*/
  /*    background-position-x: 0;*/
  /*  }*/
  /*  to {*/
  /*    background-position-x: 750px;*/
  /*  }*/
  /*}*/
</style>
