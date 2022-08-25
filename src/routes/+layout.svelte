<script context="module">
	import { onMount } from 'svelte';

	import OrgLoadingScreen from '$lib/components/organism/loading/OrgLoadingScreen.svelte';
	import OrgFooter from '$lib/components/organism/footer/OrgFooter.svelte';
	import OrgNavbar from '$lib/components/organism/navbar/OrgNavbar.svelte';

	import { loading, formData } from '$lib/store';
	import { getFormData } from '$lib/_api';

	import '../app.css';
	import { page } from '$app/stores';
</script>

<script>
	// TODO: Add loading container when load component

	onMount(async () => {
		if ($formData._id === '')
			getFormData().then((res) => {
				formData.set(res.data);
				console.log(res.data);
				loading.set(false);
			});
	});
</script>

{#if $loading}
	<OrgLoadingScreen />
{/if}

<main class:hidden={$loading} class:main={!$loading}>
	<OrgNavbar />
	<slot />
	<OrgFooter />
</main>

<style>
	.main {
		@apply relative flex flex-col relative min-h-screen justify-between;
	}
</style>
