<script lang="ts">
  export let href: string;
  export let active: boolean;
</script>

<a class:active={active} on:click href={href} {...$$restProps}>
  <slot />
</a>

<style>
  a {
    @apply hover:underline hover:font-bold hover:transition-all hover:decoration-2
  }
  .active {
    @apply font-bold hover:font-extrabold
  }
</style>
