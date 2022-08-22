<script context="module">
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import { ArrowRightIcon } from 'svelte-feather-icons';
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
			on:click
			class="flex py-2 px-4 items-center w-full first:rounded-tr-lg first:rounded-tl-lg first:mt-[-1px] first:pt-[9px] last:mb-[-1px] last:pb-[9px] last:rounded-br-lg last:rounded-bl-lg hover:text-black hover:bg-white/80"
		>
			<AtomTextBody>
				{item.title}
			</AtomTextBody>
			<div class="grow" />
			<ArrowRightIcon size="16" />
		</button>
	{/each}
</div>
