<script>
  import { dict, locale, t } from "../services/i18n";
  import translations from "./translations";

  $: languages = Object.keys(translations);
</script>

<div class="lang">
  <select bind:value={$locale}>
    {#each languages as lang}
      <option value={lang}>
        {lang}
      </option>
    {/each}
  </select>
</div>

<style>
  .lang {
    position: fixed;
    left: 40px;
    bottom: 35px;
  }
</style>
