<script>
</script>

<div class="square-pattern">
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
  <div class="line" />
</div>

<style>
  .square-pattern {
    display: flex;
    position: relative;
    top: -50px;
    width: 100%;
    height: 100%;
  }

  .line {
    width: calc(100% / 12);
    height: calc(100% + 50px);
    background-image: linear-gradient(to top, #fbfe67 50px, transparent 50px);
    background-size: 50px 100px;

    animation: line-run-y infinite linear;

    animation-duration: 20s;
  }

  .line:not(:last-child) {
    margin-right: 5px;
  }

  .line:nth-child(5n + 1) {
    /*transform: translateY(25px);*/
    animation-duration: 37.5s;
    animation-direction: reverse;
  }

  .line:nth-child(5n + 2) {
    /*transform: translateY(50px);*/
    animation-duration: 24s;
  }

  .line:nth-child(5n + 3) {
    /*transform: translateY(25px);*/
    animation-duration: 20s;
    animation-direction: reverse;
  }

  .line:nth-child(5n + 4) {
    /*transform: translateY(10px);*/
    animation-duration: 30s;
  }

  @keyframes line-run-y {
    from {
      background-position-y: 1000px;
    }
    to {
      background-position-y: 0;
    }
  }

  @keyframes line-run-x {
    from {
      background-position-x: 1000px;
    }
    to {
      background-position-x: 0;
    }
  }

  @media (max-width: 1280px) {
    .square-pattern {
      top: 0;
      left: 0;
      flex-direction: column;
    }

    .line {
      width: 100%;
      height: calc(100% / 7);
      background-image: linear-gradient(
        to right,
        #fbfe67 50px,
        transparent 50px
      );
      background-size: 100px 50px;
      animation-name: line-run-x;
      /*transform: translateX(50px);*/
    }

    .line:nth-child(n + 8) {
      display: none;
    }
  }

  @media (max-width: 680px) {
    /*.line {*/
    /*  height: calc(100% / 5);*/
    /*}*/

    /*.line:nth-child(n + 6) {*/
    /*  display: none;*/
    /*}*/
    .line:not(:last-child) {
      margin-right: 0;
    }
  }
</style>
