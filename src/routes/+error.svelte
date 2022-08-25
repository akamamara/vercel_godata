<script>
	import { page } from '$app/stores';
	import AtomLink from '$lib/components/atom/link/AtomLink.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import { error } from '@sveltejs/kit';
	import { element } from 'svelte/internal';

	const imgClass =
		'mx-auto h-[13rem] sm:h-[16rem] md:h-[20rem] mb-4 object-scale-down object-center select-none';

	console.log($page);
</script>

<section>
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
	<div class="main-container text-center">
		<div class="my-4">
			<AtomTextHeading type="title">Ouch!</AtomTextHeading>
			<AtomTextHeading element="h2" type="title-subsection">Ada masalah!</AtomTextHeading>
		</div>
		<div>
			{#if $page.status === 404}
				<AtomTextBody>
					Halaman tidak ditemukan, silakan navigasi ke halaman lain melalui <i>navigation bar</i>.
				</AtomTextBody>
			{:else}
				<AtomTextBody size="big">
					{$page.error?.name} <strong class="text-primary">{$page.status}</strong>
				</AtomTextBody>
				<AtomTextBody>
					{$page.error?.name + ' ' + $page.error?.message}
				</AtomTextBody>
			{/if}
		</div>
	</div>
	<div class="mt-6 text-primary w-fit mx-auto">
		<AtomLink href="/">Kembali ke halaman utama</AtomLink>
	</div>
</section>

<style>
	section {
		@apply relative mt-[6.25rem] mb-12 h-full w-fit mx-auto;
	}
	.overlay-image {
		@apply absolute top-0 left-0 bg-secondary w-full h-[13rem] sm:h-[16rem] md:h-[20rem] z-[5] mix-blend-color select-none;
	}
</style>
