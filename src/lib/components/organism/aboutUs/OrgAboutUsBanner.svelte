<script context="module">
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';

	import aboutUsBanner from '$lib/assets/aboutUsBanner.webp';
	import aboutUsBannerPng from '$lib/assets/aboutUsBanner.png';
	import { aboutDescData } from '$lib/store';
	import { get } from 'svelte/store';
</script>

<script>
	export let description = get(aboutDescData)[0].description;
</script>

<div class="home-banner">
	<div class="md:col-span-7 w-full">
		<AtomTextHeading _class="text-primary my-6">Apa itu GODATA?</AtomTextHeading>
		<div class="home-text">
			{#each description.split('\n') as data}
				<AtomTextBody>{data}</AtomTextBody>
			{/each}
		</div>
	</div>
	<div class="md:col-span-5 home-banner-picture">
		<picture>
			<source srcset={aboutUsBanner} type="image/webp" alt="Newsletter Images" />
			<img src={aboutUsBannerPng} alt="Newsletter Images" />
		</picture>
	</div>
</div>

<style>
	.home-banner {
		@apply grid grid-cols-1 text-primary justify-items-center gap-4 md:gap-8 md:grid-cols-12 py-10 md:items-center md:justify-center;
	}

	.home-text {
		@apply grid grid-cols-1 gap-3 w-full;
	}

	.home-banner-picture {
		@apply row-start-1 my-8 max-w-lg justify-center items-center md:col-start-1 md:row-start-1;
	}

	.home-banner img {
		@apply w-[75%] sm:w-[65%] md:w-[80%];
	}

	.home-banner img {
		@apply mx-auto;
	}
</style>
