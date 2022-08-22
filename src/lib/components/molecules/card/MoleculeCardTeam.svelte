<script>
  import AtomTextBody from "$lib/components/atom/typography/AtomTextBody.svelte";

  export let name = "";
  export let occupation = "";
  export let imgSrc = "";
</script>

<div class="card">
  <div class="card-portrait">
    <img src={imgSrc} alt="Portrait of {name}" />
  </div>
  <div class="text-white text-center z-[21]">
    <AtomTextBody>
      <strong>{name}</strong>
    </AtomTextBody>
    <AtomTextBody>{occupation}</AtomTextBody>
  </div>
</div>

<style>
  .card {
    @apply relative grid grid-cols-1 justify-center items-center p-4 bg-secondary w-full rounded-2xl
  }

  .card-portrait {
    @apply relative flex items-end
  }

  .card-portrait img {
    @apply h-[10rem] object-scale-down object-bottom mx-auto
  }
  
  .card-portrait::before {
    content: '';
    @apply absolute bottom-0 left-0 w-full h-[80%] z-[20] bg-gradient-to-t from-secondary
  }
</style>