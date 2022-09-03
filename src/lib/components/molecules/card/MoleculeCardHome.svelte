<script>
	import AtomChip from '$lib/components/atom/chip/AtomChip.svelte';
	import { onClickRefer } from '$lib/utils/buttonUtils';
	import { getDate } from '$lib/utils/dateUtils';

	export let itemCard = {
		date: '',
		image: '',
		title: '',
		link: '',
		description: ''
	};

	let haveLink = itemCard.link.length;
</script>

<div class="w-fit px-2">
	<div class="mb-4 flex justify-center">
		<AtomChip type="text" _class="bg-white text-primary">
			{getDate(itemCard.date)}
		</AtomChip>
	</div>
	<div
		class:cursor-pointer={haveLink}
		class:select-none={haveLink}
		on:click={() => onClickRefer(itemCard.link)}
	>
		<div class="card">
			<!-- Cover Image -->
			<div class="card-image">
				<img src={itemCard.image} alt="Images of {itemCard.title}" />
			</div>
			<!-- Title -->
			<div class="card-heading">
				<slot name="heading" />
			</div>
			<!-- Body -->
			<div class="card-body">
				<slot name="body" />
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		@apply p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-lg	flex flex-col items-center text-white text-center;
	}

	.card-image img {
		@apply object-cover bg-[#e4e4e4] w-full h-[11.25rem] rounded;
	}

	.card-image {
		@apply w-full border-[6px] border-white rounded-xl;
	}

	.card-heading {
		@apply py-3;
	}
</style>
