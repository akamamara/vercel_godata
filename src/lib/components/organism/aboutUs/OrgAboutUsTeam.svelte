<script context="module">
	import AtomTextHeading from '$lib/components/atom/typography/AtomTextHeading.svelte';
	import MoleculeCardTeam from '$lib/components/molecules/card/MoleculeCardTeam.svelte';
</script>

<script>
	export let divisionName = "";
	export let divisionList = [];
</script>


<div>
    {#if divisionList.length}
        <div class="member-division">
            <div class={divisionList.length >= 3 ? "member-portrait-3" : 'member-portrait'}>
                {#each divisionList as item}
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
    {/if}
</div>

<style>
	.member-division {
		@apply border-2 border-yellow p-3 rounded-2xl mb-5 md:mb-8 w-fit mx-auto flex flex-col-reverse md:flex-col;
	}

	.member-portrait-3 {
		@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center w-fit;
	}

    .member-portrait {
        @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 justify-center w-fit;
    }
</style>
