<script>
  import AtomLink from "$lib/components/atom/link/AtomLink.svelte";
  import AtomTextBody from "$lib/components/atom/typography/AtomTextBody.svelte";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  export let counter = 1;
  export let maxNumber = 4;
</script>

<div class="grid grid-rows-1 grid-flow-col gap-2 w-fit items-center my-3 mx-auto">
  <button type="button">
    <ChevronLeftIcon size="16" />
  </button>
  {#each {length: maxNumber} as _, i}
    {#if counter == i+1}
      <AtomLink href="#" active>
        <AtomTextBody element="span" size="" _class="text-xl">{i+1}</AtomTextBody>
      </AtomLink>
    {:else}
      <AtomLink href="#">{i+1}</AtomLink>
    {/if}
  {/each}
  <button type="button">
    <ChevronRightIcon size="16" />
  </button>
</div>