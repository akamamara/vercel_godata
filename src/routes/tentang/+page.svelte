<script context="module">
	import { onMount } from 'svelte';

	import OrgAboutUsBanner from '$lib/components/organism/aboutUs/OrgAboutUsBanner.svelte';
	import OrgAboutUsListTeam from '$lib/components/organism/aboutUs/OrgAboutUsListTeam.svelte';

	import { getAboutDescription, getListDivisionPerson } from '$lib/_api';
	import { aboutDescData, aboutPersonData } from '$lib/store';
	import { get } from 'svelte/store';
</script>

<script>
	$: loading = true;
	onMount(async () => {
		Promise.all([getAboutDescription(), getListDivisionPerson()]).then((values) => {
			// aboutDescData.set(values[0].data);
			aboutPersonData.set(values[1].data);
			loading = false;
		});
	});

	$: console.log($aboutDescData);
	$: console.log($aboutPersonData);
</script>

<svelte:head>
	<title>Apa itu GODATA? | GO DATA</title>
	<meta name="description" content="Anggota GO Data Risbang BEM KM IPB" />
</svelte:head>

{#if !loading}
	<section name="hero-banner" class="main-container pt-[4.75rem]">
		<OrgAboutUsBanner description={$aboutDescData[0].description} />
	</section>
	<OrgAboutUsListTeam />
{/if}
