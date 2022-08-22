<script>
	import LogoGoDataIjo from '$lib/logo/LogoGoDataIjo.svelte';

	export let height = 12;
	export let color = 'primary';

	$: logoHeight = height * 4;
	$: textHeight = logoHeight + logoHeight * 0.16;
</script>

<span class="godata-logo text-{color}" style="font-size:{textHeight}px;">
	G
	<span class="fill-{color} mx-[2px]" style="height:{logoHeight}px; width:{logoHeight}px;">
		<LogoGoDataIjo size={logoHeight.toString()} />
	</span>
	DATA
</span>

<style>
	.godata-logo {
		@apply flex flex-row items-center font-bold select-none;
	}
</style>
