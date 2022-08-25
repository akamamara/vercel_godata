<script lang="ts">
	export let href: string;
	export let active: boolean;
	export let _class = '';
</script>

<a class={active ? 'active ' + _class : _class} on:click {href} {...$$restProps}>
	<slot />
</a>

<style>
	a {
		@apply hover:underline hover:font-bold hover:transition-all hover:decoration-2;
	}
	.active {
		@apply h-fit font-bold hover:font-extrabold;
	}
</style>
