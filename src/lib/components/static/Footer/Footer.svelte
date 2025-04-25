<script lang="ts">
    import {onMount} from "svelte";
    import {ConsentState} from '$lib/globals';

    let consent: ConsentState;
    onMount(()=>{
       consent = ConsentState.getConsentState();
    });
</script>

This is the footer

{#if consent}
    {consent.AnalyticsConsent}
{/if}
