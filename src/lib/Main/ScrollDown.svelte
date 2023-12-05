<script lang="ts">
    import Fa from "svelte-fa";
    import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="scrollDown">
    <a href="#about">
        <Fa icon={faAnglesDown} style="display: inline-block;" primaryColor="var(--col)" />
        <br />
        Scroll
        <br />
        <Fa icon={faAnglesDown} style="display: inline-block;" primaryColor="var(--col)" />
    </a>
</div>

<style>
    .scrollDown {
        width: 100%;
        text-align: center;
        font-size: 2vw;
        line-height: 2vw;
    }

    br {
        font-size: 2vw;
    }

    .scrollDown a {
        display: inline-block;
        font-size: 2vw;
        font-family: "Offside";
        --col: white; /* arrow color */
        color: white; /* text color */
        line-height: 4vw;
        padding-top: 0;

        transition: all 0.1s ease-out;
    }

    .scrollDown a:hover {
        /* transform: scale(1.05); */
        line-height: 3vw;
        padding-top: 2vw;

        --col: var(--mauve); /* arrow color */
        color: var(--lavender); /* text color */
    }
</style>