<script context="module">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { itemRisetKm } from '$lib/store';

	import { getRisetKmData } from '$lib/_api';
	import { updateStateTypeRiset } from '$lib/utils/risetUtils';

	import OrgHeroBannerRiset from '$lib/components/organism/riset/OrgHeroBannerRiset.svelte';
	import OrgListRiset from '$lib/components/organism/riset/OrgListRiset.svelte';
	import { ministryKm, maxPageKm, pageKm, loadingRiset } from '$lib/store/risetStore';
</script>

<script>
	updateStateTypeRiset($page.routeId?.toString().split('/').pop());

	$: console.log('LoadingRiset: ', $loadingRiset);

	onMount(async () => {
		pageKm.set(1);
		getRisetKmData($pageKm, $ministryKm).then((res) => {
			maxPageKm.set(res.data.totalPages);
			itemRisetKm.set(res.data.results);
		});
	});
</script>

<svelte:head>
	<title>Riset | GO DATA</title>
	<meta name="description" content="Data Riset GO Data Risbang BEM KM IPB" />
</svelte:head>

<OrgHeroBannerRiset />
<OrgListRiset {itemRisetKm} />
