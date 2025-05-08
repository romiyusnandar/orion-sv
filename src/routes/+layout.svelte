<script lang="ts">
	import '../app.css';
  import { pageTransition } from '$lib/utils/transition';
  import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />

<main in:pageTransition class="min-h-screen">
  {@render children()}
</main>