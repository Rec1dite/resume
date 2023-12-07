<script context="module" lang="ts">
    export type ProjectLinkType = "github" | "website" | "download" | "document";
    export type ProjectSource = {
        type: ProjectLinkType;
        url: string;
    };
    export type ProjectCollaborator = {
        name: string;
        url: string;
    };
    export type ShowcaseReel = {
        yt?: string;
        img?: string;
        gh?: string;
        caption: string;
    };

    export type ProjectData = {
        title: string;
        desc: string;
        thumbnailImg?: string; // img/vid URL
        githubRepo?: string;

        year?: number | [number, number|null];
        showcase?: ShowcaseReel[]; // img/vid URL's
        sources?: ProjectSource[];
        collaborators?: ProjectCollaborator[]
    };

    export type ModalData = {
        enabled: boolean;
        project: ProjectData;
    };

    const linkTypeToIcon: Record<ProjectLinkType, IconDefinition> = {
        github: faGithub,
        website: faHome,
        download: faDownload,
        document: faFile
    };
</script>

<script lang="ts">
    import { faClose, faDownload, faFile, faHome, faPlay, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import MediaQuery from "./utils/MediaQuery.svelte";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import RepoCard from "./utils/RepoCard.svelte";

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
    on:keyup={({key}) => { if (key === "Escape") hide(); }}
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
                        {#if selected?.yt}
                            <iframe class="media" width="560" height="315" src="https://www.youtube-nocookie.com/embed/{selected.yt}" title="YouTube Player" frameborder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                        {:else if selected?.img}
                            <img class="media" src={selected.img} alt={selected.caption}>
                        {:else if selected?.gh}
                            <div class="media">
                                <!-- <RepoCard slug={selected.gh} /> -->
                            </div>
                        {:else}
                            ERR: No media
                        {/if}

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
                            <div class="reel relative" on:click={() => selectReel(i)} on:keydown>
                                {#if reel?.yt}
                                    <img class="media" src="https://img.youtube.com/vi/{reel.yt}/0.jpg" alt={reel?.caption ?? ""}>
                                    <div class="flex absolute top-0 left-0 w-full h-full justify-center items-center z-10 select-none">
                                        <Fa icon={faPlay} scale={1.2} />
                                    </div>
                                {:else if reel?.img}
                                    <img class="media" src={reel.img} alt={reel.caption}>
                                {:else if reel?.gh}
                                    <div class="flex absolute top-0 left-0 w-full h-full justify-center items-center z-10 select-none">
                                        <Fa icon={faGithub} scale={1.2} />
                                    </div>
                                {/if}
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
            {#if project}
                <div class="title">{project.title}</div>
                {#if project.year}
                    <div class="year">
                        {#if typeof project.year === "number"}
                            ({project.year})
                        {:else if typeof project.year === "object"}
                        {@const [from, to] = project.year}
                            ({from} - {to ?? "..."})
                        {/if}
                    </div>
                {/if}
                <br />
                {#if project.sources}
                    <div class="sources">
                        <b class="font-semibold">Links:</b><br />
                        {#each project.sources as source}
                        <a href={source.url}>
                            <Fa style="display: inline-block; margin-right: 0.2em;" icon={linkTypeToIcon[source.type]}/>
                            <u>{source.url}</u>
                        </a>
                        <br />
                        {/each}
                    </div>
                {/if}
                {#if project.collaborators}
                    <div class="collaborators">
                        <b class="font-semibold">Collaborators:</b><br />
                        {#each project.collaborators as collaborator}
                        <a class="inline-block px-1" href={collaborator.url}>
                            <u>{collaborator.name}</u>
                        </a>
                        {/each}
                    </div>
                {/if}
                <hr />
                <div class="description">{project.desc}</div>
            {:else}
                ERR: No project data
            {/if}
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
        top: 12px;
        right: 12px;
        padding: 12px;
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
        margin-bottom: 1em;
        box-shadow: 0 4px 10px #00000080;

        overflow: hidden;
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

        user-select: none;
        cursor: pointer;
    }
    .media {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .text {
        padding: 2.6em 2em 2em 1em;
    }
    .text div {
        display: inline-block;
        /* border: 1px solid magenta; */
    }
    .text .title {
        font-family: "Offside";
        font-size: 3rem;
        line-height: 3rem;
        margin-bottom: 1.2rem;
        /* border: 1px solid magenta; */
    }
    .text .year {
        float: right;
        font-family: "Jost";
        font-style: italic;
        font-weight: 200;
        line-height: 1rem;
        margin-top: 2rem;
        margin-right: 1em;
    }
    .text .sources {
        font-weight: 250;
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
    .text .collaborators {
        font-weight: 250;
        margin-left: 1rem;
    }
    .text hr {
        border-top: 1px solid var(--text);
        margin: 2rem 0px;
    }
    .text .description {
        white-space: pre-line;
        font-weight: 320;
    }
</style>