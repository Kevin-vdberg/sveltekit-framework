<script lang="ts">
    import {onMount} from "svelte";
    import {GoogleTracking} from "$lib/lxdigital/Integrations/Google";
    import {ConsentState} from "$lib/globals";

    interface Props {gTagId: string}
    const {gTagId}: Props = $props();

    onMount(() => {

        const _consentState: ConsentState = ConsentState.getConsentState();

        if (typeof window !== 'undefined') {

            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${gTagId}`;
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            window.gtag= function() {
                window.dataLayer.push(arguments);
            }

            window.gtag('js', new Date());
            _consentState.registerTrackingService(GoogleTracking.getInstance());

            window.gtag('config', gTagId);
        }
    });
</script>

<svelte:head>
    <link rel="preconnect" href="https://www.googletagmanager.com" />
    <link rel="preconnect" href="https://www.google-analytics.com" />
</svelte:head>