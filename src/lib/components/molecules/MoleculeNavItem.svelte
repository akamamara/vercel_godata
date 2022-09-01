<script>
	import AtomLink from '../atom/link/AtomLink.svelte';
	export let items = [];
</script>

<ol class="navitem">
	{#each items as item}
		<li class={item.smOnly ? 'block md:hidden' : 'block'}>
			<AtomLink href={item.link} on:click>
				{item.title}
			</AtomLink>
		</li>
	{/each}
</ol>

<style>
	.navitem {
		@apply flex flex-col md:flex-row w-full justify-end;
	}
	.navitem li {
		@apply p-4 text-primary;
	}
</style>
