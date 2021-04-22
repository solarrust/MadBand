<script>
  import Hero from "./Hero.svelte";
  import Works from "./Works.svelte";
  import Contacts from "./Contacts.svelte";
</script>

<Hero />

<Works />

<Contacts />

<style>
  :global(.main__section) {
    min-height: 100vh;
  }
</style>
