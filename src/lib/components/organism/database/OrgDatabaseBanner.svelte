<script>
	import databaseBanner from '$lib/assets/databaseBanner.svg';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import { element } from 'svelte/internal';
</script>

<div class="home-banner">
	<div class="grid grid-cols-1 gap-3">
		<AtomTextHeading element="h1" style="title">Database</AtomTextHeading>
		<AtomTextBody
			>Pengumpulan berbagai macam database yang berguna bagi civitas IPB. Hasil dari database ini
			diharapkan dapat dimanfaatkan oleh seluruh KM IPB dengan bijak. Database diperoleh dari
			stakeholder/instansi yang berada di lingkungan kampus IPB.</AtomTextBody
		>
	</div>
	<img src={databaseBanner} alt="People standing talked to each other" loading="lazy" />
</div>

<style>
	.home-banner {
		@apply grid grid-cols-1 text-primary justify-items-center gap-4 md:gap-8 md:grid-cols-2 pt-[6.25rem] pb-4  md:items-center md:justify-center;
	}

	.home-banner img {
		@apply row-start-1 w-[90%] sm:w-[60%] md:w-full my-8 max-w-lg justify-center md:col-start-2 md:row-start-1;
	}
</style>
