<script>
  export let name;
  export let position;
  export let img;
</script>

<div class="person stuff__item">
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
    width: 300px;
    margin-right: 40px;
    font-size: 14px;
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
</style>
