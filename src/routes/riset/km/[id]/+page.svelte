<script context="module">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

	import OrgDetailRiset from '$lib/components/organism/riset/OrgDetailRiset.svelte';

	import { getRisetKmById } from '$lib/_api';
	import { itemRisetKm } from '$lib/store';
</script>

<script>
	$: dataRiset = {
		_id: '',
		ministry: '',
		title: '',
		description: '',
		researcher: '',
		date: '',
		report: '',
		__v: 0
	};

	onMount(async () => {
		getRisetKmById($page.params.id).then((res) => {
			console.log('dataRiset', res.data);
			dataRiset = res.data;
		});
	});
</script>

<svelte:head>
	<title>{dataRiset.title} | GODATA</title>
</svelte:head>

{#if dataRiset?._id !== ''}
	<OrgDetailRiset dataKm={dataRiset} />
{/if}
