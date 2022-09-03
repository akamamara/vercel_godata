<script context="module">
	import OrgHeroBanner from '$lib/components/organism/homepage/OrgHeroBanner.svelte';
	import OrgNews from '$lib/components/organism/homepage/OrgNews.svelte';
	import { getFormData, getHomeNews } from '$lib/_api';
	import { onMount } from 'svelte';
	import { newsData, formData } from '$lib/store';
</script>

<script>
	$: loadingNews = true;
	onMount(async () => {
		Promise.all([await getFormData(), await getHomeNews()]).then((values) => {
			loadingNews = false;
			formData.set(values[0].data);
			newsData.set(values[1].data);
		});
	});
</script>

<svelte:head>
	<title>Beranda | GODATA</title>
	<meta name="description" content="Beranda godata Risbang BEM KM IPB" />
</svelte:head>

<section name="hero-banner" class="main-container pt-[4.75rem] pb-4">
	<OrgHeroBanner />
</section>

{#if !loadingNews}
	<OrgNews item={$newsData} />
{/if}
