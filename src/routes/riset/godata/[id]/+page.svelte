<script context="module">
	import { onMount } from 'svelte';
	import OrgDetailRiset from '$lib/components/organism/riset/OrgDetailRiset.svelte';
	import { getRisetGodataById } from '$lib/_api';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { yearGoData } from '$lib/store/risetStore';
</script>

<script>
	$: loading = true;
	$: dataRiset = {
		_id: '',
		year: 2022,
		title: '',
		description: '',
		responden: 0,
		report: '',
		image: '',
		__v: 0
	};

	onMount(async () => {
		getRisetGodataById($page.params.id).then((res) => {
			console.log('dataRiset', res.data);
			dataRiset = res.data;
		});
	});
</script>

{#if dataRiset._id !== ''}
	<OrgDetailRiset dataGoData={dataRiset} />
{/if}
