<script context="module">
	import { onMount } from 'svelte';
	import OrgDetailRiset from '$lib/components/organism/riset/OrgDetailRiset.svelte';
	import { getRisetGodataById } from '$lib/_api';
	import { page } from '$app/stores';
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
			dataRiset = res.data;
			console.log('dataRiset', dataRiset);
		});
	});
</script>

<OrgDetailRiset dataGoData={dataRiset} />
