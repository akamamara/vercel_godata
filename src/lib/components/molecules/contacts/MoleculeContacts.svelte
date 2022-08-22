<script>
	export let icon;
	export let size = '16';
	export let offset = 5.5;
	export let color = 'white';
</script>

<div class="flex items-start text-{color}">
	<div class="relative mr-3" style="top: {offset / 16}rem">
		<svelte:component this={icon} {size} />
	</div>
	<slot />
</div>
