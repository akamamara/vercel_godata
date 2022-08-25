<script context="module">
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { loading } from '$lib/store';
</script>

<script>
	loading.set(true);
	if (browser) goto('/riset/godata');
</script>
