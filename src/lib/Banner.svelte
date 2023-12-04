<script lang="ts">
    import Firefly from "./Main/Firefly.svelte";
    import Content from "./Main/Content.svelte";
    import Index from "./Main/Index.svelte";
    import ScrollDown from "./Main/ScrollDown.svelte";

    const numFireflies = 10;

    const parallaxLayers = [
        { depth: -4,    img: "5.png",       imgId: "sky" },
        { depth: -3,    img: "4.png",       imgId: "sun" },
        { depth: -2,    img: "3.png",       imgId: "planet" },
        { depth: -1.2,  img: "2.png",       imgId: "city" },
        { depth: 0,     img: "1.png",       imgId: "wall" },
        { depth: 0,     img: "1.png",       imgId: "wallLightGlow" },
        { depth: -1,    img: "Fog.png",     imgId: "fog" },
        { depth: 0,     img: "Light.png",   imgId: "light" },
    ];
</script>

<div class="parallax">

    <div id="main"></div> <!--For scrolling back to the top-->
    <div class="parallaxGroup">
        <!-- Parallax layers -->
        {#each parallaxLayers as layer}
        <!-- Scale factor = 1 + (-translateZ/perspective) -->
        <!-- Perspective = 1px -->
        <div class="parallaxLayer" style="transform: translateZ({layer.depth}px) scale({1 + (-layer.depth/1.0)});">
            <img src="{layer.img}" class="pix" id="{layer.imgId}" alt="">
        </div>
        {/each}
        <!-- Fireflies -->
        <div class="parallaxLayer" style="transform: translateZ(-0.5px) scale(1.5)">
            {#each Array(numFireflies) as _, i}
                <Firefly delay={i} />
            {/each}
        </div>

        <!-- Content -->
        <div class="parallaxLayer">
            <div id="content">
                <Content />
            </div>
        </div>
    </div>

    <div id="nav">
        <!-- Title -->
        <h1 class="title">
            DINO GIRONI
        </h1>

        <!-- Index -->
        <Index />

        <br /><br /><br />
        <br /><br /><br />

        <!-- Scroll down arrow -->
        <ScrollDown />
    </div>

    <!-- Home button -->
    <div class="homeButton">
        <a href="#main"><img src="HomeButton.png" id="homeButton" alt=""></a>
    </div>
</div>

<style>
    img.pix {
        position: relative;
        image-rendering: pixelated;
    }

    #nav {
        position: absolute;
        width: 15vw;
        border-spacing: 0px 1vw;
        /* border: 1px solid red; */
        left: 2vw;
        top: 5vw;
        z-index: 1000!important;
    }

    .title {
        width: 100%;
        /* padding-left: 0.4em; */
        margin-bottom: 1.2em;

        color: var(--peach);
        font-family: "Offside";
        line-height: 1em;
        font-size: 4em;

        pointer-events: none;
    }

    .parallax {
        perspective: 1px;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .parallaxGroup { /*Do not set overflow: hidden; that will break the parallax effect*/
        position: relative;
        height: 100vh;
        transform-style: preserve-3d;
        /* transform: translate3d(1000px, 0px, -2px) rotateY(0.03deg); 3D view */
    }

    .parallaxLayer {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .homeButton {
        -webkit-tap-highlight-color: transparent; /*Disables blue highlight on moblile*/

        image-rendering: pixelated;
        position: sticky;
        display: block;
        width: 0px;
        height: 0px;
        top: 90vh;
        left: 100vw;
        /*left: calc(100vw - 12vh);*/   /*Scales appropriately for mobile*/
    }

    @keyframes light-swing {
        from { transform: rotate(-3deg); }
        to { transform: rotate(3deg); }
    }

    #light {
        width: 2.5%;
        height: auto;
        left: 85%;
        top: -5vw;
        transform-origin: top center;
        animation: light-swing 2s ease-in-out alternate infinite;
    }

    @keyframes wall-light-glow {
        0% { clip-path: circle(25vw at 88vw 33%); }
        100% { clip-path: circle(25vw at 82vw 33%); }
    }

    #wallLightGlow {
        width: 100%;
        height: auto;
        top: -10vw;
        mix-blend-mode: difference;
        filter: brightness(120%);
        clip-path: circle(200px at 50% 50%);
        animation: wall-light-glow 2s ease-in-out alternate infinite;
    }

    @keyframes fog-hover {
        from { left: 0vw; }
        to { left: 20vw; }
    }

    #fog {
        width: 100%;
        height: auto;
        top: 0vw;
        animation: fog-hover 10s ease-in-out alternate infinite;
    }

    #wall {
        width: 100%;
        height: auto;
        top: -10vw;
    }

    #city {
        width: 90%;
        height: auto;
        top: -2vw;
        left: 0vw;
    }

    #planet {
        width: 100%;
        height: auto;
        top: 25vw;
    }

    @keyframes sun-hover {
        from { top: 10vw; }
        to { top: 10.3vw; }
    }

    #sun {
        width: 50%;
        height: auto;
        top: 10vw;
        left: 10vw;
        animation: sun-hover 2.5s ease-in-out alternate infinite;
    }

    #sky {
        width: 100%;
        height: auto;
    }

    #content {
        position: absolute;
        display: block;
        margin: 0px 0px;
        top: 77vw;
        width: 100%;
        height: auto;

        background-color: var(--base);
        text-align: center;
    }

    #content > section {
        background-image: url("pattern1.png");
        image-rendering: pixelated;
        background-size: 1% auto;
        box-shadow: inset 0 0 0.5vw rgba(0, 0, 0, 0.8);
        margin: 5vw 0px;
        padding: 1vw 0px;
    }

    #content * {
        image-rendering: initial;
    }

    #entry {
        margin: 5vw;
        display: block;
    }

    ul {
        list-style: none;
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