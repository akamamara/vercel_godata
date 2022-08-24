<script context="module">
	import { onMount } from 'svelte';

	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import MoleculeCardHome from '$lib/components/molecules/card/MoleculeCardHome.svelte';

	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import { get } from 'svelte/store';
	import { newsData } from '$lib/store';
</script>

<script>
	let Carousel;
	let Viewport;
	let carousel;

	$: maxCarousel = 0;

	export let item = get(newsData);

	onMount(async () => {
		import('svelte-viewport-info').then((module) => {
			Viewport = module.default;
			maxCarousel = Viewport.Width >= 640 ? 2 : 1;
		});

		import('svelte-carousel').then((module) => {
			Carousel = module.default;
		});
	});
</script>

<svelte:window />

<svelte:body
	on:viewportchanged={() => {
		maxCarousel = Viewport.Width >= 640 ? 2 : 1;
	}} />

<section name="highlight-news">
	<div class="overlay-bg" />
	<div class="carousel main-container">
		<AtomTextHeading element="h2" type="title-section" _class="text-white text-center pt-2 pb-6"
			>SOROTAN</AtomTextHeading
		>
		<div class="carousel-item">
			{#if maxCarousel > 1}
				<svelte:component this={Carousel} bind:this={carousel} arrows={false} particlesToShow={2}>
					{#each item as itemCard}
						<MoleculeCardHome {itemCard}>
							<AtomTextHeading
								element="h3"
								type="title-subheading"
								_class="text-white font-medium"
								slot="heading"
							>
								{itemCard.title}
							</AtomTextHeading>
							<AtomTextBody slot="body" _class="opacity-80">
								{itemCard.description}
							</AtomTextBody>
						</MoleculeCardHome>
					{/each}
				</svelte:component>
			{:else}
				<svelte:component this={Carousel} bind:this={carousel} arrows={false} particlesToShow={1}>
					{#each item as itemCard}
						<MoleculeCardHome {itemCard}>
							<AtomTextHeading
								element="h3"
								type="title-subheading"
								_class="text-white font-medium"
								slot="heading"
							>
								{itemCard.title}
							</AtomTextHeading>
							<AtomTextBody slot="body" _class="opacity-80">
								{itemCard.description}
							</AtomTextBody>
						</MoleculeCardHome>
					{/each}
				</svelte:component>
			{/if}
		</div>
	</div>
	<div class="carousel-action">
		<AtomButton
			icon={ChevronLeftIcon}
			variant="barebone"
			iconPosition="left"
			size="small"
			_class="bg-white"
			on:click={() => carousel.goToPrev()}
		>
			Prev
		</AtomButton>
		<AtomButton
			icon={ChevronRightIcon}
			variant="barebone"
			size="small"
			_class="bg-white"
			on:click={() => carousel.goToNext()}>Next</AtomButton
		>
	</div>
</section>

<style>
	section {
		@apply relative bg-primary w-full py-16 md:py-20 mt-6 flex flex-col items-center;
	}

	.overlay-bg::before {
		content: '';
		background: linear-gradient(
			180deg,
			#2b6a66 0%,
			rgba(76, 128, 124, 0.841922) 23%,
			rgba(251, 244, 241, 0) 95%
		);
		@apply z-[1] absolute top-[-1rem] left-0 h-[80%] w-full;
	}

	.overlay-bg {
		background-image: url('/images/ipbNight.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-origin: content-box;
		@apply z-0 absolute bottom-0 left-0 w-full h-[80%] opacity-30;
	}

	.carousel {
		@apply z-10 border border-white p-6 rounded-xl;
	}

	.carousel-item {
		@apply z-10 grid grid-cols-1 gap-6;
	}

	.carousel-action {
		@apply z-10 grid grid-cols-2 w-fit gap-3 pt-4;
	}
</style>
