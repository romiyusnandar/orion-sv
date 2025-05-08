<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { ArrowRight, Zap, Shield, Smartphone, Cpu, Battery, Palette, Gift } from "@lucide/svelte";
  import FeatureCard from "$lib/components/FeatureCard.svelte";
  import { devices } from "$lib/data/devices";
  import { fadeIn } from "$lib/utils/transition";

  const featuredDevices = devices.slice(0, 3);

  let showHero: boolean = false;
  let showFeatures: boolean = false;

  onMount(() => {
    showHero = true;
    setTimeout(() => {
      showFeatures = true;
    }, 300);
  });

  const features = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
      title: 'Lightning Fast',
      description: 'Optimized kernel and system processes delivering exceptional speed and responsiveness.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-battery"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line></svg>',
      title: 'Extended Battery Life',
      description: 'Advanced power management systems to maximize battery efficiency and longevity.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
      title: 'Endless Customization',
      description: 'Tailor every aspect of your device with extensive personalization options.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>',
      title: 'Enhanced Privacy',
      description: 'Take control of your data with advanced permission management and security features.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
      title: 'Gesture Controls',
      description: 'Intuitive navigation with customizable gesture controls for a seamless experience.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>',
      title: 'Performance Boost',
      description: 'Unlock your device\'s full potential with optimized system performance.'
    },
  ];

  const screenshots = [
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];
</script>

<svelte:head>
  <title>Orion OS</title>
  <meta name="description" content="Experience the future of Android with Orion OS - the premium custom ROM that enhances performance, battery life, and customization.">
</svelte:head>

<!-- Hero section -->
{#if showHero}
  <section class="relative py-32 md:py-36 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-space-900 via-space-950 to-orion-900 z-0"></div>

    <div class="absolute inset-0 z-10">
      {#each Array(50) as _, i}
        <div
         class="absolute rounded-full animate-twinkle"
         style="
         left: {Math.random() * 100}%;
         top: {Math.random() * 100}%;
         width: {Math.random() * 3 + 1}px;
         height: {Math.random() * 3 + 1}px;
         background-color: rgba(255, 255, 255, {0.3 + Math.random() * 0.7});
         animation-delay: {Math.random() * 5}s;
         animation-duration: {3 + Math.random() * 7}s;
        "
        ></div>
      {/each}
    </div>

    <div class="absolute inset-0 z-20">
      {#each Array(2) as _, i}
        <div
          class="absolute rounded-full blur-3xl opacity-30"
          style="
            left: {Math.random() * 100}%;
            top: {Math.random() * 100}%;
            width: {100 + Math.random() * 200}px;
            height: {100 + Math.random() * 200}px;
            background-color: rgb({Math.random() * 100 + 155}, {Math.random() * 100 + 155}, 255);
          "
        ></div>
      {/each}
    </div>

    <div class="container mx-auto px-4 relative z-30">
      <div class="max-w-3xl mx-auto text-center" in:fade={{ duration: 600 }}>
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orion-200 to-white text-transparent bg-clip-text">
          Experience Android Like Never Before
        </h1>
        <p class="text-xl text-space-200 mb-10 max-w-2xl mx-auto">
          Orion OS is a custom ROM that brings speed, battery efficiency, and endless customization to your device.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" class="btn-primary">Download Now</a>
          <a href="/device" class="btn-secondary">Supported Devices</a>
        </div>
      </div>

      <div class="mt-16 relative max-w-4xl mx-auto" in:fade={{ duration: 600, delay: 300 }}>
        <div class="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl border border-space-800">
          <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Orion OS Screenshot" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-60"></div>
        </div>

        <!-- Floating img -->
        <div class="absolute -bottom-6 -left-6 w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden shadow-lg border border-space-700 animate-float z-10" style="animation-delay: 1s;">
          <img src="https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Orion OS Feature" class="w-full h-full object-cover">
        </div>
        <div class="absolute -top-6 -right-6 w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden shadow-lg border border-space-700 animate-float" style="animation-delay: 2s;">
          <img src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Orion OS Feature" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>
{/if}