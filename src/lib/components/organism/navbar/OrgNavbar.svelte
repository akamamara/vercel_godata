<script context="module">
	import { goto } from '$app/navigation';

	import MoleculeNavItem from '$lib/components/molecules/MoleculeNavItem.svelte';
	// import MoleculeGoDataLogo from '$lib/components/molecules/logo/MoleculeGoDataLogo.svelte';
	import LogoGoDataIjo from '$lib/logo/LogoGoDataIjo.svelte';

	import { MenuIcon, XIcon } from 'svelte-feather-icons';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
</script>

<script>
	const items = [
		{
			title: 'Beranda',
			link: '/',
			smOnly: true
		},
		{
			title: 'Riset',
			link: '/riset',
			smOnly: false
		},
		{
			title: 'Database',
			link: '/database',
			smOnly: false
		},
		{
			title: 'Website BEM KM',
			link: 'https://bemkmipb.org',
			smOnly: false
		},
		{
			title: 'Tentang',
			link: '/tentang',
			smOnly: false
		}
	];

	let menuClicked = false;
	let Viewport;
	let mdView;
	$: mdView = false;
	$: if (mdView) menuClicked = false;

	onMount(async () => {
		await import('svelte-viewport-info').then((module) => (Viewport = module.default));

		document.addEventListener('click', function handleClickOutsideBox(event) {
			const blocker = document.getElementById('blocker');

			if (blocker?.contains(event.target) && menuClicked) {
				menuClicked = false;
			}
		});
	});
</script>

<svelte:body
	on:viewportchanged={() => {
		mdView = Viewport.Width >= 768 ? true : false;
	}} />

<div class="fixed w-full h-fit top-[1rem] z-[48]">
	{#if menuClicked}
		<div class:blocked={menuClicked == true} id="blocker" />
		<nav
			in:fly={{ x: 200, duration: 300 }}
			out:fly={{ x: 200, duration: 300 }}
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

	<div class="navbar nav-container">
		<div class="logo" on:click={() => goto('/')}>
			<!-- <MoleculeGoDataLogo height={8} /> -->
			<LogoGoDataIjo size={mdView ? '48' : '32'} />
		</div>
		{#if !mdView}
			<div class="grow" />
		{/if}
		<button
			type="button"
			class="text-primary z-50 md:hidden"
			on:click={() => (menuClicked = !menuClicked)}
		>
			<MenuIcon size="28" />
		</button>
		<nav class="hidden md:block">
			<MoleculeNavItem {items} />
		</nav>
	</div>
</div>

<style>
	.navbar {
		@apply sticky flex flex-row items-center py-1 px-8 border-2 border-primary rounded-full bg-white-var/80 backdrop-blur-md top-4 w-[95%] md:mx-auto md:justify-between h-14 md:h-12 md:h-auto;
	}

	.navbar button {
		@apply z-50;
	}

	/* TODO: Make mobilenav when on top container not push another container */
	.mobilenav {
		@apply z-[49] absolute right-0 top-[-1rem] md:hidden min-h-screen w-[65%] bg-white px-3.5 pt-7 flex flex-col items-end text-right drop-shadow-lg md:relative md:top-0 md:right-0 md:block md:h-fit md:w-fit md:bg-transparent md:drop-shadow-none md:p-0 md:drop-shadow-none transition-all;
	}

	.mobilenav button {
		@apply m-3 mb-16;
	}

	.logo {
		@apply flex flex-row items-center justify-center text-[2rem] text-primary font-bold pl-0 sm:pl-3 cursor-pointer;
	}
</style>
