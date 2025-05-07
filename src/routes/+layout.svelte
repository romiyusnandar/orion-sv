<script lang="ts">
	import '../app.css';
  import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<div class="app flex flex-col min-h-screen">
  <Header />
  <main class="flex-1 pt-6">
    {@render children()}
  </main>
</div>