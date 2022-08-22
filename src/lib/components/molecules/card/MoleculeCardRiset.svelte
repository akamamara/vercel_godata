<script context="module">
	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';
	import AtomChip from '$lib/components/atom/chip/AtomChip.svelte';
	import { onClickRefer } from '$lib/utils/buttonUtils';

	import { UsersIcon } from 'svelte-feather-icons';

	import { page } from '$app/stores';
</script>

<script>
	export let id = '';
	export let title = '';
	export let imgSrc = '';
	export let responden = 0;

	$: imgHeight = 11.25;
</script>

<div class="card">
	<!-- Cover Image -->
	<div class="card-image" style="height: {imgHeight}rem;">
		<img src={imgSrc} alt="Ilustration of research {title}" />
		<div class="chip-t-respondent">
			<AtomChip icon={UsersIcon} _class="bg-secondary text-white" size="small" iconPosition="left">
				{responden}
			</AtomChip>
		</div>
	</div>
	<!-- Body -->
	<div class="card-body">
		<!-- Title -->
		<div class="card-heading">
			<slot name="heading" />
		</div>
		<div class="card-content">
			<slot name="body" />
		</div>
		<div class="overlay-more">
			<AtomButton size="small" on:click={() => onClickRefer(`/${$page.routeId}/${id}`)}
				>Lainnya</AtomButton
			>
		</div>
	</div>
</div>

<style>
	.card {
		@apply flex flex-col items-center rounded-xl bg-white;
	}

	.card-image img {
		@apply object-cover w-full h-full rounded-xl;
	}

	.card-image {
		@apply relative w-full;
	}

	.card-body {
		@apply relative text-center;
	}

	.card-heading {
		@apply uppercase font-bold pt-4 pb-0;
	}

	.card-content {
		@apply relative text-ellipsis w-full px-3 pt-3 pb-6;
	}

	.card-content::before {
		content: '';
		@apply absolute bg-gradient-to-t from-white top-0 left-0 float-left h-full w-full z-[20] rounded-xl;
	}

	.overlay-more {
		@apply absolute bottom-3 left-0 float-left w-full flex items-end justify-center rounded-xl z-[30];
	}

	.chip-t-respondent {
		@apply absolute top-3 left-3 z-[30] w-fit h-auto;
	}
</style>
