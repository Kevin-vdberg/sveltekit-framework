<script lang="ts">
import { goto, afterNavigate } from "$app/navigation";
import { fly } from 'svelte/transition';
import Logo from "$lib/components/logo/Logo.svelte";
import { routes } from "$lib/globals";

interface NavigationInfo { text: string, destination: string }

const navigationItems: NavigationInfo[] = [
    {   text: 'Home', destination: routes.mainPage.home },
    {   text: 'Services', destination: routes.mainPage.services },
    {   text: 'About us', destination: routes.mainPage.about },
    {   text: 'Contact', destination: routes.mainPage.contact },
    ]
const cta: NavigationInfo = { text: 'Main cta', destination: routes.request.form}

let mobileMenuVisible = $state(false);

afterNavigate(() => {mobileMenuVisible = false; })

function toggleMobileMenu(){    mobileMenuVisible = !mobileMenuVisible; }


</script>

<nav class="background flex shadow-sm w-full h-full items-center justify-around">
    <a href="/">
        <figure id="logo" class="flex items-center gap-4">
            <Logo />
            <figcaption class="text-xl font-bold">Company name</figcaption>
        </figure>
    </a>
    <div class="md:hidden flex items-center">
        <button type="button" onclick={()=> toggleMobileMenu()} aria-expanded="false"
        class="p-2">
            {#if mobileMenuVisible}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            {/if}
        </button>
    </div>

<!--    Mobile Navigation-->
    {#if mobileMenuVisible}
        <div transition:fly class="md:hidden fixed inset-0 background z-50 mt-[75px] overflow-y-auto flex flex-col justify-around">
            <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {#each navigationItems as {text,destination}}
                <li>
                    <a href={destination} target="_self" class="block px-3 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                        <span>{text}</span>
                    </a>
                </li>
                {/each}
            </ul>
            <button class="cta-btn" onclick={ ()=> goto(cta.destination)} type="button">{cta.text}</button>
        </div>
    {/if}

<!--    Desktop Navigation-->
    <ul class="hidden md:flex flex-col justify-around md:flex-row md:justify-end md:gap-16">
        {#each navigationItems as {text,destination}}
            <li>
                <a href={destination} target="_self" class="p-6 cursor-pointer hover:text-primary transition-all">
                    <span>{text}</span>
                </a>
            </li>
        {/each}
    </ul>
    <div id="menu-action" class="hidden md:block">
        <button class="cta-btn" onclick={ ()=> goto(cta.destination)} type="button">{cta.text}</button>
    </div>


</nav>




