<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import Banner from "./Banner.svelte";
  import Gallery from "./Gallery.svelte";
  import Bio from "./Bio.svelte";
  import { AppShell } from "@skeletonlabs/skeleton";
  import Footer from "./Footer.svelte";
  import Store from "./Store.svelte";
  import Contact from "./Contact.svelte";
  import NotFound from "./NotFound.svelte";
  import { pageStore } from "./pageStore";
  import { navPages } from "../content/navbar";

  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page) {

    pageStore.update((store: navPages) => {

      if ((<any>Object).values(navPages).includes(page)) {
        return page as navPages;
      } else {
        return navPages.notFound;
      }

    });

  }
  else {
    pageStore.set(navPages.home);
  }

</script>

<AppShell regionPage="relative" slotPageHeader="fixed top-0 z-10 w-full">
	<svelte:fragment slot="pageHeader">
  <Navbar bind:currentPage={$pageStore} />
  </svelte:fragment>
  <br /><br /><br />

  {#if $pageStore === "home"}
  <Banner />
  <br /><br />
  <Bio />
  <br /><br />
  <Gallery />

  {:else if $pageStore === "store"}
  <Store />

  {:else if $pageStore === "contact"}
  <Contact />

  {:else}
  <NotFound />
  {/if}

	<svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>