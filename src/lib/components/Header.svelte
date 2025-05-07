<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { Menu, X, Moon, Sun, Github } from '@lucide/svelte';

  let scrollY: number;
  let isMobileMenuOpen = false;
  let isDarkMode = true;

  // Watch scroll position for header transparency
  onMount(() => {
    const unsubscribe = page.subscribe(() => {
      isMobileMenuOpen = false;
    });

    return unsubscribe;
  });

  $: isScrolled = scrollY > 20;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    // In a real app, this would toggle dark mode
  }
</script>

<svelte:window bind:scrollY />

<header class:bg-space-950={isScrolled || isMobileMenuOpen} class:bg-transparent={!isScrolled && !isMobileMenuOpen} class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="container mx-auto px-4 py-4 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2 text-white">
      <div class="bg-gradient-to-r from-orion-500 to-accent-500 w-8 h-8 rounded-full flex items-center justify-center">
        <div class="bg-space-950 w-4 h-4 rounded-full"></div>
      </div>
      <span class="text-xl font-bold tracking-tight">Orion OS</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-8">
      <a href="/" class="text-sm font-medium py-2 border-b-2 {$page.url.pathname === '/' ? 'border-orion-500 text-white' : 'border-transparent text-gray-400 hover:text-white transition-colors'}">
        Home
      </a>
      <a href="/device" class="text-sm font-medium py-2 border-b-2 {$page.url.pathname.startsWith('/device') ? 'border-orion-500 text-white' : 'border-transparent text-gray-400 hover:text-white transition-colors'}">
        Devices
      </a>
      <a href="https://github.com/orionos" class="text-sm font-medium py-2 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">
        Github
      </a>
      <a href="#download" class="btn-primary">
        Download
      </a>
    </nav>

    <!-- Mobile Navigation Toggle -->
    <div class="md:hidden flex items-center gap-4">
      <button on:click={toggleDarkMode} class="p-2 text-gray-400 hover:text-white" aria-label="Toggle dark mode">
        {#if isDarkMode}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </button>
      <button on:click={toggleMobileMenu} class="p-2 text-white" aria-label="Toggle menu">
        {#if isMobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  {#if isMobileMenuOpen}
    <div class="md:hidden bg-space-900 border-t border-space-800">
      <div class="container mx-auto py-4 px-4 flex flex-col gap-4">
        <a href="/" class="py-2 text-lg font-medium {$page.url.pathname === '/' ? 'text-orion-500' : 'text-gray-300'}">
          Home
        </a>
        <a href="/device" class="py-2 text-lg font-medium {$page.url.pathname.startsWith('/device') ? 'text-orion-500' : 'text-gray-300'}">
          Devices
        </a>
        <a href="https://github.com/orionos" class="py-2 text-lg font-medium text-gray-300 flex items-center gap-2">
          <Github size={20} />
          Github
        </a>
        <a href="#download" class="btn-primary text-center">
          Download
        </a>
      </div>
    </div>
  {/if}
</header>