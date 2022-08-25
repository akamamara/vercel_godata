<script context="module">
	import { onMount } from 'svelte';

	import OrgAboutUsBanner from '$lib/components/organism/aboutUs/OrgAboutUsBanner.svelte';
	import OrgAboutUsListTeam from '$lib/components/organism/aboutUs/OrgAboutUsListTeam.svelte';

	import { getAboutDescription, getListDivisionPerson } from '$lib/_api';
	import { loading, aboutDescData, aboutPersonData } from '$lib/store';
	import { get } from 'svelte/store';
</script>

<script>
	onMount(async () => {
		loading.set(true);
		Promise.all([getAboutDescription(), getListDivisionPerson()])
			.then((values) => {
				aboutDescData.set(values[0].data);

				let data = values[1].data;
				let divisionList = {};
				data.forEach((item) => {
					divisionList[item.division.toString()] = data.filter(
						(dataItem) => dataItem.division == item.division
					);

					data = data.filter((dataItem) => dataItem.division != item.division);
				});
				aboutPersonData.set(divisionList);
			})
			.finally(() => loading.set(false));
	});

	$: console.log('aboutDescData:', $aboutDescData);
	$: console.log('aboutPersonData:', $aboutPersonData);
</script>

<svelte:head>
	<title>Apa itu GODATA? | GO DATA</title>
	<meta name="description" content="Anggota GO Data Risbang BEM KM IPB" />
</svelte:head>

{#if !$loading}
	<section name="hero-banner" class="main-container pt-[4.75rem]">
		<OrgAboutUsBanner description={$aboutDescData[0].description} />
	</section>
	<OrgAboutUsListTeam divisionList={$aboutPersonData} />
{/if}
