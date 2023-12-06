<script context="module" lang="ts">
    export type ProjectSource = {
        icon: IconDefinition;
        url: string;
    };
    export type ProjectCollaborator = {
        name: string;
        url: string;
    };
    export type ProjectData = {
        title: string;
        desc: string;
        thumbnailImg: string; // img/vid URL

        year?: number | [number, number];
        showcase?: string[]; // img/vid URL's
        sources?: ProjectSource[];
        collaborators?: ProjectCollaborator[]
    };

    export type ModalData = {
        enabled: boolean;
        project: ProjectData;
    };
</script>

<script lang="ts">
    import { faClose, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import MediaQuery from "./utils/MediaQuery.svelte";

    const modalStore = getContext<Writable<ModalData>>("modalStore");
    $: project = $modalStore.project;

    function hide() {
        modalStore.update((store) => {
            store.enabled = false;
            return store;
        });
    }
</script>

{#if $modalStore && $modalStore.enabled}
<div class="blocker" on:click={hide} on:keydown>
    <div class="project" on:click|preventDefault|stopPropagation on:keydown>
        <div class="closeButton" on:click={hide} on:keydown>
            <Fa icon={faClose} scale={2} />
            <!-- <MediaQuery query="(max-width: 960px)" let:matches>
                {#if matches}mobile{:else}desktop{/if}
            </MediaQuery> -->
        </div>

        <div class="visuals">
            {#if project?.showcase}
                <div class="showing">
                    <!-- <img class="media" src={project.thumbnailImg} alt={project.title}> -->
                    <iframe class="media" width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="reels">
                </div>
            {:else if project?.thumbnailImg}
                <div class="showing">
                    <img class="media" src={project.thumbnailImg} alt={project.title}>
                </div>
            {/if}
        </div>

        <div class="text">
            <div class="title">
            </div>
            <div class="description">
            </div>
        </div>

    </div>
</div>
{/if}

<style>
    .blocker {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(4px) brightness(0.8) saturate(1.2);
        cursor: pointer;
    }

    .project {
        position: absolute;
        display: grid;

        grid-template-columns: 1.618033fr 1fr;

        top: calc(min(80px, 5vw));
        left: calc(min(80px, 5vw));

        overflow: hidden;

        width: calc(100vw - min(160px, 10vw));
        height: calc(100vh - min(160px, 10vw));

        background: var(--base);
        border-radius: 10px;

        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        cursor: default;
    }

    @media only screen and (max-width: 960px) {
        .project {
            grid-template-columns: unset;
            grid-template-rows: 1fr 1.618033fr;
        }
    }

    .closeButton {
        position: absolute;
        top: 24px;
        right: 24px;
        color: var(--text);
        cursor: pointer;
    }

    .visuals {
        display: grid;
        grid-template-rows: 7fr 1fr;
        padding: 1em;
        overflow: hidden;
    }

    .visuals .showing {
        display: block;
        flex-direction: column;
        justify-content: center;
        background-color: var(--crust);
        border-radius: 10px;

        padding: 0;

        overflow: hidden;
    }

    .visuals .showing .media {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .visuals .reels {
        display: grid;
        border: 1px solid purple;
    }

    .text {
        display: grid;
        border: 1px solid blue;
        padding: 1em;
    }
    .text .title {
        display: grid;
        border: 1px solid magenta;
    }
    .text .description {
        display: grid;
        border: 1px solid yellow;
    }
</style>