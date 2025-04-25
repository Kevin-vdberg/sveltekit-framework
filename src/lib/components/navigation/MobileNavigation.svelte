<!-- src/lib/components/Navigation.svelte -->
<script lang="ts">
    import { fade } from 'svelte/transition';

    export let links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' }
    ];

    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>

<nav class="bg-white shadow-sm dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <!-- Logo / Brand -->
            <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-xl font-bold text-gray-900 dark:text-white">
                    Your Brand
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                {#each links as link}
                    <a
                            href={link.href}
                            class="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                        {link.name}
                    </a>
                {/each}
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button
                        type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                        aria-expanded="false"
                        on:click={toggleMobileMenu}
                >
                    <span class="sr-only">Open main menu</span>
                    {#if mobileMenuOpen}
                        <!-- Close icon -->
                        <svg
                                class="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {:else}
                        <!-- Menu icon -->
                        <svg
                                class="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    {/if}
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
        <div
                transition:fade
                class="md:hidden fixed inset-0 bg-white dark:bg-gray-800 z-50 mt-16 overflow-y-auto"
        >
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {#each links as link}
                    <a
                            href={link.href}
                            on:click={closeMobileMenu}
                            class="block px-3 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    >
                        {link.name}
                    </a>
                {/each}
            </div>
        </div>
    {/if}
</nav>