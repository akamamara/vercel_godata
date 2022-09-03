<script>
	export let element = 'p';
	export let _class = '';
	export let size = 'normal';
</script>

<svelte:element this={element} class="body-text {size} {_class}">
	<slot />
</svelte:element>

<style>
	@tailwind components;
	@layer components {
		.body-text {
			@apply opacity-[.85] leading-relaxed whitespace-normal;
		}

		.extra-big {
			@apply text-[1.325rem];
		}

		.big {
			@apply text-xl;
		}

		.normal {
			@apply text-base;
		}

		.small {
			@apply text-sm;
		}
	}
</style>
