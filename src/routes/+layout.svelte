<script context="module">
	import OrgFooter from '$lib/components/organism/footer/OrgFooter.svelte';
	import OrgNavbar from '$lib/components/organism/navbar/OrgNavbar.svelte';

	import '../app.css';
</script>

<script>
	// TODO: Add loading container when load component
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
