<script context="module">
	import OrgDatabaseBanner from '$lib/components/organism/database/OrgDatabaseBanner.svelte';
	import OrgDatabaseList from '$lib/components/organism/database/OrgDatabaseList.svelte';
	import { itemDataDatabase, loading } from '$lib/store';
	import { getDatabaseData } from '$lib/_api';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
</script>

<script>
	onMount(async () => {
		loading.set(true);
		getDatabaseData()
			.then((res) => {
				let data = res.data;
				let keysData = Object.keys(data).sort();

				let staff = [
					{ title: 'Pimpinan IPB', href: data.leader },
					{ title: 'Penjaga Ruangan IPB', href: data.room_keeper }
				];
				let students = {
					title: ['Mahasiswa Sarjana IPB', 'Mahasiswa Vokasi IPB'],
					content: [[], []]
				};
				let bemkm = [
					{
						title: 'Pengurus BEM KM IPB',
						href: data.bem_km
					}
				];
				let ormawa = [
					{ title: 'Ormawa IPB', href: data.ormawa },
					{ title: 'Ormawa Fakultas', href: data.ormawa_faculty },
					{ title: 'Himpunan Profesi', href: data.ormawa_profession }
				];
				let ukm = [{ title: 'UKM IPB', href: data.ukm_leader }];
				let room = [{ title: 'Ruangan', href: data.room }];

				keysData.forEach((item) => {
					let splitDelimiter = item.toString().split('_');
					if (splitDelimiter.length > 1) {
						if (splitDelimiter[0] === 's1')
							students['content'][0].push({
								title: splitDelimiter[1].toString(),
								href: res.data[item]
							});
						if (splitDelimiter[0] === 'd3')
							students['content'][1].push({
								title: splitDelimiter[1].toString(),
								href: res.data[item]
							});
					}
				});

				itemDataDatabase.set({
					staff: staff,
					kemahasiswaan: students,
					bemkm: bemkm,
					ormawa: ormawa,
					ukm: ukm,
					ruangan: room
				});

				console.log(get(itemDataDatabase));
			})
			.finally(() => loading.set(false));
	});
</script>

<svelte:head>
	<title>Database | GO DATA</title>
	<meta name="description" content="Database GO Data Risbang BEM KM IPB" />
</svelte:head>

<section name="hero-banner" class="main-container">
	<OrgDatabaseBanner />
</section>
{#if Object.keys($itemDataDatabase).length > 0}
	<OrgDatabaseList listActionDb={$itemDataDatabase} />
{/if}
