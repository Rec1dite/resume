<script context="module" lang="ts">
    type CollageItemProps = { [key: string]: any };
    export type CollageItemComponent = { component: ConstructorOfATypedSvelteComponent; };
    export type CollageItemElement = { element: string; };

    export type CollageItem = (CollageItemComponent | CollageItemElement) & CollageItemProps;
</script>

<script lang="ts">
    import { onMount, createEventDispatcher, SvelteComponent } from "svelte";
    import { tick } from "svelte";

    export let gap = "10px";
    export let maxColumnWidth = 250;

    export let content: CollageItem[] = [];
    export let hoverScale = 1;

    const dispatch = createEventDispatcher();

    let columns: CollageItem[][] = [];
    let galleryWidth = 0;
    let columnCount = 0;

    $: columnCount = parseInt(`${galleryWidth / maxColumnWidth}`) || 1;
    $: columnCount && draw();
    $: galleryStyle = `
        grid-template-columns: repeat(${columnCount}, 1fr);
        --gap: ${gap};
        --hoverScale: ${hoverScale};
    `;

    onMount(draw);

    async function draw() {
        await tick();

        columns = [];

        // Fill the columns with collage items
        for (let i = 0; i < content.length; i++) {
            const idx = i % columnCount;
            columns[idx] = [ ...(columns[idx] || []), content[i] ];
        }
    }
</script>

{#if columns}
    <div id="gallery" bind:clientWidth={galleryWidth} style={galleryStyle}>
        {#each columns as col}
            <div class="column">
                {#each col as item}
                    <div class="item {hoverScale === 1 ? "" : "hover"}">
                        {#if item.component}
                            <svelte:component this={item.component} {...item.props} />
                        {:else if item.element}
                            <svelte:element this={item.element} {...item.props} />
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
{/if}

<style>
    #gallery {
        width: 100%;
        display: grid;
        gap: var(--gap);
    }
    #gallery .column {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    #gallery .column .item {
        width: 100%;
        line-height: 0px;
        margin-top: var(--gap);
    }
    #gallery .column .item:nth-child(1) {
        margin-top: 0;
    }
    .hover {
        opacity: 0.9;
        transition: all 0.2s;
    }
    .hover:hover {
        opacity: 1;
        transform: scale(var(--hoverScale));
        z-index: 100;
    }
</style>
