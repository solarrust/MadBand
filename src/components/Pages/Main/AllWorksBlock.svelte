<script>
  import { onMount } from "svelte";
  import { Link, Router } from "svelte-routing";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    let textBox = document.querySelector(".ticker__box");
    let textParent = textBox.parentNode;
    let textBoxWidth = textBox.clientWidth;
    let count = Math.floor(textParent.clientWidth / textBoxWidth) - 1;

    textBoxWidth = textParent.clientWidth / count;

    for (let i = 0; i < count; i++) {
      textParent.appendChild(textBox.cloneNode(true));
    }

    gsap.set(".ticker__box", {
      x: (i) => i * textBoxWidth,
    });

    let anim = gsap.to(".ticker__box", {
      duration: 30,
      repeat: -1,
      ease: "none",
      x: `+=${textParent.clientWidth}`, //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % textParent.clientWidth), //force x value to be between 0 and 500 using modulus
      },
    });

    ScrollTrigger.create({
      trigger: textParent,
      animation: anim,
      // markers: true,
      start: "-50px bottom",
      endTrigger: "#contacts",
      end: "top +=100px",
      toggleActions: "restart pause resume pause",
    });
  });
</script>

<div class="works__all-link" data-stroke-parent>
  <Link to="cases">
    <div class="ticker">
      <div class="ticker__item _big">
        <div class="ticker__box" data-stroke-text>All cases</div>
      </div>
      <div class="ticker__item _small" />
    </div>
  </Link>
</div>

<style>
  .works__all-link {
    margin-top: 65px;
    text-decoration: none;
    overflow: hidden;
  }

  :global(.works__all-link:hover a) {
    text-decoration: none;
  }

  :global(.ticker__item._big) {
    position: relative;
    left: -220px;
    right: -220px;
    height: 85px;
    width: calc(100% + 280px);
    background-color: var(--thistle);
    display: flex;
    color: var(--green);
    font-size: 36px;
    text-transform: uppercase;
    overflow: hidden;
  }

  :global(.ticker__box) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 220px;
    flex-shrink: 0;
    text-decoration: none;
    color: var(--thistle);
    text-shadow: -1px -1px 0 var(--green), 1px -1px 0 var(--green),
      -1px 1px 0 var(--green), 1px 1px 0 var(--green);
  }

  :global(.ticker__item._small) {
    height: 40px;
    background-image: url("../svg/see-more.svg");
    background-position-y: center;
    background-repeat: repeat-x;
    animation: allCases 30s infinite linear reverse;
  }

  :global(.works__all-link:hover .ticker__item._small) {
    animation-direction: normal;
    background-image: url("../svg/see-more-hover.svg");
    background-size: 100px;
    text-decoration: none;
  }

  @keyframes allCases {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 1500px;
    }
  }

  @media (max-width: 680px) {
    :global(.ticker__item._big) {
      font-size: 24px;
    }

    :global(.ticker__box) {
      width: 150px;
    }

    :global(.ticker__box .stroke__text-parent) {
      flex-wrap: nowrap;
    }
  }
</style>
