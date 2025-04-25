<script>
    import HeroSection from "$lib/components/sections/HeroSection/HeroSection.svelte";
    import PortfolioSection from "$lib/components/sections/PortfolioSection/PortfolioSection.svelte";
    import ServicesSection from "$lib/components/sections/ServicesSection/ServicesSection.svelte";
    import AboutUsSection from "$lib/components/sections/AboutUsSection/AboutUsSection.svelte";
    import ContactSection from "$lib/components/sections/ContactSection/ContactSection.svelte";
</script>

<!--Add the relevant sections for the landing page in this div. Don't forget to add them to the menu as well (and the routes global)-->

<div id="landing-page-sections">
    <HeroSection />
    <PortfolioSection />
    <ServicesSection />
    <AboutUsSection />
    <ContactSection />
</div>
