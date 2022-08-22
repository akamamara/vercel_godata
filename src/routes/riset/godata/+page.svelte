<script context="module">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import OrgHeroBannerRiset from '$lib/components/organism/riset/OrgHeroBannerRiset.svelte';
	import OrgListRiset from '$lib/components/organism/riset/OrgListRiset.svelte';

	import { getRisetGoData } from '$lib/_api';
	import { itemRisetGoData } from '$lib/store';
	import { resetPaginationGoData, updateStateTypeRiset } from '$lib/utils/risetUtils';
</script>

<script>
	updateStateTypeRiset($page.routeId?.toString().split('/').pop());
	onMount(async () => {
		resetPaginationGoData();
		getRisetGoData().then((res) => itemRisetGoData.set(res.data.results));
	});
</script>

<svelte:head>
	<title>Riset | GO DATA</title>
	<meta name="description" content="Data Riset GO Data Risbang BEM KM IPB" />
</svelte:head>

<OrgHeroBannerRiset />
<OrgListRiset {itemRisetGoData} />
