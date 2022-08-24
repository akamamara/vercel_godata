<script>
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import LogoGoDataIjo from '$lib/logo/LogoGoDataIjo.svelte';
</script>

<section class="relative flex flex-col items-center justify-center">
	<div class="relative center">
		<div class="absolute inline-flex animate-ping z-0 bg-primary/30 rounded-full w-14 h-14" />
		<div class="absolute inline-flex center z-10 bg-primary/20 rounded-full w-[72px] h-[72px]" />
		<span class="animate-spin z-20 text-primary" style="height:48px; width:48px;">
			<LogoGoDataIjo size={(48).toString()} />
		</span>
	</div>
</section>

<style>
	section {
		@apply bg-white-var h-screen w-screen;
	}

	.center {
		@apply flex justify-center items-center;
	}
</style>
