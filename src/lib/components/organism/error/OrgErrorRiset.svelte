<script context="module">
	import AtomChip from '$lib/components/atom/chip/AtomChip.svelte';
	import LogoGoDataIjo from '$lib/logo/LogoGoDataIjo.svelte';
</script>

<script>
	export let title = '';
	const imgClass = 'mx-auto h-[11rem] mb-4 object-scale-down object-center select-none';
</script>

<div class="card-error">
	<div class="card-error-header">
		<LogoGoDataIjo size="32" fill="#2b6a66" />
		<AtomChip _class="ml-2 bg-secondary text-white">
			<h3><b>{title}</b></h3>
		</AtomChip>
	</div>
	<hr />
	<div class="relative p-2">
		<div class="overlay-image" />
		<picture>
			<source
				srcset="/images/errorRiset.webp"
				type="image/webp"
				alt="Illustration for 404 not found"
				class={imgClass}
			/>
			<img src="/images/errorRiset.png" alt="Illustration for 404 not found" class={imgClass} />
		</picture>
		<slot />
	</div>
</div>

<style>
	.card-error {
		@apply mt-8 mb-4 sm:mt-12 mx-auto w-[80%] sm:w-[24rem] max-w-full bg-white flex flex-col space-y-2 items-center justify-center text-black rounded-lg py-4 drop-shadow-lg text-center;
	}

	.card-error-header {
		@apply inline-flex mb-2;
	}

	hr {
		@apply border-t border-[#eaeaea] w-full;
	}

	.overlay-image {
		@apply absolute top-0 left-0 bg-secondary w-full h-[11rem] z-[5] mix-blend-color select-none;
	}
</style>
