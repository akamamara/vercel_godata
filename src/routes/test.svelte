<script>
	import AtomButton from "$lib/components/atom/button/AtomButton.svelte";
	import AtomLink from "$lib/components/atom/link/AtomLink.svelte";
	import AtomTextBody from "$lib/components/atom/typography/AtomTextBody.svelte";
	import AtomTextHeading from "$lib/components/atom/typography/AtomTextHeading.svelte";
	
	import MoleculeNavItem from "$lib/components/molecules/MoleculeNavItem.svelte";
	import MoleculeCardRiset from "$lib/components/molecules/card/MoleculeCardRiset.svelte";
	import MoleculeCardHome from "$lib/components/molecules/card/MoleculeCardHome.svelte";
	
	import OrgNavbar from "$lib/components/organism/navbar/OrgNavbar.svelte";
	import OrgHeroBanner from "$lib/components/organism/homepage/OrgHeroBanner.svelte";
	
	import { ChevronRightIcon } from "svelte-feather-icons"
	
	let items = [
		{
			title: "Riset",
			link: "/riset"
		},
		{
			title: "Database",
			link: "/database"
		},
		{
			title: "Website BEM KM",
			link: "https://bemkmipb.org"
		},
		{
			title: "Tentang",
			link: "/tentang"
		},
	]

	let itemCard = {
    img: {
      height: 180,
      src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }, 
    title: "Survei Mudik Bareng",
    body: "Menjadi kebanggaan memimpin suatu organisasi bergerak dengan data dan riset, sehingga semua pergerakan memiliki referensi dan sumber data yang akurat."
  };
</script>

<svelte:head>
	<title>Testing</title>
	<meta name="description" content="Testing component" />
</svelte:head>

<section name="atoms_test" class="hidden">
	<AtomButton variant="primary" disabled icon={ChevronRightIcon} href="https://google.com">
		Isi survei sekarang!
	</AtomButton>

	<AtomButton size=small variant="secondary">
		Bagikan risetmu!
	</AtomButton>

	<AtomTextHeading type="title" _class="text-secondary">Riset</AtomTextHeading>

	<AtomTextHeading element="h2">Riset GODATA</AtomTextHeading>

	<AtomTextHeading type="title-subsection" element="h3">Survei Mudik Bareng</AtomTextHeading>

	<AtomTextBody>
		<strong>GODATA</strong> merupakan sebuah portal informasi yang berisikan data demografis, kemahasiswaan, dan pergerakan Mahasiswa Institut Pertanian Bogor untuk mewujudkan BEM KM IPB based on data driven.
	</AtomTextBody>

	<AtomLink href="#" class="text-xl text-secondary">Hello</AtomLink>
</section>

<section name="molecules_test" class="w-full min-h-screen hidden">
	<MoleculeNavItem items={items} />
	<section class="bg-primary h-full p-3">
		<div class="container mx-auto grid grid-cols-3 gap-4">
			<!-- Card Riset -->
			{#each {length:3} as _}
				<MoleculeCardRiset item={itemCard}>
					<AtomTextHeading element="h3" type="title-subheading" slot="heading">
						{itemCard.title}
					</AtomTextHeading>
					<AtomTextBody slot="body" size="small" _class="opacity-[65%]">
						{itemCard.body.substring(0, 240) + "..."}
					</AtomTextBody>
				</MoleculeCardRiset>
			{/each}
		</div>
		<!-- Card  -->
		<div class="container mx-auto grid grid-cols-2 gap-4 py-5">
			{#each {length:2} as _}
				<MoleculeCardHome item={itemCard}>
					<AtomTextHeading element="h3" type="title-subheading" _class="text-white font-medium" slot="heading">
						{itemCard.title}
					</AtomTextHeading>
					<AtomTextBody slot="body" _class="opacity-80">
						{itemCard.body}
					</AtomTextBody>
				</MoleculeCardHome>
			{/each}
		</div>
	</section>
</section>

<section name="organism_test" class="container mx-auto bg-white-var w-full min-h-screen">
		<OrgNavbar />
		<OrgHeroBanner />
</section>