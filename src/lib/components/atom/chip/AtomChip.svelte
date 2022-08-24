<script lang="ts">
  // export let type: string = "information";
  export let type: string = "information";
  export let iconPosition: string = "left";
  export let size: string = "";
  export let _class: string = "";
  let iconSize: string = "20"

  switch(size) {
    case "small":
      iconSize = "18"; break;
    default:
      break;
  }
  
  // Icons by svelte-feather-icons
  export let icon: any; 
  
  // Check variant of div
  type = size.length !== 0 ? `chip-${size} chip-${type}` : `chip-${type}`

  type = _class.length !== 0 ? `${_class} ${type}` : type
  
</script>

{#if icon !== null && iconPosition === "right"}  
  <div class={type} {...$$restProps}>
    <slot />
    <svelte:component this={icon} size={iconSize} class="pl-1"/>
  </div>
  {:else if iconPosition === "left"}
    <div class={type} {...$$restProps}>
      <svelte:component this={icon} size={iconSize} class="pr-1"/>
      <slot />
    </div>
  {:else}
    <div class={type} {...$$restProps}>
      <slot />
      <svelte:component this={icon} size={iconSize} />
    </div>
{/if}

<style>
  div {
   @apply flex w-fit items-center justify-center py-2 px-6 rounded-full font-medium text-xs tracking-wide
  }

  .chip-information {
    @apply select-none
  }

  .chip-text {
    @apply select-text
  }
  
  .chip-small {
    @apply text-[0.6rem] py-1 px-3
  }
</style>