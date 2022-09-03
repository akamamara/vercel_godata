<script context="module">
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import { itemRisetGoData, itemRisetKm, stateGoData } from '$lib/store';
	import { yearGoData, pageGoData, pageKm, ministryKm, loadingRiset } from '$lib/store/risetStore';
	import { getRisetGoData, getRisetKmData } from '$lib/_api';
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import { stateKm } from '$lib/store';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
</script>

<script>
	export let _class = '';
	export let listDropDownRisetGodata = [];
	export let listDropDownRisetKM = [];

	let btnClicked = false;

	let currentSelection = '';
	$: if (listDropDownRisetGodata.length || listDropDownRisetKM.length)
		currentSelection = get(stateGoData) ? listDropDownRisetGodata[0] : listDropDownRisetKM[0];

	onMount(() => {
		document.addEventListener('click', function handleClickOutsideBox(event) {
			const dropdown = document.getElementById('dropdown');

			if (!dropdown.contains(event.target) && btnClicked) {
				btnClicked = false;
			}
		});
	});

	const handleDropDownClick = () => {
		btnClicked = !btnClicked;
	};

	const handleItemClick = async (item) => {
		currentSelection = item;
		handleDropDownClick();

		if (browser)
			if (get(stateGoData)) {
				yearGoData.set(parseInt(currentSelection));
				pageGoData.set(1);
				loadingRiset.set(true);
				getRisetGoData($pageGoData, parseInt(item))
					.then((res) => itemRisetGoData.set(res.data.results))
					.finally(() => loadingRiset.set(false));
			}
		if (get(stateKm)) {
			ministryKm.set(currentSelection);
			pageKm.set(1);
			loadingRiset.set(true);
			getRisetKmData($pageKm, item === 'Lainnya' ? '' : item)
				.then((res) => {
					console.log(res.data.results);
					itemRisetKm.set(res.data.results);
				})
				.finally(() => loadingRiset.set(false));
		}
	};
</script>

<div class="base-dropdown {_class}" id="dropdown">
	<slot name="title" />
	<div class="grow mx-2" />
	<AtomButton
		on:click={handleDropDownClick}
		icon={ChevronDownIcon}
		size="small"
		iconSize="16"
		_class="float-right">{currentSelection}</AtomButton
	>
	<div
		class:hidden={btnClicked == false}
		class:dropdown={btnClicked == true && $stateGoData}
		class:dropdownKm={btnClicked == true && $stateKm}
	>
		{#if $stateKm}
			{#each listDropDownRisetKM as item}
				<div class="dropdown-item" on:click={async () => await handleItemClick(item)}>
					<AtomTextBody size="small" element="span" _class="cursor-pointer">{item}</AtomTextBody>
				</div>
			{/each}
		{:else}
			{#each listDropDownRisetGodata as item}
				<div class="dropdown-item" on:click={async () => await handleItemClick(item)}>
					<AtomTextBody size="small" element="span" _class="cursor-pointer">{item}</AtomTextBody>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.base-dropdown {
		@apply relative border border-white p-1 pl-4 rounded-full flex items-center h-fit min-w-fit;
	}

	.dropdown {
		@apply z-[45] absolute top-12 right-1 w-[12rem] h-fit max-h-[16rem] grid grid-cols-3 justify-center	items-center justify-items-stretch divide-y divide-x overflow-y-auto bg-white text-black text-center rounded-lg drop-shadow-lg;
	}

	.dropdownKm {
		@apply z-[45] absolute top-12 right-1 w-[16rem] h-[16rem] grid grid-cols-2 justify-center	items-center justify-items-stretch divide-y divide-x overflow-y-auto bg-white text-black text-center rounded-lg drop-shadow-lg;
	}

	.dropdown-item {
		@apply w-full h-full px-4 py-2 cursor-pointer hover:bg-white-var;
	}
</style>
