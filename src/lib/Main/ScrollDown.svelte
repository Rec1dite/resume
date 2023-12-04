<script lang="ts">
    import Fa from "svelte-fa";
    import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="scrollDown">
    <a href="#about">
        <Fa icon={faAnglesDown} style="display: inline-block;" primaryColor="var(--col)" />
        <br /><br />
        Scroll
        <br /><br />
        <Fa icon={faAnglesDown} style="display: inline-block;" primaryColor="var(--col)" />
    </a>
</div>

<style>
    .scrollDown {
        width: 100%;
        text-align: center;
        font-size: 2vw;
    }

    .scrollDown a {
        display: inline-block;
        font-family: "Offside";
        --col: white; /* arrow color */
        color: white; /* text color */

        transition: all 0.1s ease-in-out;
    }

    .scrollDown a:hover {
        transform: scale(1.05);

        --col: var(--mauve); /* arrow color */
        color: var(--lavender); /* text color */
    }
</style>