<script lang="ts">
    export let selectedProject;

    let h = 100 + Math.random()*100;

    // setInterval(() => {
    //     h = 100 + Math.random()*100;
    // }, 1000);

</script>

<div class="frame" style:height="{h}px">
</div>
<!-- <img class={_class} {id} {src} {alt} on:click={() => { console.log("test"); selectedProject = id; } } on:keydown /> -->

<style>
    .frame {
        display: inline-block;
        width: 100%;
        border-radius: 1em;
        background-color: var(--base);
        text-align: center;
        border: 1px solid red;
    }
</style>