<script lang="ts">
  import { fadeScale } from "$lib/utils/transition";
  import { onMount } from "svelte";

  export let icon: string = "";
  export let title: string;
  export let description: string;
  export let isEven: boolean = false;

  let visible: boolean = false;
  onMount(() => {
    visible = true;
  })
</script>

{#if visible}
  <div
   class="glass-card p-6 group {isEven ? 'hover:bg-orion-500/40' : 'hover:bg-space-800/70'} transition-all duration-300"
   in:fadeScale={{ delay: 100 }}>
    {#if icon}
      <div class="w-12 h-12 rounded-lg bg-gradient-to-br {isEven ? 'from-orion-600 to-orion-400' : 'from-accent-500 to-orion-600'} felx items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        <div class="text-white">{@html icon}</div>
      </div>
    {/if}
    <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-orion-300 transition-colors">{title}</h3>
    <p class="text-space-200">{description}</p>
  </div>
{/if}