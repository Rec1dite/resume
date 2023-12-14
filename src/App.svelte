<script lang="ts">
  // Skeleton theme
  // import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  // Custom Skeleton theme
  import "./themes/main.postcss";

  // Skeleton required styles
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Application's global stylesheet;

  import "./app.postcss";
  import { writable } from "svelte/store";

  import Banner from "./lib/Banner.svelte";
  import { onMount, setContext } from "svelte";
  import ProjectModal, { type ModalData } from "./lib/Main/ProjectModal.svelte";
  import { projects } from "./content/projects";

  const modalStore = writable<ModalData>({ enabled: false, project: null });
  setContext("modalStore", modalStore);

  function renavHash() {
    const projectId = window.location.hash.slice(1);
    if (projectId === "" || projects[projectId] == null) {
      // Not linking to a project
      modalStore.set({ enabled: false, project: null });
      return;
    }

    modalStore.set({ enabled: true, project: projects[projectId] });
  }

  onMount(() => {
    renavHash();
  });
</script>

<svelte:window on:hashchange={renavHash} />

<main>
  <Banner />

  {#if $modalStore}
    <ProjectModal />
  {/if}
</main>

<style>
</style>
