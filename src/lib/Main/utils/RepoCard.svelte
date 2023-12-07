<script lang="ts">
    import RepoCard, { type Theme } from "svelte-repo-card";

    export let slug: string;

    const theme: Theme = {
        text: "white",
        link: "var(--blue)",
        background: "var(--crust)",
        border: "var(--base)",
    };
</script>

<RepoCard {slug} {theme} />