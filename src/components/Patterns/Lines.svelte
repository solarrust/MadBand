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

    rows.forEach((row) => {
      function linesAnim(direction) {
        return gsap.to(row, {
          duration: 30,
          // repeat: -1,
          ease: "none",
          backgroundPositionX:
            direction === "right" ? parentWidth : -parentWidth,
          paused: true,
        });
      }

      row.addEventListener("mousemove", (e) => {
        direction = mouseMoveMethod(e);
        linesAnim(direction).play();
      });

      row.addEventListener("mouseout", (e) => {
        linesAnim(direction).pause();
      });
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
    height: 50vh;
  }

  .lines-pattern__row {
    height: calc(100% / 6);
    background-image: linear-gradient(
      to right,
      transparent 14px,
      var(--green) 15px
    );
    background-size: 15px;
    background-position: 0;
    /*animation: allCases 6s infinite ease-in-out alternate-reverse;*/
  }

  .lines-pattern__row:nth-child(2) {
    background-image: linear-gradient(
      to right,
      transparent 6px,
      var(--green) 6px,
      var(--green) 8px,
      transparent 8px
    );
    /*animation-delay: 1s;*/
  }

  .lines-pattern__row:nth-child(3) {
    background-image: linear-gradient(
      to right,
      transparent 12px,
      var(--green) 12px
    );
    /*animation-delay: 2s;*/
  }

  .lines-pattern__row:nth-child(4) {
    background-image: linear-gradient(
      to right,
      transparent 5px,
      var(--green) 5px,
      var(--green) 9px,
      transparent 9px
    );
    /*animation-delay: 1s;*/
  }

  .lines-pattern__row:nth-child(5) {
    background-image: linear-gradient(
      to right,
      transparent 10px,
      var(--green) 10px,
      var(--green) 15px,
      transparent 15px
    );
    /*animation-delay: 4s;*/
  }

  .lines-pattern__row:nth-child(6) {
    background-image: linear-gradient(
      to right,
      transparent 3px,
      var(--green) 3px,
      var(--green) 11px,
      transparent 11px
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
