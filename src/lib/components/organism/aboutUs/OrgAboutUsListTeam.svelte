<script context="module">
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
</script>

<script>
import OrgAboutUsTeam from "./OrgAboutUsTeam.svelte";

	export let divisionList = [];

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
		<div class="member-list">
			<OrgAboutUsTeam divisionName="Board of Directors" divisionList={divisionList["Board of Directors"]}/>
			<OrgAboutUsTeam divisionName="Data Analyst" divisionList={divisionList["Data Analyst"]}/>
			<OrgAboutUsTeam divisionName="Infographic & Branding" divisionList={divisionList["Infographic & Branding"]}/>
			<OrgAboutUsTeam divisionName="Survey & Research" divisionList={divisionList["Survey & Research"]}/>
			<OrgAboutUsTeam divisionName="Database & Website" divisionList={divisionList["Database & Website"]}/>
		</div>
	
		<!-- {#if Object.keys(divisionList).length}
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
						{divisionName}
					</AtomTextHeading>
				</div>
			{/each}
		{/if} -->
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

	.member-list {
		@apply flex flex-col gap-6;
	}

	.title-stroke {
		text-shadow: -0.125rem -0.125rem 0 #fff, 0.125rem -0.125rem 0 #fff, -0.125rem 0.125rem 0 #fff,
			0.125rem 0.125rem 0 #fff;
	}
</style>
