<script lang="ts">
  import Gallery from "svelte-image-gallery";
  import { Modal, modalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import { gallery } from "../content/gallery";

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

    const modal: ModalSettings = {
        type: 'alert',
        title: gallery[imgId].title,
        body: gallery[imgId].desc,
        image: gallery[imgId].fullScaleImg || gallery[imgId].thumbnailImg,
    };
    modalStore.trigger(modal);
  }
</script>

<div class="w-full max-w-6xl mx-auto">
    <Gallery
        on:click={handleGalleryClick}
        gap="10"
        maxColumnWidth="200"
        hover="{true}"
        loading="lazy"
    >
    {#each Object.keys(gallery) as imgId}
        <img
            class="IMG${imgId} h-auto max-w-full rounded-lg"
            id="{imgId}"
            src="{gallery[imgId].thumbnailImg}"
            alt=""
        />
    {/each}
    </Gallery>

    <Modal />
</div>

<style>
  	img {
        opacity: .9;
        transition: all .2s;
    }
	img:hover {
        opacity: 1;
        transform: scale(1.04);
        cursor: pointer;
    }
</style>
