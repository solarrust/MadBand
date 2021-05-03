<script>
  import { dict, t, locale } from "../../services/i18n";
  import { Link, Router } from "svelte-navigator";
  export let name;
  export let position;
  export let img;
</script>

<div class="person stuff__item">
  <img src={img} alt="{name}, {position}" />
  <p>{name}</p>
  <p>{position}</p>
</div>

<style></style>
