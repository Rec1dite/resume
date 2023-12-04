<script lang="ts">
  import { onMount } from "svelte";

    export let delay = 0;

    export let dX = 0.5;
    export let dY = -0.5;
    export let vX = 0.5;
    export let vY = 0.5;

    // 409px = width of 1.png
    const size = 100/409.0; // vw
    const animFrameRate = 30;

    let x = 0;
    let y = 0;

    let prevTime = 0;
    function simulate(time: number) {

        if (time - prevTime > animFrameRate) {
            // Move
            x += vX*(2*Math.random()-1) + dX;
            y += vY*(2*Math.random()-1) + dY;

            if (y <= 0) {
                // Reset
                // x = Math.random()*window.innerWidth/2;
                x = 50*Math.random()-15;
                y = 60;
            }

            // Snap to grid
            x = Math.round(x/size)*size;
            y = Math.round(y/size)*size;

            prevTime = time;
        }

        requestAnimationFrame(simulate);
    }

    onMount(() => {
        setTimeout(() => {
            requestAnimationFrame(simulate);
        }, delay*400);
    });
</script>

<div
    class="firefly"
    style:left="{x}vw"
    style:top="{y}vw"
    style:--firefly-size="{size}vw"
/>

<style>
    .firefly {
        position: absolute;
        width: var(--firefly-size);
        height: var(--firefly-size);
        background-color: var(--yellow);
    }
</style>