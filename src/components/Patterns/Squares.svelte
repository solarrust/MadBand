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

    animation: line-run infinite linear;

    animation-duration: 10s;
  }

  .line:not(:last-child) {
    margin-right: 5px;
  }

  .line:nth-child(5n + 1) {
    transform: translateY(25px);
    animation-duration: 25s;
    animation-direction: reverse;
  }

  .line:nth-child(5n + 2) {
    transform: translateY(50px);
    animation-duration: 16s;
  }

  .line:nth-child(5n + 3) {
    transform: translateY(25px);
    animation-duration: 10s;
    animation-direction: reverse;
  }

  .line:nth-child(5n + 4) {
    transform: translateY(10px);
    animation-duration: 20s;
  }

  @keyframes line-run {
    from {
      background-position-y: 1000px;
    }
    to {
      background-position-y: 0;
    }
  }
</style>
