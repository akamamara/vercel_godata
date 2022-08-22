<script context="module">
	import { onMount } from 'svelte';

	import AtomLink from '$lib/components/atom/link/AtomLink.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import MoleculeContacts from '$lib/components/molecules/contacts/MoleculeContacts.svelte';
	import MoleculeGoDataLogo from '$lib/components/molecules/logo/MoleculeGoDataLogo.svelte';

	import LogoBemKm from '$lib/logo/LogoBemKm.svelte';
	import LogoRisbangBemKm from '$lib/logo/LogoRisbangBemKm.svelte';
	import { InstagramIcon, MailIcon, PhoneIcon } from 'svelte-feather-icons';
</script>

<script>
	function checkViewportLogo(width = 0) {
		if (width >= 640) return 12;
		if (width >= 1024) return 14;
		return 9;
	}

	let Viewport;
	let wLogoGo;
	$: wLogoGo = 9;

	let moduleViewport;
	onMount(async () => {
		moduleViewport = await import('svelte-viewport-info');
	});

	$: {
		if (moduleViewport != undefined) {
			Viewport = moduleViewport.default;
			wLogoGo = checkViewportLogo(Viewport.Width);
		}
	}
</script>

<svelte:body
	on:viewportchanged={() => {
		wLogoGo = checkViewportLogo(Viewport.Width);
	}} />

<footer>
	<div class="main-container">
		<div class="logo-container">
			<MoleculeGoDataLogo color="white" height={wLogoGo} />
			<div class="flex">
				<div
					class="fill-white"
					style="width: {(wLogoGo * 3.5) / 9}rem; height: {(wLogoGo * 3.5) / 9}rem"
				>
					<LogoRisbangBemKm />
				</div>
				<div
					class="fill-white"
					style="width: {(wLogoGo * 3.5) / 9}rem; height: {(wLogoGo * 3.5) / 9}rem"
				>
					<LogoBemKm />
				</div>
			</div>
		</div>

		<hr class="border-0.5 border-white w-full my-3" />

		<div class="py-4 grid grid-cols-1 gap-1">
			<MoleculeContacts icon={PhoneIcon}>
				<div class="flex flex-col">
					<AtomTextBody>Khairani Cahyoja Utami</AtomTextBody>
					<AtomTextBody>
						<AtomLink href="tel:082278234713">082278234713</AtomLink>
					</AtomTextBody>
				</div>
			</MoleculeContacts>

			<MoleculeContacts icon={MailIcon}>
				<AtomTextBody>
					<AtomLink href="mailto:risbang.bemkmipb@gmail.com">risbang.bemkmipb@gmail.com</AtomLink>
				</AtomTextBody>
			</MoleculeContacts>

			<MoleculeContacts icon={InstagramIcon}>
				<AtomTextBody>
					<AtomLink href="https://www.instagram.com/go_data/">@go_data</AtomLink>
				</AtomTextBody>
			</MoleculeContacts>
		</div>

		<div class="reservedby">
			<AtomTextBody _class="font-bold">
				Biro Riset dan Pengembangan
				<br /> BEM KM IPB 2022 Kabinet Lamansua
			</AtomTextBody>
			<AtomTextBody _class="mt-1">Copyright © GODATA 7.0</AtomTextBody>
		</div>
	</div>
</footer>

<style>
	footer {
		@apply bg-secondary min-h-[8rem] py-6;
	}

	.logo-container {
		@apply flex justify-between;
	}

	.reservedby {
		@apply text-white text-center py-4 mt-6;
	}
</style>
