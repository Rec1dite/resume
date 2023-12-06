<script lang="ts">
  // Skeleton theme
  // import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  // Custom Skeleton theme
  import './themes/main.postcss'

  // Skeleton required styles
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  // Application's global stylesheet;

  import './app.postcss';
  import { writable } from "svelte/store";

  import Banner from "./lib/Banner.svelte";
  import { setContext } from 'svelte';
  import ProjectModal, { type ModalData } from './lib/Main/ProjectModal.svelte';

  const modalStore = writable<ModalData>({ enabled: true, project: null });
  setContext('modalStore', modalStore);

</script>

<main>
  <Banner />

  {#if $modalStore}
  <ProjectModal />
  {/if}
</main>

<style>
</style>
