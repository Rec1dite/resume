<script lang="ts">
  import Collage, { type CollageItem } from "./Collage.svelte";

  function handleGalleryClick(e) {
    const parts = e.explicitOriginalTarget.className.split(" ");
    // Loop through parts for "IMG${imgId}"
    let imgId = "";
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes("IMG$")) {
            imgId = parts[i].replace("IMG$", "");
            break;
        }
    }
    console.log("imgId", imgId);
  }

  export let content: CollageItem[] = []

</script>

<div class="w-full max-w-6xl mx-auto">
    <!-- on:click={handleGalleryClick} -->
    <Collage
        gap="10px"
        maxColumnWidth={300}
        hoverScale={1.05}
        {content}
    />
</div>