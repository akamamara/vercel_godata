<script context="module">
	import BemKmIcon from '$lib/assets/bemKmIcon.svelte';
	import MahaiswaIcon from '$lib/assets/mahaiswaIcon.svelte';
	import PimpinanPegawaiStaffIcon from '$lib/assets/pimpinanPegawaiStaffIcon.svelte';
	import RuanganIcon from '$lib/assets/ruanganIcon.svelte';

	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import MoleculeCardDatabase from '$lib/components/molecules/card/MoleculeCardDatabase.svelte';
</script>

<script>
	export let listActionDb = {
		staff: [
			{
				title: 'Pimpinan IPB',
				href: 'https://google.com'
			},
			{
				title: 'Penjaga Ruangan IPB',
				href: '#'
			}
		],
		kemahasiswaan: {
			title: ['Mahasiswa Sarjana IPB ', 'Mahasiswa Vokasi IPB'],
			content: [
				[
					{
						title: '55',
						href: 'https://google.com'
					},
					{
						title: '56',
						href: '#'
					},
					{
						title: '57',
						href: 'https://google.com'
					},
					{
						title: '58',
						href: '#'
					}
				],
				[
					{
						title: '56',
						href: '#'
					},
					{
						title: '57',
						href: 'https://google.com'
					},
					{
						title: '58',
						href: '#'
					}
				]
			]
		},
		bemkm: [
			{
				title: 'Pengurus BEM KM IPB',
				href: 'https://google.com'
			}
		],
		ormawa: [
			{
				title: 'Ormawa IPB',
				href: 'https://google.com'
			},
			{
				title: 'Ormawa Fakultas',
				href: 'https://google.com'
			},
			{
				title: 'Himpunan Profesi',
				href: 'https://google.com'
			}
		],
		ukm: [
			{
				title: 'UKM IPB',
				href: 'https://google.com'
			}
		],
		ruangan: [
			{
				title: 'Ruangan',
				href: 'https://google.com'
			}
		]
	};
</script>

<section name="database-list">
	<div class="main-container">
		<div class="title-database">
			<AtomTextHeading element="h2" _class="text-white">Daftar</AtomTextHeading>
		</div>

		<div class="list-database">
			<MoleculeCardDatabase
				ilustration={PimpinanPegawaiStaffIcon}
				dbName="Pimpinan Pegawai Staff"
				actionList={listActionDb['staff']}
			/>

			<MoleculeCardDatabase
				ilustration={MahaiswaIcon}
				dbName="Kemahasiswaan"
				multiLevel
				actionTitleLevel={listActionDb['kemahasiswaan'].title}
				actionList={listActionDb['kemahasiswaan'].content}
			/>

			<MoleculeCardDatabase
				ilustration={BemKmIcon}
				dbName="Internal BEM KM IPB"
				actionList={listActionDb['bemkm']}
			/>

			<MoleculeCardDatabase
				ilustration={MahaiswaIcon}
				dbName="Ketua Ormawa"
				actionList={listActionDb['ormawa']}
			/>

			<MoleculeCardDatabase
				ilustration={MahaiswaIcon}
				dbName="Ketua UKM"
				actionList={listActionDb['ormawa']}
			/>

			<MoleculeCardDatabase
				ilustration={RuanganIcon}
				dbName="Ruangan"
				actionList={listActionDb['ruangan']}
			/>
		</div>
	</div>
</section>

<style>
	section {
		@apply bg-primary h-full mt-6 py-12 md:py-16;
	}

	.title-database {
		@apply bg-yellow py-4 px-16 mx-auto mb-8 w-fit border border-yellow-stroke rounded-xl;
	}

	.list-database {
		@apply grid grid-cols-1 gap-4;
	}
</style>
