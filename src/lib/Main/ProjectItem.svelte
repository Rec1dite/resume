<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { ModalData, ProjectData } from "./ProjectModal.svelte";
  import RepoCard from "./utils/RepoCard.svelte";

    export let project: ProjectData;

    const modalStore = getContext<Writable<ModalData>>("modalStore");

    function openModal() {
        modalStore.update((store) => {
            store.enabled = true;
            store.project = project;
            return store;
        });
    }
</script>

<div class="frame" on:click={openModal} on:keydown>
    <div class="content">
        {#if project.thumbnailImg}
            <img src={project.thumbnailImg} alt={project.title}>
            <div class="caption">
                {project.title}
            </div>
        {:else if project.githubRepo}
            <RepoCard slug={project.githubRepo} />
        {:else}
            <div class="blankThumb">
                {project.title}
            </div>
        {/if}
    </div>
</div>

<style>
    .frame {
        position: relative;
        display: inline-block;
        width: 100%;
        border-radius: 1em;
        overflow: hidden;
        text-align: center;
        border: 4px solid var(--base);
        cursor: pointer;
    }

    .frame img {
        width: 100%;
    }

    .frame .blankThumb {
        width: 100%;
        height: 4em;
        background-color: var(--crust);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;

        font-style: italic;
    }

    .frame .caption {
        position: absolute;
        z-index: 10000;
        bottom: 0;
        width: 100%;
        text-align: center;
        line-height: 1em;
        padding: 0.4em;
        background: linear-gradient(transparent 0%, #00000044 40%, #00000088 100%);

        /* background-color: var(--base); */
        color: white;
    }
</style>