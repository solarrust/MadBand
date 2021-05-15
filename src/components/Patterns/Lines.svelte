<script>
  import { onMount } from "svelte";

  onMount(() => {});
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

  :global(.lines-pattern__row) {
    height: calc(100% / 6);
    background-image: linear-gradient(
      to right,
      transparent 14px,
      var(--green) 15px
    );
    background-size: 15px;
    animation: allCases 6s infinite ease-in-out alternate-reverse;
  }

  :global(.lines-pattern__row:nth-child(2)) {
    background-image: linear-gradient(
      to right,
      transparent 6px,
      var(--green) 6px,
      var(--green) 8px,
      transparent 8px
    );
    animation-delay: 1s;
  }

  :global(.lines-pattern__row:nth-child(3)) {
    background-image: linear-gradient(
      to right,
      transparent 12px,
      var(--green) 12px
    );
    animation-delay: 2s;
  }

  :global(.lines-pattern__row:nth-child(4)) {
    background-image: linear-gradient(
      to right,
      transparent 5px,
      var(--green) 5px,
      var(--green) 9px,
      transparent 9px
    );
    animation-delay: 1s;
  }

  :global(.lines-pattern__row:nth-child(5)) {
    background-image: linear-gradient(
      to right,
      transparent 10px,
      var(--green) 10px,
      var(--green) 15px,
      transparent 15px
    );
    animation-delay: 4s;
  }

  :global(.lines-pattern__row:nth-child(6)) {
    background-image: linear-gradient(
      to right,
      transparent 3px,
      var(--green) 3px,
      var(--green) 11px,
      transparent 11px
    );
    animation-delay: 3s;
  }

  @keyframes allCases {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 750px;
    }
  }
</style>
