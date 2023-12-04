<script lang="ts">
    import { AppBar } from "@skeletonlabs/skeleton";
    import Fa from "svelte-fa";
    import { navs, showIcons } from "../content/navbar";

    const handleClick = (nav) => {

        if (nav["page"]) {
            currentPage = nav.page;
        }

        if (nav["link"]) {
            if (nav["page"]) {
                // Open in new tab
                window.open(nav.link, "_blank");
            }
            else
            {
                // Open in current tab
                window.location.replace(nav.link);
            }
        }
    };

    export let currentPage = "home";

</script>

<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center">
	<!-- <svelte:fragment slot="lead">
        <img src="src/assets/tristan.jpg" alt="Tristan logo" class="logo"/>
    </svelte:fragment> -->
    {#each navs as nav}
        <button class="btn btn-primary hover:bg-teal-800" on:click={() => handleClick(nav)}>
            {#if showIcons}
            <Fa icon={nav.icon} />
            {/if}
            <span class="px-0">{nav.name}</span>
        </button>
    {/each}
</AppBar>
<div class="w-full h-12" />

<style>
    .logo {
        width: 3em;
    }
</style>