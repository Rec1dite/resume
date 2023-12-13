<script context="module" lang="ts">
  import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

    export type Skill = {
        name: string;
        devicon?: string;
        fa?: IconDefinition;
        text?: string;
    };
</script>

<script lang="ts">
    import Fa from "svelte-fa";
import { skills } from "../../content/skills";
    import Devicon from "./utils/Devicon.svelte";

    function toTitleCase(str: string) {
        return str.replace(/\w\S*/g, (txt) => 
            txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
        );
    }
    const colors = [
        "rosewater",
        "flamingo",
        "pink",
        "mauve",
        "red",
        "maroon",
        "peach",
        "yellow",
        "green",
        "teal",
        "sky",
        "sapphire",
        "blue",
        "lavender"
    ];

    function toColor(str: string) {
        // Hash string
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        return colors[Math.abs(hash) % colors.length];
    }
</script>

<div class="w-full max-w-6xl mx-auto box">
    {#each Object.keys(skills) as col}
    <div class="col">
        <h1>{toTitleCase(col)}</h1>
        <div class="skills">
            {#each skills[col] as skill}
            <span style="line-height: 1.4em;">
                <span class="skillIcon">
                    {#if skill?.devicon}
                    <Devicon icon={skill.devicon} style="float: left; font-size: 1.5em; padding-right: 0.4rem; color: var(--{toColor(skill.name)});" />
                    {:else if skill?.fa}
                        <Fa icon={skill.fa} style="float: left; font-size: 1.4em; padding-right: 0.4rem;" primaryColor="var(--{toColor(skill.name)})" />
                    {:else if skill?.text}
                        <span style="float: left; font-family: monospace; font-weight: bold; font-size: 1.5em; color: var(--{toColor(skill.name)})">
                            {skill.text}
                        </span>
                    {/if}
                </span>
                <span class="skillName" style="float: right;">
                    {skill.name}
                </span>
                <hr class="dots" />
            </span>
            <br />
            {/each}
        </div>
    </div>
    {/each}
</div>

<style>
    h1 {
        font-family: "Offside";
        font-size: 2em;
        font-weight: 100;
        line-height: 1em;
        margin-top: 1em;
        margin-bottom: 1em;
        filter: drop-shadow(0px 4px 6px black);
    }

    .box {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .box > .col > .skills {
        width: 10em;
        margin: auto;
        line-height: 1.2em;
    }

    .skillName {
        padding-left: 0.5em;
    }

    .box > .col > .skills .dots {
        height: 1em;
        border: none;
        border-bottom: 1px dashed #ffffff2f;
    }
</style>