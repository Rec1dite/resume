<script lang="ts">
  import Home from "./lib/Home.svelte";
  import Banner from "./lib/Banner.svelte";
  import Content from "./lib/Main/Content.svelte";

  // Skeleton theme
  // import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  // Custom Skeleton theme
  import './themes/main.postcss'

  // Skeleton required styles
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  // Application's global stylesheet;
  import './app.postcss';

</script>

<main>
  <!-- <Home /> -->
  <Banner />
</main>

<style>
</style>
