<script context="module">
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';
	import MoleculeGoDataLogo from '$lib/components/molecules/logo/MoleculeGoDataLogo.svelte';

	import { ChevronRightIcon } from 'svelte-feather-icons';

	import heroBanner from '$lib/assets/homeBanner.svg';
	import { onClickRefer } from '$lib/utils/buttonUtils';
	import { formData } from '$lib/store';
</script>

<div class="home-banner">
	<div class="home-banner-body">
		<AtomTextBody>
			<strong>Powered by BEM KM IPB</strong>
		</AtomTextBody>
		<MoleculeGoDataLogo />
		<AtomTextBody>
			GODATA merupakan sebuah portal informasi yang berisikan data demografis, kemahasiswaan, dan
			pergerakan Mahasiswa Institut Pertanian Bogor untuk mewujudkan BEM KM IPB based on data
			driven.
		</AtomTextBody>
	</div>
	<div class="home-illustration">
		<img src={heroBanner} alt="People scoping through something" />
	</div>
</div>

<div class="home-action">
	<AtomButton
		variant="secondary"
		icon={ChevronRightIcon}
		on:click={() => onClickRefer($formData.survey)}>Isi Survei Sekarang!</AtomButton
	>
	<AtomButton
		variant="secondary"
		icon={ChevronRightIcon}
		on:click={() => onClickRefer($formData.research)}>Bagikan risetmu!</AtomButton
	>
</div>

<style>
	.home-banner {
		@apply grid grid-cols-1 h-fit text-primary justify-items-center	md:grid-cols-2 py-6 md:py-0 md:items-center md:justify-center;
	}

	.home-illustration {
		@apply row-start-1 w-fit max-w-lg justify-center md:col-start-2 md:row-start-1;
	}

	.home-illustration {
		@apply w-[95%] sm:w-[70%] md:w-[100%] md:h-[82%];
	}

	.home-illustration img {
		@apply object-cover w-full h-full;
	}

	.home-banner-body {
		@apply row-start-2 md:col-start-1 md:row-start-1;
	}

	.home-action {
		@apply grid grid-cols-1 gap-3 justify-center items-center mt-4 md:mt-0 sm:grid-cols-2 sm:w-fit sm:mx-auto;
	}
</style>
