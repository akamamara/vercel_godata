<script context="module">
	import { page } from '$app/stores';
	import { ArrowRightIcon } from 'svelte-feather-icons';

	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import { onClickRefer } from '$lib/utils/buttonUtils';
	import { loadingRiset } from '$lib/store/risetStore';
</script>

<script>
	export let data = [
		{
			_id: '',
			ministry: '',
			title: '',
			description: '',
			researcher: '',
			date: '',
			report: '',
			__v: 0
		}
	];
</script>

<div class="grid grid-cols-1 border rounded-lg divide-y">
	{#each data as item}
		<button
			type="button"
			on:click={() => onClickRefer(`/${$page.routeId}/${item._id}`, false)}
			class={$loadingRiset ? 'animate-pulse bg-white/10' : ''}
		>
			{#if !$loadingRiset}
				<AtomTextBody>
					{item.title}
				</AtomTextBody>
			{:else}
				<div class="w-[90%] rounded-full bg-white/30 h-4 my-1" />
			{/if}
			<div class="grow" />
			<ArrowRightIcon size="16" />
		</button>
	{/each}
</div>

<style>
	button {
		@apply flex py-2 px-4 items-center w-full first:rounded-tr-lg first:rounded-tl-lg first:mt-[-1px] first:pt-[9px] last:mb-[-1px] last:pb-[9px] last:rounded-br-lg last:rounded-bl-lg hover:text-black hover:bg-white/80;
	}
</style>
