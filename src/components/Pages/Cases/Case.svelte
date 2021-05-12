<script>
  import { dict, t, locale } from "../../services/i18n";

  export let title;
  export let data;
  export let category;
  export let bkg;
</script>

<section class="case _{bkg}">
  {#if $locale === "ru" && data.projectName.ru !== ""}
    <h2 class="case__client">{data.projectName.ru}</h2>
  {:else}
    <h2 class="case__client">{data.projectName.en}</h2>
  {/if}
  <h1 class="case__name">{data.caseName}</h1>

  <div class="case__cover-block">
    <span class="case__category">{category[$locale]}</span>

    {#if data.isVideoCover}
      <video
        src="/{data.videoCover}"
        class="case__video-cover"
        poster="/{data.pageCover}"
        muted
        controls
      />
    {:else}
      <img src="/{data.pageCover}" alt="" />
    {/if}
  </div>
  <div class="case__parent">
    <aside class="case__aside">
      <ul class="case__aside-list">
        {#each Object.entries(data.data) as [key, value]}
          <li class="case__aside-item">{key}: {value}</li>
        {/each}
      </ul>
    </aside>
    <main class="case__main">
      <p className="case__text">{@html data.text[$locale]}</p>
    </main>
    {#if data.photos}
      <div class="case__photos">
        {#each data.photos as photo}
          <img src="/{photo}" alt="" class="case__photo" />
        {/each}
      </div>
    {/if}

    {#if data.gallery}
      <div class="case__gallery">
        {#each data.gallery as photo}
          <img src="/{photo}" alt="" class="case__gallery-photo" />
        {/each}
      </div>
    {/if}
  </div>
  <div class="work__call-to-action">
    <a href="#contacts">
      <div class="work__call-to-action__arrows" />
    </a>
  </div>
</section>

<style>
  .case {
    --main-color: var(--oriole);
    --second-color: var(--green);
    padding: 200px 40px 0;
    color: var(--main-color);
  }

  .case._dandelion {
    background-color: var(--dandelion);
  }

  .case._thistle {
    background-color: var(--thistle);
  }
</style>
