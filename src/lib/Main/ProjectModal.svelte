<script context="module" lang="ts">
    export type ProjectSource = {
        icon: IconDefinition;
        url: string;
    };
    export type ProjectCollaborator = {
        name: string;
        url: string;
    };
    export type ShowcaseReel = {
        url: string;
        caption: string;
    };
    export type ProjectData = {
        title: string;
        desc: string;
        thumbnailImg: string; // img/vid URL

        year?: number | [number, number];
        showcase?: ShowcaseReel[]; // img/vid URL's
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

    let selectedReel = 0;
    const SELECT_CLICK_TIMEOUT = 100; // ms
    let lastMouseDown = Date.parse("1970-01-01T00:00:00.000Z");
    function selectReel(i: number) {
        if (!dragging && Date.now() - lastMouseDown < SELECT_CLICK_TIMEOUT) {
            selectedReel = i;
        }
    }

    let reels: HTMLDivElement;
    let dragging = false;
    let startX = 0, startScroll = 0;
    function beginDrag(e: MouseEvent) {
        startX = e.clientX;
        startScroll = reels.scrollLeft;
        dragging = true;
        lastMouseDown = Date.now();
    }
    function tryDrag(e: MouseEvent) {
        if (!dragging) return;

        const delta = e.clientX - startX;
        reels.scrollLeft = startScroll - delta;
    }
    function endDrag(e: MouseEvent) {
        dragging = false;
    }
</script>

<svelte:window
    on:mousemove|preventDefault={tryDrag}
    on:mouseup|preventDefault={endDrag}
/>

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
                    {#if project?.showcase && project?.showcase[selectedReel]}
                        {@const selected = project.showcase[selectedReel]}
                        <img class="media" src={selected.url} alt={selected.caption}>

                        <!-- <iframe class="media" width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                        <div class="caption">
                            {selected.caption}
                        </div>
                    {:else}
                        <img class="media" src={project.thumbnailImg} alt={project.title}>
                    {/if}
                </div>
                <div class="reelsBox">
                    <div
                        class="reels"
                        bind:this={reels}
                        on:mousedown|preventDefault={beginDrag}
                    >
                        {#each project.showcase as reel, i}
                            <div class="reel">
                                <img class="media" src={reel.url} alt={reel.caption} on:click={() => selectReel(i)} on:keydown>
                            </div>
                        {/each}
                    </div>
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
        grid-template-rows: 1fr 5rem;
        padding: 1em;
        overflow: hidden;
    }

    .visuals .showing {
        display: block;
        position: relative;
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

    .visuals .showing .caption {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        text-align: center;
        color: white;
        background: linear-gradient(transparent 0%, #00000088 100%);
    }

    .visuals .reelsBox {
        width: 100%;
        height: 100%;

        overflow: hidden;
    }

    .visuals .reelsBox .reels {
        --gap: 6px;
        display: flex;
        max-width: 100%;
        width: min-content;
        height: 100%;
        margin: auto;

        align-items: center;
        gap: var(--gap);
        background-color: var(--crust);
        padding: var(--gap);
        border-radius: var(--gap);
        box-shadow: 0 0 10px #000000;

        overflow-x: auto;
        scroll-behavior: auto;
    }

    .visuals .reelsBox .reels .reel {
        background-color: var(--crust);
        min-width: 6em;
        height: 100%;
        border: 1px solid cyan;

        user-select: none;
        cursor: pointer;
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