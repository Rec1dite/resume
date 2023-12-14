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
  import { onMount, setContext } from 'svelte';
  import ProjectModal, { type ModalData } from './lib/Main/ProjectModal.svelte';
  import { projects } from './content/projects';

  const modalStore = writable<ModalData>({ enabled: false, project: null });
  setContext('modalStore', modalStore);

  onMount(() => {
    const pathParts = window.location.pathname.split("/").filter(part => part.trim() !== "" && !part.startsWith("#"));
    if (pathParts.length > 1) {
      const projectId = pathParts[1];
      console.log("Project ID", projectId);
      if (projects[projectId] !== undefined) {
        modalStore.update((store) => {
            store.enabled = true;
            store.project = projects[projectId];
            return store;
        });
      }
    }
  });

</script>

<main>
  <Banner />

  {#if $modalStore}
  <ProjectModal />
  {/if}
</main>

<style>
</style>
