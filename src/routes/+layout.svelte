<script context="module">
	import OrgFooter from '$lib/components/organism/footer/OrgFooter.svelte';
	import OrgNavbar from '$lib/components/organism/navbar/OrgNavbar.svelte';
	import { formData } from '$lib/store';
	import { getFormData } from '$lib/_api';
	import { onMount } from 'svelte';

	import '../app.css';
</script>

<script>
	// TODO: Add loading container when load component
	onMount(async () => {
		if ($formData._id === '') getFormData().then((res) => formData.set(res.data));
	});
</script>

<main class="relative">
	<OrgNavbar />
	<slot />
	<OrgFooter />
</main>

<style>
	main {
		@apply flex flex-col relative min-h-screen justify-between;
	}
</style>
