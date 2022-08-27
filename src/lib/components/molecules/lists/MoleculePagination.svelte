<script>
	import AtomLink from '$lib/components/atom/link/AtomLink.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import { itemRisetKm } from '$lib/store';
	import { pageKm, ministryKm, maxPageKm } from '$lib/store/risetStore';
	import { getRisetKmData } from '$lib/_api';
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';

	export let counter = 1;
	export let maxNumber = 4;

	async function updateItemKm() {
		getRisetKmData($pageKm, $ministryKm).then((res) => {
			itemRisetKm.set(res.data.results);
		});
	}

	async function prevPage() {
		pageKm.update((n) => n - 1);
		await updateItemKm();
	}

	async function onClickCounter(num = 1) {
		pageKm.set(num);
		await updateItemKm();
	}

	async function nextPage() {
		pageKm.update((n) => n + 1);
		await updateItemKm();
	}
</script>

<div class="pagination-container">
	{#if counter !== 1}
		<button type="button" on:click={async () => prevPage()}>
			<ChevronLeftIcon size="16" />
		</button>
	{/if}
	{#each { length: maxNumber } as _, i}
		<AtomLink
			active={counter === i + 1}
			on:click={async (e) => {
				if (counter !== i + 1) onClickCounter(i + 1);
			}}
			_class="cursor-pointer select-none flex items-baseline h-fit"
		>
			<AtomTextBody element="span" size={counter === i + 1 ? 'extra-big' : 'normal'}>
				{i + 1}
			</AtomTextBody>
		</AtomLink>
	{/each}
	{#if counter !== $maxPageKm}
		<button type="button" on:click={async () => nextPage()}>
			<ChevronRightIcon size="16" />
		</button>
	{/if}
</div>

<style>
	.pagination-container {
		@apply grid grid-rows-1 grid-flow-col gap-3 w-fit content-center items-center my-6 mx-auto;
	}
</style>
