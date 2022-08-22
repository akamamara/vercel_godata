<script>
	import AtomChip from '$lib/components/atom/chip/AtomChip.svelte';
	import { getDate } from '$lib/utils/dateUtils';

	export let itemCard = {
		date: '',
		image: '',
		title: '',
		description: ''
	};
</script>

<div class="w-fit px-2">
	<div class="mb-4 flex justify-center">
		<AtomChip type="text" _class="bg-white text-primary">
			{getDate(itemCard.date)}
		</AtomChip>
	</div>
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

<style>
	.card {
		@apply flex flex-col items-center text-white text-center;
	}

	.card-image img {
		@apply object-cover w-full h-[11.25rem] rounded-xl;
	}

	.card-image {
		@apply w-full border-[6px] border-white rounded-xl;
	}

	.card-heading {
		@apply py-3;
	}
</style>
