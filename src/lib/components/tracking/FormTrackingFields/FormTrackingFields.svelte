<script lang="ts">
    import {AppState} from "$lib/globals";
    import {onMount} from "svelte";
    import {page} from "$app/state";

    const appState = AppState.getInstance();
    let gclid: string | null = $state(null);

    onMount(() => {
        if(appState.GoogleTrackingActive) {
            gclid = page.url.searchParams.get('gclid') || null; //gclid will be null if no google tracking is active or gclid cannot be extracted from url. In that case will not be send to server
        }
    });

</script>

{#if gclid}
    <input type="hidden" name="gclid" value={gclid} />
{/if}
