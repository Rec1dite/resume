<script lang="ts">
    import Socials from "./Socials.svelte";
    import Gallery from "./Gallery.svelte";
    import Bio from "./Bio.svelte";
    import { type CollageItem } from "./Collage.svelte";
    import Item from "./Item.svelte";

    let galleryItems: CollageItem[] = [
        {
            element: "img",
            props: {
                src: "https://via.placeholder.com/150",
                width: "100%",
                style: "display: inline-block; border-radius: 1em"
            }
        },
        {
            component: Item,
            props: {
                src: "https://via.placeholder.com/150",
            }
        }
    ];
    galleryItems = [...galleryItems, ...galleryItems, ...galleryItems];

</script>

<section id="about">
    <h1>About me</h1>
    <Bio />
</section>

<section id="programming">
    <h1>Projects</h1>
    <Gallery content={galleryItems} />
</section>

<section id="programming">
    <h1>Programming</h1>
    <img src="thumbnails/CeeVee.jpg" alt="">
    <p>CeeVee Graphics Engine</p>
    <img src="thumbnails/Splinter2.jpg" alt="">
    <p>Splinter 2D Physics Engine</p>
    <img class="pixelArt" src="thumbnails/LegoGameBuilder.png" alt="">
    <p>Lego Game Builder</p>
    <img src="thumbnails/Hashed.jpg" alt="">
    <p>Hashed VR Cinematic</p>
    <img src="thumbnails/TypingTest.jpg" alt="">
    <p>Typing Test</p>
</section>

<section id="games">
    <h1>Games</h1>
    <a href="https://slightlyaboveaverage.itch.io/delirium">
    <img src="thumbnails/Delirium1.png" alt="">
    <p>Delirium<br/>Endless Shooter</p>
    </a>
    <img src="thumbnails/KnockOff.png" alt="">
    <p>Knock Off!<br/>Multiplayer Platformer</p>
    <img src="thumbnails/SpellingBee.png" alt="">
    <p>Spelling Bee Quiz App</p>
    <img src="thumbnails/ARTSurvival.jpg" alt="">
    <p>ART: Survival Evolved<br/>Matric VR Art Final</p>
    <img src="thumbnails/placeholder.jpg" alt="">
    <p>Space Tower Defense</p>
</section>

<section id="graphics">
    <h1>Graphics</h1>
    <img src="thumbnails/Posters.png" alt="">
    <p>Posters</p>
    <img src="thumbnails/Iconography.jpg" alt="">
    <p>Iconography</p>
    <img src="thumbnails/Renders.jpg" alt="">
    <p>Renders</p>
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
        image-rendering: pixelated;
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