<script lang="ts">
    import Fa from 'svelte-fa'
  import { socials } from '../content/socials';
</script>

<table class="mx-auto mt-10 mb-10">
    <tr>
        {#each socials as social}
        <td>
            <a href="{social.link}" target="_blank">
            <span class="badge-icon hover:variant-filled hover:cursor-pointer">
                <Fa icon={social.icon} />
            </span>
            </a>
        </td>
        {/each}
    </tr>
</table>