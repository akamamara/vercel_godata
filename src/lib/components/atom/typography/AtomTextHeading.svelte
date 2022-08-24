<script>
  export let element = 'h1';
  export let type = 'title-section';
  export let _class = 'text-primary';
</script>

<svelte:element this={element} class="{type} {_class}" {...$$restProps}>
  <slot />
</svelte:element>

<style>
  .title {
    @apply text-6xl font-bold
  }
  .title-section {
    @apply text-4xl font-bold
  }
  .title-subsection {
    @apply text-lg font-semibold
  }
</style>