<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { ModalData, ProjectData } from "./ProjectModal.svelte";

    export let project: ProjectData;

    let h = 100 + Math.random()*100;

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
        <img src={project.thumbnailImg} alt={project.title}>
        <div class="caption">
            {project.title}
        </div>
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

    .frame .caption {
        position: absolute;
        z-index: 10000;
        bottom: 0;
        width: 100%;
        text-align: center;
        line-height: 1em;
        padding: 0.4em;
        background: linear-gradient(transparent 0%, #00000088 80%);

        /* background-color: var(--base); */
        color: var(--text);
    }
</style>