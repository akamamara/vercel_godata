<script context="module">
	import { get } from 'svelte/store';
	import { ChevronRightIcon } from 'svelte-feather-icons';

	import { itemRisetGoData, itemRisetKm } from '$lib/store';
	import { formData, stateGoData, stateKm } from '$lib/store';

	import AtomButton from '$lib/components/atom/button/AtomButton.svelte';
	import AtomTextBody from '$lib/components/atom/typography/AtomTextBody.svelte';
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import MoleculeCardRiset from '$lib/components/molecules/card/MoleculeCardRiset.svelte';
	import MoleculeDropDown from '$lib/components/molecules/dropdown/MoleculeDropDown.svelte';
	import MoleculeListsRisetKm from '$lib/components/molecules/lists/MoleculeListsRisetKm.svelte';
	import MoleculePagination from '$lib/components/molecules/lists/MoleculePagination.svelte';

	import {
		ministryKm,
		yearGoData,
		maxPageKm,
		pageKm,
		loadingLoadMore,
		loadMoreVisibility
	} from '$lib/store/risetStore';
	import { loadMoreRisetGoData } from '$lib/_api';
	import { onClickRefer } from '$lib/utils/buttonUtils';
	import OrgErrorRiset from '../error/OrgErrorRiset.svelte';
	import { loadingRiset } from '$lib/store/risetStore';
</script>

<script>
	const minYear = 2010;
	const listDropDownRisetKM = [
		'Jakda',
		'Jagrikom',
		'Jaknas',
		'Jakpus',
		'SM',
		'Kesmah',
		'Sosmas',
		'Perdes',
		'LH',
		'PSDM-KKP',
		'PSDM-KKW',
		'Akpres',
		'Senbud',
		'Apro',
		'DKV',
		'Lainnya'
	];
</script>

<section name="list-riset">
	<div class="main-container">
		{#if $stateGoData}
			<div class="riset">
				<div class="godata-header">
					<AtomTextHeading element="h2" _class="text-white">Riset GODATA</AtomTextHeading>
					<div class="grow" />
					<MoleculeDropDown
						listDropDownRisetGodata={Array.from(
							{ length: new Date().getFullYear() - minYear + 1 },
							(v = minYear, i) => v + i
						).reverse()}
					>
						<AtomTextBody slot="title">Tahun</AtomTextBody>
					</MoleculeDropDown>
				</div>
				<AtomTextBody _class="sm:w-[77%]">
					GODATA melakukan riset dan pengumpulan data berdasarkan kebutuhan data BEM KM IPB. Dalam
					praktiknya, metode yang digunakan disesuaikan dengan masalah yang kami hadapi. Salah satu
					metode pengumpulan data yang kerap kami gunakan adalah metode survei, baik itu dengan
					metode Probability Sampling maupun Non Probability Sampling.
				</AtomTextBody>
				{#if $loadingRiset}
					<div class="riset-godata-list">
						{#each { length: 3 } as _}
							<MoleculeCardRiset pulse />
						{/each}
					</div>
				{:else if !$itemRisetGoData.length}
					<OrgErrorRiset title="Riset GODATA">
						<AtomTextBody>
							Riset pada tahun {$yearGoData} <strong>tidak ditemukan</strong>
						</AtomTextBody>
					</OrgErrorRiset>
				{:else}
					<div class="riset-godata-list">
						{#each $itemRisetGoData as item}
							<MoleculeCardRiset
								id={item._id}
								title={item.title}
								imgSrc={item.image}
								responden={item.responden}
							>
								<AtomTextHeading element="h3" type="title-subheading" slot="heading">
									{item.title}
								</AtomTextHeading>
								<AtomTextBody slot="body" size="small" _class="opacity-[65%] text-black">
									{item.description.substring(0, 165) + '...'}
								</AtomTextBody>
							</MoleculeCardRiset>
						{/each}
					</div>
					{#if $loadMoreVisibility}
						<div class="mt-8 w-fit mx-auto">
							{#if !$loadingLoadMore}
								<AtomButton
									on:click={async () => {
										loadingLoadMore.set(true);
										loadMoreRisetGoData();
									}}
									size="small"
								>
									Muat lebih banyak
								</AtomButton>
							{/if}
						</div>
					{/if}
				{/if}
			</div>
		{/if}

		{#if $stateKm}
			<div class="riset">
				<AtomTextHeading _class="text-white mb-3" element="h2">Riset KM IPB</AtomTextHeading>
				<AtomTextBody _class="py-2">
					Laman Riset KM IPB merupakan laman yang dibangun untuk mengumpulkan hasil riset maupun
					survei yang dilakukan oleh KM IPB untuk KM IPB itu sendiri. Laman ini dibangun sebagai
					laman untuk KM IPB dapat turut berkontribusi memberikan data dan informasi yang akurat
					kepada publik. Hasil riset KM IPB yang dipublikasikan juga digunakan sebagai arah gerak
					BEM KM IPB, serta KM IPB dan masyarakat yang membutuhkan.
				</AtomTextBody>
				<AtomTextBody _class="py-2">
					Yuk ikut berkontribusi dengan membagikan hasil riset maupun survei yang telah kamu
					lakukan!
				</AtomTextBody>
				<div class="riset-km-action">
					<AtomButton
						icon={ChevronRightIcon}
						_class="sm:col-start-1 sm:col-end-4"
						on:click={() => onClickRefer($formData.research)}
					>
						Bagikan Risetmu!
					</AtomButton>
					<MoleculeDropDown {listDropDownRisetKM} _class="sm:col-end-7">
						<AtomTextBody slot="title">Kementerian</AtomTextBody>
					</MoleculeDropDown>
				</div>
				{#if $loadingRiset}
					{#each { length: 3 } as _}
						<MoleculeListsRisetKm />
					{/each}
				{:else if !$itemRisetKm.length}
					<OrgErrorRiset title="Riset KM">
						<AtomTextBody>
							Riset pada Kementerian {$ministryKm} <strong>tidak ditemukan</strong>
						</AtomTextBody>
					</OrgErrorRiset>
				{:else}
					<MoleculeListsRisetKm data={$itemRisetKm} />
					{#if $maxPageKm !== 1}
						<div class="w-full">
							<MoleculePagination maxNumber={$maxPageKm} counter={$pageKm} />
						</div>
					{/if}
				{/if}
			</div>
		{/if}
	</div>
</section>

<style>
	section {
		@apply bg-primary mt-6;
	}

	.riset {
		@apply text-white py-12 md:py-16;
	}

	.godata-header {
		@apply flex mb-3;
	}

	.riset-godata-list {
		@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-4 sm:mt-12 mx-auto w-[90%] sm:w-full;
	}

	.riset-km-action {
		@apply grid grid-cols-1 sm:grid-cols-4 items-center w-full gap-3 mt-4 mb-6;
	}
</style>
