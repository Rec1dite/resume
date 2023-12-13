<script lang="ts">
    import Socials from "./Socials.svelte";
    import Gallery from "./Gallery.svelte";
    import Bio from "./Bio.svelte";
    import { type CollageItem } from "./Collage.svelte";
    import ProjectItem from "./ProjectItem.svelte";
    import { projects } from "../../content/projects";

    const galleryItems: CollageItem[] = Object.keys(projects).sort().map((p) => ({
        component: ProjectItem,
        props: {
            project: projects[p]
        }
    }));

    // let galleryItems: CollageItem[] = [
    //     {
    //         element: "img",
    //         props: {
    //             src: "https://via.placeholder.com/150",
    //             width: "100%",
    //             style: "display: inline-block; border-radius: 1em"
    //         }
    //     },
    //     {
    //         component: ProjectItem,
    //         props: {
    //             src: "https://via.placeholder.com/150",
    //         }
    //     }
    // ];

</script>

<section id="about">
    <h1>About me</h1>
    <Bio />
</section>

<section id="projects">
    <h1>Projects</h1>
    <Gallery content={galleryItems} />
</section>

<section id="skills">
    <h1>Skills</h1>
</section>

<section id="contact" >
    <h1>Contact</h1>
    <p>Email: <b>rec1dite@gmail.com</b></p>
    <Socials />
</section>

<style>
    * {
        image-rendering: initial;
    }

    h1 {
        font-family: "Offside";
        font-size: 3.5em;
        font-weight: 300;
        line-height: 1em;
        margin-bottom: 1em;
        filter: drop-shadow(0px 4px 6px black);
    }

    section {
        background-image: url("../../assets/pattern2.png");
        background-size: 0.8% auto;
        box-shadow: inset 0 3px 20px rgba(0, 0, 0, 0.4);
        margin: 5em 0px;
        padding: 5em 0px;
    }

    #homeButton {
        width: 10vh;
        height: auto;
        transform: translate(-12vh, 0vw);
    }

    #homeButton:hover {
        transform: translate(-12vh, 0vw) scale(105%);
    }

    #main {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 0px;
    }
</style>