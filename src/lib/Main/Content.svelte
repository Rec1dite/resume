<script>
  import Gallery from "../Gallery.svelte";

</script>
<section id="about">
    <h1>About me</h1>
    <h4>My name is Dino Gironi</h4>
    <p>I'm a Computer Science student with 5+ years of full-stack programming experience.</p>
    <p>Self-taught developer and 3D graphics artist with pro bono experience in everything from Web Development to Machine Learning to Virtual Reality.</p>
    <p>I have a wide range of interests and try to expand my skills in as many technologies as possible.</p>
    <p>This site is intended as a place for me to publish and document some of my projects and endeavours. Happy browsing :)</p>
</section>

<section id="programming">
    <Gallery />
</section>

<section id="programming">
    <h1>Programming</h1>
    <p>Some of the projects I've worked on recently:</p>
    <ul class="cluster">
        <li>
            <img src="thumbnails/CeeVee.jpg" alt="">
            <p>CeeVee Graphics Engine</p>
        </li>
        <li>
            <img src="thumbnails/Splinter2.jpg" alt="">
            <p>Splinter 2D Physics Engine</p>
        </li>
        <li>
            <img class="pixelArt" src="thumbnails/LegoGameBuilder.png" alt="">
            <p>Lego Game Builder</p>
        </li>
        <li>
            <img src="thumbnails/Hashed.jpg" alt="">
            <p>Hashed VR Cinematic</p>
        </li>
        <li>
            <img src="thumbnails/TypingTest.jpg" alt="">
            <p>Typing Test</p>
        </li>
    </ul>
</section>

<section id="games">
    <h1>Games</h1>
    <ul class="cluster">
        <li>
            <a href="https://slightlyaboveaverage.itch.io/delirium">
            <img src="thumbnails/Delirium1.png" alt="">
            <p>Delirium<br/>Endless Shooter</p>
            </a>
        </li>
        <li>
            <img src="thumbnails/KnockOff.png" alt="">
            <p>Knock Off!<br/>Multiplayer Platformer</p>
        </li>
        <li>
            <img src="thumbnails/SpellingBee.png" alt="">
            <p>Spelling Bee Quiz App</p>
        </li>
        <li>
            <img src="thumbnails/ARTSurvival.jpg" alt="">
            <p>ART: Survival Evolved<br/>Matric VR Art Final</p>
        </li>
        <li>
            <img src="thumbnails/placeholder.jpg" alt="">
            <p>Space Tower Defense</p>
        </li>
    </ul>
</section>

<section id="graphics">
    <h1>Graphics</h1>
    <ul class="cluster">
        <li>
            <img src="thumbnails/Posters.png" alt="">
            <p>Posters</p>
        </li>
        <li>
            <img src="thumbnails/Iconography.jpg" alt="">
            <p>Iconography</p>
        </li>
        <li>
            <img src="thumbnails/Renders.jpg" alt="">
            <p>Renders</p>
        </li>
    </ul>
</section>

<section id="contact">
    <h1>Contact</h1>
    <p>Email: <b>dino@gims-cc.co.za</b></p>
</section>

<style>
    * {
        image-rendering: initial;
    }

    h1 {
        font-family: "Offside";
        font-size: 3.5em;
        font-weight: 300;
        margin-bottom: 1em;
        filter: drop-shadow(0px 4px 6px black);
    }

    section {
        /* background-image: url("pattern1.png"); */
        image-rendering: pixelated;
        background-size: 1% auto;
        box-shadow: inset 0 0 0.5vw rgba(0, 0, 0, 0.8);
        margin: 5vw 0px;
        padding: 1vw 0px;
    }

    #entry {
        margin: 5vw;
        display: block;
    }

    ul {
        list-style: none;
    }

    /* An adaptively tiled image array */
    .cluster {
        margin: 0px 10vw;
        padding: 0px;
        --grid-min-size: 20rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--grid-min-size), 1fr));
        grid-gap: 1rem;
        align-items: center;
    }

    .cluster > li {
        padding: 0px;
        position: relative;
        text-align: center;
        margin: 1vw;
    }

    /* Text displays over image */
    .cluster > li p {
        background-color: rgba(0, 0, 0, 0.4);
        /* pointer-events: none; */
        position: absolute;
        top: 0%;
        left: 5%;
        right: 5%;
        transition: transform 0.1s, background-color 0.1s, color 0.1s;
    }

    .cluster > li:hover p{
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(255, 255, 255, 0.3);
        transform: translate(-0.3rem, -0.3rem) scale(110%);
    }

    .cluster > li img {
        width: 100%;
        border: 0.4rem solid var(--peach);
        box-shadow: 0rem 0rem var(--yellow);
        transition: transform 0.1s, box-shadow 0.2s;
    }

    .cluster > li:hover img {
        transform: translate(-0.3rem, -0.3rem);
        box-shadow: 0.3rem 0.3rem var(--yellow);
    }

    img.pixelArt {
        image-rendering: pixelated;
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