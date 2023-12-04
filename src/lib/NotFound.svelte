<script lang="ts">
    import { faHome } from "@fortawesome/free-solid-svg-icons";
    import { navPages, showIcons } from "../content/navbar";
    import Fa from "svelte-fa";
  import { pageStore } from "./pageStore";

    const urlParams = new URLSearchParams(window.location.search);

    function goHome() {
        pageStore.set(navPages.home);
    }

</script>

<div class="w-full text-center">
    <br /><br /><br />
    <span class="text-2xl"> Woops! Page not found </span>
    <br /><br /><br />
    <button class="btn btn-primary hover:bg-teal-800" on:click={goHome}>
    {#if showIcons}
    <Fa icon={faHome} />
    {/if}
    <span class="px-0">Take me back</span>
    </button>
</div>