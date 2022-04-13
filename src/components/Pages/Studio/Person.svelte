<script>
  export let name;
  export let position;
  export let img;
  export let className;
</script>

<div class="person stuff__item {className}">
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
    min-width: 355px;
    margin: 0 auto;
    /*margin-right: 40px;*/
    font-size: var(--s-text-size);
  }

  .person._1,
  .person._3 {
    color: var(--oriole);
  }

  .person:not(:last-child) {
    margin-right: 40px;
  }

  .person__img {
    max-width: 100%;
  }

  .person__text {
    max-width: 50%;
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
