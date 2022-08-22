<script>
	export let element = 'p';
	export let _class = '';
	export let size = 'normal';
</script>

{#if size == 'small'}
	<svelte:element this={element} class="body-text small {_class}">
		<slot />
	</svelte:element>
{:else if size == 'normal'}
	<svelte:element this={element} class="body-text normal {_class}">
		<slot />
	</svelte:element>
{:else}
	<svelte:element this={element} class="body-text {_class}">
		<slot />
	</svelte:element>
{/if}

<style>
	@tailwind components;
	@layer components {
		.body-text {
			@apply opacity-90 leading-relaxed;
		}

		.normal {
			@apply text-base;
		}

		.small {
			@apply text-sm;
		}
	}
</style>
