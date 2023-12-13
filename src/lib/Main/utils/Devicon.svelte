<script lang="ts">
    export let icon: string;
    export let colored: boolean = false;
    export let style: string = "";
</script>

<i class="devicon-{icon} {colored?'colored':''}" {style} />