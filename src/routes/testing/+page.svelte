<script>
	import MoleculeCardRiset from '$lib/components/molecules/card/MoleculeCardRiset.svelte';
</script>

<div class="container bg-primary">
	<div class="main-container">
		<div class="riset-godata-list">
			{#each { length: 6 } as _}
				<MoleculeCardRiset pulse />
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		@apply z-[10] pt-[6.25rem] relative flex flex-col items-center justify-center min-h-screen;
	}

	.riset-godata-list {
		@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-4 sm:mt-12 mx-auto w-[90%] sm:w-full;
	}
</style>
