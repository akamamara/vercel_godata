<script context="module">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';

	import { stateGoData, stateKm } from '$lib/store';
	import { getDate } from '$lib/utils/dateUtils';
	import { onClickRefer } from '$lib/utils/buttonUtils';
	import { page } from '$app/stores';
	import { updateStateTypeRiset } from '$lib/utils/risetUtils';
</script>

<script>
	export let dataGoData = {
		_id: '',
		year: 2022,
		title: '',
		description: '',
		responden: 0,
		report: '',
		image: '',
		__v: 0
	};

	export let dataKm = {
		_id: '',
		ministry: '',
		title: '',
		description: '',
		researcher: '',
		date: '2022-01-01T00:00:00.000Z',
		report: '',
		__v: 0
	};

	updateStateTypeRiset($page.routeId?.split('/')[1]);

	const dummyDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue tristique mi vel fermentum. Cras laoreet facilisis risus, ut porttitor risus porttitor eget. Donec eget leo quis augue posuere cursus tempus sed lectus. Aliquam egestas elementum euismod. Integer pulvinar facilisis lectus rutrum suscipit. Phasellus id vehicula arcu. Proin vulputate diam nulla, ut aliquet nisl ultricies sit amet. Ut quam felis, porttitor quis iaculis eu, molestie at tellus. Sed vitae quam hendrerit, finibus augue ut, egestas lorem. Pellentesque dignissim malesuada lacus, vitae finibus urna.\n Mauris hendrerit magna sit amet ex sagittis aliquam at id velit. Donec turpis ipsum, volutpat ac volutpat a, tincidunt nec nisi. Morbi non iaculis est. Cras accumsan dictum nibh, id aliquam augue porta mollis. Phasellus viverra urna non pellentesque congue. Aliquam lacinia, lacus vel pretium malesuada, tortor est maximus dui, sed ultricies libero dolor id dui. Aenean non molestie tellus. Suspendisse potenti. \n Morbi posuere at sem sit amet eleifend. Fusce pulvinar turpis at nibh ultrices pellentesque. Sed mollis, tellus vitae imperdiet accumsan, massa augue ultrices orci, vitae dapibus lectus libero ut ante. Ut eu aliquet mi, eu venenatis justo. Proin placerat massa non nunc pulvinar tristique. Aliquam vestibulum sagittis nisl eget ultricies. Suspendisse augue est, tempus eu consectetur ut, dignissim quis mauris. Proin diam dolor, sagittis eu augue a, suscipit fringilla justo. Nulla lobortis fringilla finibus.';

	const btnClasses = 'bg-primary text-white enabled:active:bg-primary-darker';
</script>

{#if $stateGoData}
	<div class="image-godata">
		<img src={dataGoData.image} alt="Ilustration of {dataGoData.title}" />
	</div>
{/if}

<section>
	<div class="main-container article-container">
		<div class="article-title">
			<AtomTextHeading element="h1">
				{$stateGoData ? dataGoData.title : dataKm.title}
			</AtomTextHeading>
			<AtomTextBody>
				{$stateKm ? dataKm.researcher : `${dataGoData.responden} responden`}
			</AtomTextBody>
			{#if $stateKm}
				<AtomTextBody>{getDate(dataKm.date)}</AtomTextBody>
			{/if}
		</div>
		<div class="article-content">
			{#each stateGoData ? dummyDesc.split('\n') : dataKm.description.split('\n') as item}
				<AtomTextBody>{item}</AtomTextBody>
			{/each}
		</div>
		<div class="grow" />
		<div class="btn-action">
			{#if $stateGoData}
				<AtomButton
					on:click={() => onClickRefer(dataGoData.report)}
					variant="barebone"
					state="primary"
					_class={btnClasses + ' col-span-2'}
				>
					Buka file
				</AtomButton>
			{:else}
				<AtomButton
					on:click={() => onClickRefer('/database')}
					variant="barebone"
					state="primary"
					_class={btnClasses}
				>
					Dashboard
				</AtomButton>
				<AtomButton
					on:click={() => onClickRefer(dataKm.report)}
					variant="barebone"
					state="primary"
					_class={btnClasses}
				>
					Laporan
				</AtomButton>
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		@apply bg-white-var pt-[9rem] pb-14 flex flex-col justify-start grow;
	}

	.image-godata {
		@apply relative h-fit w-full mb-[-4rem];
	}

	.image-godata img {
		@apply h-[24rem] w-full object-cover object-top;
	}

	.image-godata::before {
		content: '';
		@apply absolute bottom-0 left-0 z-[45] w-full h-[60%] bg-gradient-to-t from-white-var;
	}

	.article-container {
		@apply flex flex-col justify-between grow h-full;
	}

	.article-title {
		@apply text-center w-full mb-8;
	}

	.article-content {
		@apply my-8 opacity-80 grid grid-cols-1 gap-3;
	}

	.btn-action {
		@apply grid grid-cols-2 gap-2 w-fit mx-auto;
	}
</style>
