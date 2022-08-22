<script>
	import { goto } from '$app/navigation';
	import { stateGoData, stateKm } from '$lib/store';

	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';

	import risetBanner from '$lib/assets/risetBanner.webp';
	import risetBannerPng from '$lib/assets/risetBanner.png';
	import { onMount } from 'svelte';

	const onClickGodataBtn = () => {
		stateGoData.set(true);
		stateKm.set(false);
		redirect();
	};

	const onClickKmBtn = () => {
		stateGoData.set(false);
		stateKm.set(true);
		redirect();
	};

	const redirect = () => {
		const url = `/riset/${$stateKm ? 'km' : 'godata'}`;
		goto(url, { noscroll: true });
	};

	let Viewport;
	$: smView = false;
	$: if (Viewport != undefined) smView = Viewport.Width >= 640 ? true : false;

	onMount(async () => {
		const moduleViewport = await import('svelte-viewport-info');
		Viewport = moduleViewport.default;
	});
</script>

<svelte:body
	on:viewportchanged={() => {
		smView = Viewport.Width >= 640 ? true : false;
	}} />

<section name="hero-banner" class="main-container">
	<div class="home-banner">
		<div class="home-banner-body">
			<AtomTextHeading type="title" _class="mb-2">Riset</AtomTextHeading>
			<AtomTextBody>
				Riset dan pengumpulan data dilakukan untuk mengetahui informasi, kondisi, serta permasalahan
				yang ada di kampus IPB, Publikasi hasil riset GODATA maupun KM IPB dapat digunakan
				seluas-luasnya oleh KM IPB hingga masyarakat.
			</AtomTextBody>
			<div class="home-action">
				{#if smView}
					{#if $stateGoData}
						<AtomButton variant="primary" on:click={() => onClickGodataBtn()}
							>Riset GODATA</AtomButton
						>
					{:else}
						<AtomButton variant="secondary" on:click={() => onClickGodataBtn()}
							>Riset GODATA</AtomButton
						>
					{/if}

					{#if $stateKm}
						<AtomButton variant="primary" on:click={() => onClickKmBtn()}>Riset KM</AtomButton>
					{:else}
						<AtomButton variant="secondary" on:click={() => onClickKmBtn()}>Riset KM</AtomButton>
					{/if}
				{/if}
			</div>
		</div>
		<div class="home-illustration">
			<picture>
				<source srcset={risetBanner} type="image/webp" />
				<img src={risetBannerPng} alt="Welcome" />
			</picture>
		</div>
	</div>

	{#if !smView}
		<div class="home-action">
			{#if $stateGoData}
				<AtomButton variant="primary" on:click={() => onClickGodataBtn()}>Riset GODATA</AtomButton>
			{:else}
				<AtomButton variant="secondary" on:click={() => onClickGodataBtn()}>Riset GODATA</AtomButton
				>
			{/if}

			{#if $stateKm}
				<AtomButton variant="primary" on:click={() => onClickKmBtn()}>Riset KM</AtomButton>
			{:else}
				<AtomButton variant="secondary" on:click={() => onClickKmBtn()}>Riset KM</AtomButton>
			{/if}
		</div>
	{/if}
</section>

<style>
	section {
		@apply pt-[6.5rem] pb-6 mx-auto;
	}
	.home-banner {
		@apply grid grid-cols-1 text-primary justify-items-center	md:grid-cols-2 pt-6 sm:py-0 md:items-center md:justify-center;
	}

	.home-illustration {
		@apply row-start-1 w-[80%] max-w-[23rem] my-4 justify-center md:col-start-2 md:row-start-1;
	}

	.home-banner-body {
		@apply row-start-2 md:col-start-1 md:row-start-1;
	}

	.home-action {
		@apply grid grid-cols-1 gap-3 justify-center items-center pt-4 sm:grid-cols-2 sm:w-fit sm:mx-auto sm:gap-2 sm:pt-6 md:mx-0;
	}
</style>
