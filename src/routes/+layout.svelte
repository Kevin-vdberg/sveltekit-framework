<script lang="ts">
	import '../app.css';
    import {AppState} from "$lib/globals";
    import GoogleTag from "$lib/components/tracking/GoogleTag/GoogleTag.svelte";
    import GoogleTagManager from "$lib/components/tracking/GoogleTagManager/GoogleTagManager.svelte";
    import CookieBanner from "$lib/components/tracking/CookieBanner/CookieBanner.svelte";
    import GeminiCTA from "$lib/components/gemini/GeminiCTA/GeminiCTA.svelte";
    import MainNavigation from "$lib/components/navigation/MainNavigation/MainNavigation.svelte";
    import Footer from "$lib/components/static/Footer/Footer.svelte";

	let { data, children } = $props();
    let appState = AppState.getInstance();
</script>


{#if appState.GoogleTagActive && data.googleTrackingId}
    <GoogleTag gTagId={data.googleTrackingId} />
{:else if appState.GoogleTagManagerActive && data.googleTrackingId}
    <GoogleTagManager gtmId={data.googleTrackingId} />
{/if}

<header class="w-dvw h-[75px] md:h-[75px] sticky top-0">
    <MainNavigation />
</header>

<main>
    {@render children()}
</main>

<footer class="bg-gray-900 text-neutral-200">
    <Footer />
</footer>

{#if appState.CustomCookieBannerActive}
    <CookieBanner />
{:else if appState.CMPCookieBannerActive}
<!--    TODO: Add a component for CMP cookie banner-->
    <CookieBanner />
{/if}
{#if appState.GeminiActive}
    <div class="fixed z-100 bottom-6 right-6">
        <GeminiCTA />
    </div>
{/if}


