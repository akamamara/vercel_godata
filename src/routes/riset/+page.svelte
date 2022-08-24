<script context="module">
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
</script>

<script>
	if (browser) goto('/riset/godata');
</script>
