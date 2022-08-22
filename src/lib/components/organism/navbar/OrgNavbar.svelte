<script context="module">
	import { goto } from '$app/navigation';

	import MoleculeNavItem from '$lib/components/molecules/MoleculeNavItem.svelte';
	import MoleculeGoDataLogo from '$lib/components/molecules/logo/MoleculeGoDataLogo.svelte';

	import { MenuIcon, XIcon } from 'svelte-feather-icons';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
</script>

<script>
	const items = [
		{
			title: 'Riset',
			link: '/riset'
		},
		{
			title: 'Database',
			link: '/database'
		},
		{
			title: 'Website BEM KM',
			link: 'https://bemkmipb.org'
		},
		{
			title: 'Tentang',
			link: '/tentang'
		}
	];

	let menuClicked = false;
	let Viewport;
	let smView = true;
	$: if (smView) menuClicked = false;

	onMount(async () => {
		await import('svelte-viewport-info').then((module) => (Viewport = module.default));
	});
</script>

<svelte:body
	on:viewportchanged={() => {
		smView = Viewport.Width >= 640 ? true : false;
	}} />

<div class="fixed w-full h-fit top-[1rem] z-[48]">
	{#if menuClicked}
		<nav
			in:fly={{ x: -200, duration: 300 }}
			out:fly={{ x: -200, duration: 300 }}
			class:mobilenav={menuClicked == true}
		>
			<div class="main-container">
				<button
					type="button"
					class="text-primary z-50 md:hidden"
					on:click={() => (menuClicked = !menuClicked)}
				>
					<XIcon />
				</button>
				<MoleculeNavItem
					{items}
					on:click={() => {
						setTimeout(function () {
							menuClicked = !menuClicked;
						}, 200);
					}}
				/>
			</div>
		</nav>
	{/if}

	<div class="navbar main-container">
		<button
			type="button"
			class="text-primary z-50 md:hidden"
			on:click={() => (menuClicked = !menuClicked)}
		>
			<MenuIcon />
		</button>
		<div class="logo" on:click={() => goto('/')}>
			<MoleculeGoDataLogo height={8} />
		</div>
		<nav class="hidden md:block">
			<MoleculeNavItem {items} />
		</nav>
	</div>
</div>

<style>
	.navbar {
		@apply sticky flex flex-row items-center py-1 px-8 border-2 border-primary rounded-full bg-white-var/80 backdrop-blur-md	top-4 w-[95%] md:mx-auto md:justify-between;
	}

	.navbar button {
		@apply z-50;
	}

	/* TODO: Make mobilenav when on top container not push another container */
	.mobilenav {
		@apply z-[49] absolute top-0 left-0 top-[-1rem] md:hidden min-h-screen w-[65%] bg-white px-2.5 pt-7 drop-shadow-lg md:relative md:top-0 md:left-0 md:block md:h-fit md:w-fit md:bg-transparent md:drop-shadow-none md:p-0 md:drop-shadow-none transition-all;
	}

	.mobilenav button {
		@apply m-3 mb-16;
	}

	.logo {
		@apply flex flex-row items-center justify-center text-[2rem] text-primary font-bold pl-3 cursor-pointer;
	}
</style>
