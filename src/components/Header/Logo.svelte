<script>
  import logoSVG from "../../../public/svg/logo-no-red.svg";
  import { Link, Router } from "svelte-routing";
</script>

<Link href="/" class="logo-link">{@html logoSVG}</Link>

<style>
  .logo-link {
    display: block;
    width: 175px;
  }

  .logo-link svg {
    width: 100%;
  }
</style>
