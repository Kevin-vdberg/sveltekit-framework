<script lang="ts">
import {onMount} from "svelte";
import {ConsentState, routes} from "$lib/globals";

let showBanner = $state(false);
let customizeSettings = $state(false);
let consentState: ConsentState;
let consentSettings: Tracking.ConsentSettings = $state({essential: true, analytics: false, marketing: false});


onMount(() => {
    consentState = ConsentState.getConsentState();
    if(!consentState.ConsentSetByUser){showBanner = true;}
    consentSettings = {...consentState.ActiveConsent};
})

$effect(()=> {consentSettings = {...consentState.ActiveConsent};});

function openBanner(){
    showBanner = true;
}

function customizeConsentSettings(){
    consentState.SetConsentSettings(consentSettings);
    showBanner=false;
}

</script>



{#if !showBanner}
    <button onclick={()=> {openBanner()}} aria-label="cookie banner" id="open-cookie-banner"
            class="cookie-btn" >
        <svg width="60%" height="60%" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 md:size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>

<!--        <svg fill="currentColor" width="60%" height="60%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56.011 56.011" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M53.979,41.569c-0.426-0.023-0.791-0.099-1.116-0.23c-0.868-0.35-1.547-1.016-1.913-1.875 c-0.366-0.86-0.376-1.812-0.026-2.679c0.329-0.816,0.959-1.476,1.773-1.854l1.706-0.793l-1.612-0.97 c-1.322-0.796-1.866-2.407-1.292-3.833c0.112-0.279,0.286-0.556,0.53-0.843l1.174-1.384l-1.797-0.254 c-0.394-0.056-0.748-0.148-1.084-0.284c-2.365-0.953-3.515-3.652-2.563-6.018c0.204-0.508,0.501-0.977,0.883-1.394l0.723-0.789 l-0.836-0.668c-1.148-0.915-2.394-1.716-3.703-2.379c-2.62-1.329-5.424-2.085-8.269-2.277C34.08,5.332,26.998,0,19.06,0 C8.884,0,0.605,8.523,0.605,19c0,8.413,5.383,15.772,13.166,18.167c0.172,1.351,0.467,2.696,0.9,4.019 c1.786,5.458,5.59,9.894,10.713,12.49c3.058,1.551,6.367,2.334,9.699,2.334c1.663,0,3.332-0.198,4.978-0.591 c0.026,0.002,0.051,0.009,0.077,0.009c0.206,0,0.403-0.07,0.572-0.187c0.362-0.098,0.724-0.19,1.083-0.308 c5.458-1.786,9.894-5.591,12.491-10.714c0.169-0.333,0.313-0.673,0.456-1.012l0.667-1.561L53.979,41.569z M2.605,19 c0-0.577,0.029-1.147,0.084-1.709c0.87,0.561,2.481,1.391,4.783,1.701C7.517,18.997,7.562,19,7.606,19 c0.493,0,0.922-0.364,0.99-0.866c0.074-0.548-0.311-1.051-0.858-1.125c-0.152-0.021-0.286-0.053-0.431-0.079 C8.1,16.199,8.605,15.161,8.605,14c0-0.553-0.448-1-1-1s-1,0.447-1,1c0,1.103-0.897,2-2,2c-0.038,0-0.07,0.018-0.107,0.021 c-0.784-0.396-1.209-0.752-1.231-0.771c-0.065-0.057-0.141-0.087-0.215-0.125C4.756,7.615,11.278,2,19.06,2 c3.086,0,6.026,0.913,8.548,2.508c-0.015,0.514-0.098,1.404-0.427,2.293c-3.396-1.122-3.786-0.863-4.13-0.633 c-0.459,0.307-0.583,0.927-0.277,1.387c0.241,0.361,0.676,0.515,1.075,0.416c0.343,0.031,1.237,0.274,2.188,0.569 c-0.222,0.195-0.47,0.37-0.759,0.51c-1.081,0.267-2.744,1.161-2.671,2.99C22.627,12.578,23.07,13,23.604,13 c0.013,0,0.027,0,0.041-0.001c0.552-0.021,0.981-0.487,0.959-1.039c-0.027-0.674,1.202-0.98,1.208-0.981l0.205-0.067 c2.385-1.08,3.196-3.366,3.465-5.03c2.192,1.859,3.931,4.298,4.964,7.129c-0.686,0.022-1.373,0.076-2.058,0.165 c-0.284,0.036-0.559,0.097-0.84,0.144c-0.394,0.067-0.788,0.124-1.18,0.214c-0.453,0.102-0.893,0.235-1.334,0.365 c-0.205,0.061-0.413,0.102-0.617,0.169c-0.023,0.007-0.044,0.018-0.066,0.025c-0.404,0.134-0.794,0.296-1.186,0.453 c-0.273,0.108-0.553,0.204-0.82,0.322c-0.121,0.054-0.234,0.121-0.354,0.177c-2.868,1.337-5.372,3.272-7.378,5.683 C17.779,19.669,16.502,19,15.105,19c-2.481,0-4.5,2.019-4.5,4.5c0,2.321,1.773,4.215,4.032,4.453 c-0.052,0.161-0.104,0.322-0.152,0.484c-0.126,0.425-0.226,0.854-0.325,1.285c-0.053,0.232-0.113,0.461-0.159,0.697 c-0.101,0.517-0.172,1.037-0.234,1.559c-0.019,0.161-0.046,0.319-0.061,0.481c-0.056,0.582-0.08,1.166-0.087,1.751 c-0.001,0.098-0.014,0.192-0.014,0.29c0,0.051,0.002,0.104,0.002,0.155c0.001,0.122-0.006,0.243-0.003,0.365 C7.063,32.652,2.605,26.26,2.605,19z M17.342,22.42c-0.016,0.024-0.034,0.047-0.051,0.072c-0.052,0.076-0.109,0.148-0.159,0.225 c-0.238,0.364-0.452,0.745-0.669,1.125c-0.034,0.059-0.071,0.116-0.104,0.175c-0.033,0.058-0.07,0.114-0.102,0.172 c-0.072,0.131-0.145,0.26-0.214,0.392c-0.035,0.068-0.078,0.13-0.113,0.198c-0.127,0.25-0.224,0.508-0.34,0.761 c-0.025,0.054-0.052,0.106-0.076,0.161c-0.043,0.094-0.096,0.185-0.137,0.279c-0.094,0.013-0.183,0.02-0.27,0.02 c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5c0.96,0,1.827,0.565,2.238,1.418C17.342,22.418,17.342,22.419,17.342,22.42z M41.284,52.99c-0.275-1.611-1.67-3.311-3.797-4.389c-0.493-0.252-1.095-0.053-1.344,0.439s-0.053,1.094,0.44,1.344 c1.734,0.88,2.741,2.245,2.747,3.154c-4.401,0.984-8.967,0.42-13.042-1.644c-0.683-0.346-1.332-0.739-1.961-1.156 c1.512-0.456,2.707-1.673,3.314-2.621c1.032-1.935,3.371-1.705,3.485-1.688c0.533,0.061,1.042-0.324,1.11-0.871 c0.067-0.548-0.323-1.047-0.871-1.114c-0.156-0.021-3.801-0.428-5.447,2.662c-0.073,0.113-1.817,2.765-4.022,1.442 c-0.141-0.084-0.294-0.118-0.447-0.128c-2.209-2.163-3.888-4.833-4.877-7.856c-0.395-1.208-0.666-2.437-0.821-3.67l-0.039-0.414 c-0.042-0.407-0.071-0.815-0.087-1.223c-0.01-0.222-0.016-0.438-0.017-0.647c-0.001-0.121,0.008-0.241,0.01-0.362 c0.007-0.546,0.031-1.088,0.082-1.622c0.015-0.15,0.039-0.3,0.057-0.45c0.057-0.478,0.126-0.952,0.217-1.418 c0.043-0.216,0.097-0.429,0.147-0.644c0.091-0.393,0.187-0.784,0.301-1.167c0.018-0.06,0.041-0.118,0.059-0.177 c0.847,0.179,1.727,0.154,2.573-0.123c0.307-0.101,0.6-0.229,0.876-0.382c0.313,0.989,1.007,1.856,2.003,2.361 c0.145,0.074,0.299,0.108,0.451,0.108c0.365,0,0.717-0.2,0.893-0.548c0.25-0.492,0.053-1.095-0.44-1.344 c-0.984-0.499-1.378-1.705-0.88-2.688c0.25-0.492,0.053-1.095-0.44-1.344c-0.493-0.252-1.095-0.053-1.344,0.439 c-0.362,0.716-0.981,1.246-1.742,1.495c-0.41,0.135-0.834,0.171-1.251,0.126c0.079-0.184,0.161-0.366,0.245-0.549 c0.103-0.221,0.206-0.441,0.317-0.657c0.065-0.126,0.127-0.253,0.194-0.378c0.102-0.19,0.211-0.373,0.318-0.559 c0.149-0.257,0.302-0.511,0.462-0.76c0.15-0.233,0.306-0.464,0.466-0.691c0.278-0.393,0.558-0.783,0.863-1.154 c0.021-0.026,0.045-0.051,0.066-0.076c1.567-1.884,3.481-3.468,5.644-4.654c0.146-0.08,0.299-0.147,0.448-0.223 c0.392-0.202,0.786-0.4,1.192-0.575c0.303-0.13,0.617-0.239,0.928-0.354c0.282-0.105,0.56-0.219,0.848-0.311 c0.187-0.06,0.376-0.106,0.563-0.16c0.392-0.112,0.786-0.218,1.188-0.306c0.186-0.041,0.372-0.076,0.558-0.112 c0.464-0.088,0.933-0.161,1.408-0.216c0.11-0.013,0.22-0.029,0.331-0.039C33.843,15.036,34.47,15,35.105,15 c0.118,0,0.234,0.009,0.351,0.017c0.112,0.008,0.225,0.016,0.338,0.019l0.949,0.031c0.336,0.028,0.672,0.065,1.006,0.111 c-0.575,2.224,0.444,4.632,2.574,5.711c0.145,0.074,0.299,0.108,0.451,0.108c0.365,0,0.717-0.2,0.893-0.548 c0.25-0.492,0.053-1.095-0.44-1.344c-1.319-0.669-1.924-2.186-1.504-3.555c1.437,0.353,2.845,0.871,4.198,1.556 c0.896,0.454,1.758,0.979,2.575,1.565c-0.235,0.358-0.433,0.737-0.593,1.134c-1.364,3.388,0.282,7.255,3.67,8.62 c0.039,0.016,0.079,0.031,0.118,0.046c-0.017,0.039-0.033,0.077-0.049,0.116c-0.75,1.862-0.341,3.917,0.949,5.337 c-0.668,0.568-1.191,1.289-1.524,2.112c-0.549,1.363-0.534,2.858,0.041,4.21c0.576,1.352,1.643,2.397,3.006,2.947 c0.123,0.05,0.249,0.094,0.377,0.134C50.155,47.932,46.177,51.354,41.284,52.99z"></path> <path d="M37.824,28.03c0.543-1.072,0.637-2.291,0.263-3.434c-0.374-1.143-1.17-2.071-2.242-2.614 c-2.213-1.123-4.926-0.233-6.048,1.979c-1.122,2.213-0.234,4.927,1.979,6.048c0.64,0.325,1.333,0.489,2.031,0.489 c0.47,0,0.943-0.075,1.403-0.226C36.352,29.899,37.281,29.103,37.824,28.03z M36.04,27.126c-0.302,0.596-0.817,1.038-1.452,1.246 c-0.635,0.207-1.312,0.155-1.908-0.146c-1.229-0.623-1.722-2.131-1.099-3.36c0.44-0.868,1.321-1.369,2.234-1.369 c0.379,0,0.765,0.087,1.126,0.27c0.596,0.303,1.038,0.818,1.246,1.453C36.394,25.854,36.342,26.53,36.04,27.126z"></path> <path d="M16.105,14c2.481,0,4.5-2.019,4.5-4.5S18.586,5,16.105,5s-4.5,2.019-4.5,4.5S13.624,14,16.105,14z M16.105,7 c1.378,0,2.5,1.121,2.5,2.5s-1.122,2.5-2.5,2.5s-2.5-1.121-2.5-2.5S14.727,7,16.105,7z"></path> <path d="M29.515,34.47c-1.071-0.544-2.291-0.636-3.434-0.264c-1.143,0.374-2.071,1.17-2.615,2.242s-0.637,2.291-0.263,3.434 c0.374,1.143,1.17,2.071,2.242,2.614c0.65,0.33,1.343,0.486,2.027,0.486c1.643,0,3.229-0.902,4.021-2.465 C32.616,38.305,31.728,35.591,29.515,34.47z M29.71,39.613c-0.623,1.229-2.13,1.721-3.36,1.1c-0.596-0.303-1.038-0.818-1.246-1.453 c-0.208-0.635-0.156-1.312,0.146-1.907c0.302-0.596,0.817-1.038,1.452-1.246c0.256-0.083,0.519-0.125,0.78-0.125 c0.388,0,0.772,0.092,1.128,0.271C29.84,36.876,30.333,38.384,29.71,39.613z"></path> <path d="M42.467,37.672c-1.071-0.544-2.292-0.637-3.434-0.264c-1.143,0.374-2.071,1.17-2.615,2.242s-0.637,2.291-0.263,3.434 c0.374,1.143,1.17,2.071,2.242,2.614c0.65,0.33,1.343,0.486,2.027,0.486c1.643,0,3.229-0.902,4.021-2.465 C45.568,41.507,44.68,38.793,42.467,37.672z M42.662,42.815c-0.624,1.229-2.13,1.722-3.36,1.1 c-0.596-0.303-1.038-0.818-1.246-1.453c-0.208-0.635-0.156-1.312,0.146-1.907c0.302-0.596,0.817-1.038,1.452-1.246 c0.256-0.083,0.519-0.125,0.78-0.125c0.388,0,0.772,0.092,1.128,0.271C42.792,40.079,43.286,41.586,42.662,42.815z"></path> </g> </g></svg>-->
    </button>
{:else}
    <div id="overlay" class="fixed top-0 left-0 w-screen h-screen z-110"></div>
    <div id="cookie-banner"
         class="background max-h-dvh overflow-y-scroll fixed z-120 flex flex-col bottom-0 w-full px-8 py-4 gap-6 md:shadow-lg md:w-auto md:h-auto md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
    {#if !customizeSettings}
        <p class="text-sm">
            We use cookies and similar tracking technologies to improve your browsing experience,
            personalize content and ads (including enhanced conversions and tracking of offline conversions),
            provide social media features, and analyze our traffic.
            You can accept all these technologies by clicking "Accept All" or customize your preferences by clicking "Customize Cookies."
        </p>
        <p class="text-sm">
            We value your privacy.
            For more detailed information about the cookies and tracking technologies we use,
            the purposes for which we use them,
            how we handle your personal data related to these technologies (including in the context of enhanced conversions),
            and how you can manage your preferences or withdraw your consent at any time, please see our <a href={routes.info.privacyPolicy}>Privacy Policy</a>.
        </p>

        <div class="flex gap-2">
            <button type="button" onclick={()=> {customizeSettings = !customizeSettings; }} class="cookie-banner-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <span class="hidden md:block">Customize</span>
            </button>
            <button type="button" onclick={()=>{consentState.SetAllConsent(false); showBanner=false; }} class="cookie-banner-btn text-xs">Reject all</button>
            <button type="button" onclick={()=>{consentState.SetAllConsent(true); showBanner=false; }} class="cookie-banner-btn text-xs">Accept all</button>
        </div>

    {:else}
        <div class="flex gap-8">
            <div>
                <h3 class="w-full">Essential cookies</h3>
                <div class="flex">
                    <label class="inline-flex items-center h-full flex-1">
                        <input type="checkbox" value="" class="sr-only peer disabled:opacity-50" checked disabled>
                        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-background-field-dark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary opacity-50"></div>
                    </label>
                    <p class="text-xs flex-3">
                        These cookies are strictly necessary for the basic operation of our website and enable core functionalities such as
                        page navigation and access to secure areas.
                        1  Without these cookies, the website cannot function properly .
                    </p>
                </div>
            </div>

        </div>
        <div class="flex gap-8">
            <div>
                <h3 class="w-full">Analytics cookies</h3>
                <div class="flex">
                    <label class="inline-flex items-center cursor-pointer h-full flex-1">
                        <input type="checkbox" value="" class="sr-only peer" bind:checked={consentSettings.analytics}>
                        <div class="relative w-11 h-6 bg-background-field rounded-full peer dark:bg-background-field-dark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary"></div>
                    </label>
                    <p class="text-xs flex-3">
                        These cookies allow us to collect and analyze information about how visitors use our website,
                        such as which pages are visited most often and how users navigate the site.
                        This data helps us to understand and improve the performance and user experience of our website.
                        We may use services like Google Analytics for this purpose.
                    </p>
                </div>
            </div>


        </div>
        <div class="flex gap-8">
            <div>
                <h3 class="w-full">Marketing cookies</h3>
                <div class="flex">
                    <label class="inline-flex items-center cursor-pointer flex-1">
                        <input type="checkbox" value="" class="sr-only peer" bind:checked={consentSettings.marketing}>
                        <div class="relative w-11 h-6 bg-background-field rounded-full peer dark:bg-background-field-dark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:peer-checked:bg-primary"></div>
                    </label>
                    <p class="text-xs flex-3">
                        These cookies are used to track visitors across websites and may be used by advertising companies,
                        including Google Ads, to build a profile of your interests and show you relevant advertisements including showing you ads for our products/services
                        that you have previously shown interest in (remarketing) on other sites.
                        We also use these cookies to enable enhanced conversions, which may involve sharing pseudonymized data.
                        Additionally, these cookies help us attribute conversions that happen offline (e.g., phone calls, in-store purchases)
                        back to your online interactions with our ads.
                    </p>
                </div>
            </div>


        </div>
        <div class="w-full flex justify-evenly items-center">
            <button onclick={()=>{customizeSettings=false;}} class="px-12 py-6 md:px-6 md:py-6">Back</button>
            <button type="button" onclick={()=>{customizeConsentSettings()}} class="cookie-banner-btn">Set cookies</button>
        </div>

    {/if}
    </div>
{/if}