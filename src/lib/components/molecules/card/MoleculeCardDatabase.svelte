<script context="module">
	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';

	import { onClickRefer } from '$lib/utils/buttonUtils';
</script>

<script>
	const btnDataStyle =
		'bg-white mb-2 text-secondary !font-bold	 enabled:hover:transition-colors enabled:hover:drop-shadow-lg enabled:active:bg-white-var';

	export let ilustration;
	export let multiLevel = false;
	export let actionTitleLevel = [''];
	export let dbName = '';
	export let actionList = [
		{
			title: '',
			href: ''
		}
	];
</script>

<div class="card-db">
	<div class="card-db-body">
		<div class="card-action">
			{#if !multiLevel}
				{#each actionList as item}
					<AtomButton
						variant="barebone"
						size="small"
						full
						on:click={() => onClickRefer(item.href)}
						_class={btnDataStyle}>{item.title}</AtomButton
					>
				{/each}
			{:else}
				{#each actionTitleLevel as titleLevel, i}
					<div>
						<div class="bg-white w-full rounded-full mb-3 py-2 my-4 text-center font-bold">
							<AtomTextBody _class="text-black">{titleLevel}</AtomTextBody>
						</div>
						<div class="grid grid-flow-col auto-cols-auto gap-2 my-2">
							{#each actionList[i] as item}
								<AtomButton
									variant="barebone"
									size="small"
									full
									on:click={(_) => onClickRefer(item.href)}
									_class={btnDataStyle}>{item.title}</AtomButton
								>
							{/each}
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="card-banner">
			<svelte:component this={ilustration} _class="h-[8rem]" />
			<AtomTextHeading type="title-subsection" element="h3" _class="text-white my-1"
				>{dbName}</AtomTextHeading
			>
		</div>
	</div>
</div>

<style>
	.card-db {
		@apply w-full bg-secondary rounded-lg p-6;
	}

	.card-db-body {
		@apply grid grid-cols-1 md:grid-cols-6 gap-4 items-center;
	}

	.card-action {
		@apply w-full md:col-span-3 md:row-start-1;
	}

	.card-banner {
		@apply w-fit flex flex-col text-center justify-center items-center mx-auto row-start-1 md:row-start-1 md:col-end-7 md:col-span-2;
	}
</style>
