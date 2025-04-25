<script lang="ts">
    import {onMount} from "svelte";

    interface Props { gtmId: string }
    const {gtmId}:Props = $props();

    onMount(()=>{
        if (typeof window !== 'undefined'){

            const script = document.createElement('script');
            const dataLayerId = 'dataLayer'!='dataLayer'?'&l='+'dataLayer':'';

            script.src = 'https://www.googletagmanager.com/gtm.js?id='+gtmId+dataLayerId;
            script.async = true;
            document.head.appendChild(script);

            const firstScript = document.getElementsByTagName('script')[0];
            //@ts-ignore
            firstScript.parentNode.insertBefore(script,firstScript);


            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        }
    });
</script>

<svelte:head>
    <link rel="preconnect" href="https://www.googletagmanager.com" />
</svelte:head>