<script lang="ts">
	export let type: string = 'button';
	export let variant: string = 'primary';
	export let state: string = '';
	export let iconPosition: string = 'right';
	export let size: string = '';
	export let full: boolean = false;
	export let _class: string = '';
	export let iconSize: string = '24';

	if (!iconSize.length) {
		switch (size) {
			case 'very-small':
				iconSize = '18';
				break;
			case 'small':
				iconSize = '24';
				break;
			default:
				break;
		}
	}

	// Icons by svelte-feather-icons
	export let icon: any;

	// Check variant of button
	variant = variant === 'barebone' ? '' : `btn-${variant} ${variant}-state`;

	// Check state button is defined or not
	if (state.length) variant = `${variant} ${state}-state`;

	// Check button size
	if (size.length) variant = `btn-${size} ${variant}`;

	// Check width is full
	if (full) variant = `w-full ${variant}`;

	// Check additional classes from another component
	if (_class.length) variant = `${variant} ${_class}`;
</script>

{#if icon !== null && iconPosition === 'right'}
	<button on:click {type} class={variant} {...$$restProps}>
		<slot />
		<svelte:component this={icon} size={iconSize} class="pl-1" />
	</button>
{:else if iconPosition === 'left'}
	<button on:click {type} class={variant} {...$$restProps}>
		<svelte:component this={icon} size={iconSize} class="pr-1" />
		<slot />
	</button>
{:else}
	<button on:click {type} class={variant} {...$$restProps}>
		<slot />
		<svelte:component this={icon} size={iconSize} />
	</button>
{/if}

<style>
	button {
		@apply flex items-center justify-center py-3 px-8 rounded-full uppercase font-medium enabled:hover:transition-all focus:transition-colors disabled:opacity-75;
	}

	.btn-small {
		@apply text-xs py-2 px-6 tracking-wide;
	}

	.btn-very-small {
		@apply text-[0.6rem] tracking-wide py-1 px-3;
	}

	.btn-items-center {
		@apply bg-secondary text-white enabled:hover:transition-colors enabled:hover:drop-shadow-lg enabled:active:bg-secondary-darker;
	}

	.btn-primary {
		@apply bg-secondary text-white enabled:active:bg-secondary-darker;
	}

	.primary-state {
		@apply enabled:hover:transition-colors enabled:hover:drop-shadow-lg;
	}

	.btn-secondary {
		@apply border-2 border-primary text-primary;
	}

	.secondary-state {
		@apply enabled:hover:bg-primary/10  enabled:active:bg-primary/30 enabled:active:border-primary/90;
	}
</style>
