<script>
  import logoSVG from "../../../public/svg/logo-no-red.svg";
  import { Link, Router } from "svelte-routing";
</script>

<a href="/" class="logo-link">{@html logoSVG}</a>

<style>
  .logo-link {
    display: block;
    width: 175px;
  }

  .logo-link svg {
    width: 100%;
  }
</style>
