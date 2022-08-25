<script>
	import LogoGoDataIjo from '$lib/logo/LogoGoDataIjo.svelte';
</script>

<section name="loading-screen">
	<div class="relative center">
		<div class="ping" />
		<div class="background-logo">
			<span class="logo">
				<LogoGoDataIjo size={(48).toString()} />
			</span>
		</div>
	</div>
</section>

<style>
	section {
		@apply relative flex flex-col items-center justify-center bg-white-var h-screen w-screen;
	}

	.ping {
		@apply absolute inline-flex animate-ping z-0 bg-primary/30 rounded-full w-14 h-14;
	}

	.background-logo {
		@apply absolute inline-flex center z-10 bg-primary/20 rounded-full w-[72px] h-[72px];
	}

	.logo {
		@apply animate-spin z-20 text-primary h-12 w-12;
	}

	.center {
		@apply flex justify-center items-center;
	}
</style>
