<script>
  export let moreProjects;
</script>

<div class="cases__explore">
  <ul>
    {#each moreProjects as project}
      <li>{project.projectName} <img src="/{project.cover}" alt="" /></li>
    {/each}
  </ul>
</div>

<style></style>
