<script>
  import AtomButton from "$lib/components/atom/button/AtomButton.svelte";
import AtomTextBody from "$lib/components/atom/typography/AtomTextBody.svelte";
  import { ChevronDownIcon, ChevronsDownIcon } from "svelte-feather-icons";

  export let _class = "";
  export let listDropDown = ["2021", "2020", "2019", "2018"];
  
  let btnClicked = false;

  let currentSelection = ""
  $: currentSelection = listDropDown[0]

  const handleDropDownClick = () => {
    btnClicked = !btnClicked
  }

  const handleItemClick = (item) => {
    currentSelection = item;
    handleDropDownClick();
  }

</script>

<div class="base-dropdown {_class}">
  <slot name="title" />
  <div class="grow mx-2" />
  <AtomButton on:click={handleDropDownClick} icon={ChevronDownIcon} size="small" iconSize="16" _class="float-right">{currentSelection}</AtomButton>
  <div class="dropdown">
    <div class:hidden={btnClicked == false} class:block={btnClicked == true}>
      {#each listDropDown as item}
      <div class="dropdown-item" on:click={handleItemClick(item)}>
        <AtomTextBody size="small" element="span" _class="cursor-pointer">{item}</AtomTextBody>
      </div>
    {/each}
  </div>
</div>
</div>

<style>
  .base-dropdown {
    @apply relative border border-white p-1 pl-4 rounded-full flex items-center h-fit min-w-fit
  }
  .dropdown {
    @apply absolute top-12 right-1 grid grid-cols-1 divide-y min-w-fit max-w-[80%] min-w-[8rem] max-h-[16rem] overflow-y-auto	bg-white text-black text-center rounded-lg drop-shadow-lg
  }
  .dropdown-item {
    @apply z-50 py-2 w-full cursor-pointer hover:bg-white-var first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg
  }
</style>