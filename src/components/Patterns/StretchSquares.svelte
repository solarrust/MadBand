<script>
  export let extraClass;
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
    width: 100%;
    height: 25%;
  }

  .square-pattern__line:first-child {
    animation: stretch ease-in-out 5s infinite alternate;
  }

  .square-pattern__line:nth-child(2) {
    animation: stretch-small ease-in-out 5s infinite alternate-reverse;
  }

  .square-pattern__line:nth-child(3) {
    animation: stretch-small ease-in-out 5s infinite alternate;
  }

  .square-pattern__line:last-child {
    animation: stretch ease-in-out 5s infinite alternate-reverse;
  }

  .square-pattern__child {
    width: 20%;
    height: 100%;
    /*border: 1px solid red;*/
    background-image: linear-gradient(
      75deg,
      var(--bkg-color) 0,
      var(--bkg-color) 22%,
      var(--thistle) 22%,
      var(--thistle) 80%,
      var(--bkg-color) 80%
    );
  }

  @keyframes stretch {
    0% {
      height: 50%;
    }
    100% {
      height: 15%;
    }
  }

  @keyframes stretch-small {
    0% {
      height: 20%;
    }
    100% {
      height: 35%;
    }
  }
</style>
