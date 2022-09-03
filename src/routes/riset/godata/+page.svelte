<script context="module">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';

	import OrgHeroBannerRiset from '$lib/components/organism/riset/OrgHeroBannerRiset.svelte';
	import OrgListRiset from '$lib/components/organism/riset/OrgListRiset.svelte';

	import { getRisetGoData } from '$lib/_api';
	import { itemRisetGoData } from '$lib/store';
	import { resetPaginationGoData, updateStateTypeRiset } from '$lib/utils/risetUtils';
	import { limitGoData, loadMoreVisibility } from '$lib/store/risetStore';
</script>

<script>
	updateStateTypeRiset($page.routeId?.toString().split('/').pop());
	onMount(async () => {
		resetPaginationGoData();
		getRisetGoData().then((res) => {
			if (res.data.results.length < get(limitGoData)) {
				loadMoreVisibility.set(false);
			}
			itemRisetGoData.set(res.data.results);
		});
	});
</script>

<svelte:head>
	<title>Riset | GODATA</title>
	<meta name="description" content="Data Riset godata Risbang BEM KM IPB" />
</svelte:head>

<OrgHeroBannerRiset />
<OrgListRiset {itemRisetGoData} />
