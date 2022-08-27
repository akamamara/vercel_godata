<script context="module">
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import MoleculeCardTeam from '$lib/components/molecules/card/MoleculeCardTeam.svelte';
</script>

<script>
	export let divisionList = {};
</script>

<section>
	<div class="main-container">
		<div class="member-heading">
			<AtomTextHeading element="h2" _class="text-white">
				MEET OUR <br />
				<span class="title-stroke">
					<AtomTextHeading element="span" type="title" _class="text-primary tracking-wider">
						TEAM
					</AtomTextHeading>
				</span>
			</AtomTextHeading>
		</div>
		{#if Object.keys(divisionList).length}
			{#each Object.keys(divisionList) as division}
				<div class="member-division">
					<div class="member-portrait">
						{#each divisionList[division] as item}
							<MoleculeCardTeam name={item.name} occupation={item.position} imgSrc={item.image} />
						{/each}
					</div>
					<AtomTextHeading
						type="title-subsection"
						elemet="h3"
						_class="text-white text-center mb-4 md:mt-4 md:mb-0"
					>
						{division}
					</AtomTextHeading>
				</div>
			{/each}
		{/if}
	</div>
</section>

<style>
	section {
		@apply bg-primary py-16 md:py-20 mt-6;
	}

	.member-heading {
		@apply relative w-full text-center mb-12;
	}

	.member-heading::before {
		content: '';
		@apply absolute top-[50%] left-0 w-[20%] md:w-[36%] border-[2.5px] border-white h-[4px] rounded-full bg-white;
	}

	.member-heading::after {
		content: '';
		@apply absolute top-[50%] right-0 w-[20%] md:w-[36%] border-[2.5px] border-white h-[4px] rounded-full bg-white;
	}

	.member-division {
		@apply border-2 border-yellow p-3 rounded-2xl mb-5 md:mb-8 w-fit mx-auto flex flex-col-reverse md:flex-col;
	}

	.member-portrait {
		@apply grid grid-cols-2 md:grid-cols-3 gap-3 justify-center w-fit;
	}

	.title-stroke {
		text-shadow: -0.125rem -0.125rem 0 #fff, 0.125rem -0.125rem 0 #fff, -0.125rem 0.125rem 0 #fff,
			0.125rem 0.125rem 0 #fff;
	}
</style>
