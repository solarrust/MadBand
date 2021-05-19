<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  onMount(() => {
    let pointNodes = document.querySelectorAll(".locus__point");
    let pointAnimationPath =
      "M270.5 275c0 75.879-15.155 144.551-39.636 194.233-24.495 49.715-58.242 80.267-95.364 80.267-37.122 0-70.869-30.552-95.364-80.267C15.656 419.551.5 350.879.5 275S15.655 130.449 40.136 80.767C64.63 31.052 98.377.5 135.5.5c37.122 0 70.869 30.552 95.364 80.267C255.345 130.449 270.5 199.12 270.5 275z";
    let mobilePath =
      "M189.501 192.147C189.501 245.147 178.915 293.105 161.822 327.795C144.714 362.516 121.173 383.794 95.3245 383.794C69.4757 383.794 45.9351 362.516 28.8269 327.795C11.7345 293.105 1.14844 245.147 1.14844 192.147C1.14844 139.147 11.7345 91.1889 28.8269 56.4996C45.9351 21.7782 69.4757 0.5 95.3245 0.5C121.173 0.5 144.714 21.7782 161.822 56.4996C178.915 91.1889 189.501 139.147 189.501 192.147Z";

    let currentPath = pointAnimationPath;

    if (window.innerWidth <= 680) {
      currentPath = mobilePath;
    }

    pointNodes.forEach((el, i) => {
      gsap.to(el, {
        motionPath: {
          path: currentPath,
          autoRotate: true,
        },
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: 20,
        delay: -(i * 5),
        ease: "linear",
      });
    });
  });
</script>

<div class="philosophy__img locus">
  <div class="locus">
    <div class="locus__item">
      <div class="locus__point" />
    </div>
    <div class="locus__item">
      <div class="locus__point" />
    </div>
    <div class="locus__item">
      <div class="locus__point" />
    </div>
    <div class="locus__star" />
  </div>
</div>

<style>
  .locus {
    position: relative;
    z-index: 1;
    display: flex;
  }

  .locus__item {
    position: relative;
    width: 270px;
    height: 550px;
    border: 1px solid var(--green);
    border-radius: 50%;
  }

  .locus__point {
    position: absolute;
    top: calc(0% - 8px);
    left: calc(0% - 8px);
    width: 13px;
    height: 13px;
    background-color: var(--green);
    border-radius: 50%;
  }

  .locus__item:nth-child(2):after {
    animation-delay: -10s;
  }

  .locus__item:nth-child(3):after {
    animation-delay: -5s;
  }

  .locus__item:not(:first-child) {
    margin-left: -170px;
  }

  .locus__star {
    position: absolute;
    top: calc(50% - 37px);
    left: calc(50% - 37px);
    width: 75px;
    height: 75px;
    z-index: -1;
    background-image: url("../svg/yellow-star.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media (max-width: 1280px) {
    .locus {
      justify-content: center;
    }
  }

  @media (max-width: 680px) {
    .locus__item {
      width: 190px;
      height: 385px;
    }

    .locus__star {
      top: calc(50% - 26px);
      left: calc(50% - 26px);
      width: 52px;
      height: 52px;
    }

    .locus__item:not(:first-child) {
      margin-left: -120px;
    }

    .locus__point {
      width: 9px;
      height: 9px;
      top: calc(0% - 5px);
      left: calc(0% - 5px);
    }
  }
</style>
