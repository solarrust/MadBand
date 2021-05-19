<script>
  export let name;
  export let position;
  export let img;
  export let extraClass;
</script>

<div class="person stuff__item {extraClass}">
  <div class="person__img-block">
    <img src={img} alt="{name}, {position}" class="person__img" />
  </div>
  <div class="person__text">
    <p class="person__name">{name}</p>
    <p class="person__position">{position}</p>
  </div>
</div>

<style>
  .person {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /*flex: auto 0 0;*/
    /*width: 355px;*/
    /*margin-right: 40px;*/
    font-size: var(--s-text-size);
  }

  .person:not(:last-child) {
    margin-right: 40px;
  }

  .person__img {
    max-width: 100%;
  }

  .person:nth-child(odd) {
    color: var(--green);
  }

  .person:nth-child(even) {
    color: var(--oriole);
  }

  .person__text {
    margin-top: 15px;
  }

  .person__position {
    font-style: italic;
  }

  @media (max-width: 680px) {
    .person:not(:last-child) {
      margin-right: 20px;
    }
  }
</style>
