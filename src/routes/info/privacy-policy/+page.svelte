<script lang="ts">
    import {AppState} from "$lib/globals";
    const appState = AppState.getInstance();

    const lastUpdated: string = "18-04-2025"; //TODO: update to use html date
    const DataSecuritySafetyMeasures: string = "{Any specific safety measures}"

    const sectionHeaderStyling: string = "text-2xl";
    const sectionSubHeaderStyling: string = "mx-4 mt-4";
    const sectionTextStyling: string = "mx-4";
    const sectionListStyling: string = "mx-8 list-disc";
    const sectionListItemStyling: string = "";
</script>

<div class="flex flex-col gap-4 px-8 py-6">
<section>
    <h1 class="text-4xl">Privacy Policy</h1>
    <em class={sectionTextStyling}>Last Updated: {lastUpdated}</em>
</section>
<section>
    <h2 class={sectionHeaderStyling}>1. Introduction</h2>
    <p class={sectionTextStyling}>
        This Privacy Policy describes how {appState.CompanyInfo.name} (the "Website," "we," "us," or "our") collects, uses, and shares personal information of users ("you" or "users") of our Website.
        We are committed to protecting your privacy and ensuring the security of your personal information in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).  
    </p>
</section>
<section>
    <h2 class={sectionHeaderStyling}>2. Data Controller</h2>
    <p class={sectionTextStyling}>
        The data controller responsible for your personal information is:  
        {appState.CompanyInfo.name}
        {appState.CompanyInfo.address}
        {appState.CompanyInfo.email}
    </p>
</section>
<section>
    <h2 class={sectionHeaderStyling}>3. Personal Information We Collect</h2>
    <strong class={sectionTextStyling}>We may collect the following types of personal information:</strong>
    <h3 class={sectionSubHeaderStyling}>Information You Provide Directly:</h3>
    <ul class={sectionListStyling}>
        <li>Contact information (e.g., name, email address, phone number) when you contact us or subscribe to our newsletter.</li>
        <li>Account information (e.g., username, password) if you create an account on our Website.</li>
        <li>Order information (e.g., name, shipping address, billing information) if you make a purchase.</li>
        <li>Communication preferences.</li>
        <li>Any other information you voluntarily provide to us.</li>
    </ul>
    <h3 class={sectionSubHeaderStyling}>Information We Collect Automatically:</h3>
    <ul class={sectionListStyling}>
        <li>Usage Data: Information about how you use our Website, such as the pages you visit, the links you click, the time spent on pages, and the website you visited before coming to our Website.</li>
        <li>Device Information: Information about your device, including your IP address, browser type, operating system, device identifiers, and mobile network information.</li>
        <li>Cookies and Similar Tracking Technologies: We use cookies and similar tracking technologies (such as pixels and web beacons) to collect information about your browsing activities. Please see our [Link to your Cookie Policy] for more details on how we use cookies, including those used by Google Analytics and Google Ads.</li>
        <li>
            Information from Third Parties:
            We may receive information about you from third-party services, such as social media platforms if you interact with our social media accounts.  
            As part of enhanced conversions for Google Ads, we may receive pseudonymized data (such as email addresses) that you have provided to us during conversions, which is then shared with Google to improve ad measurement.</li>
    </ul>
</section>
<section>
    <h2 class={sectionHeaderStyling}>4. How We Use Your Personal Information</h2>
    <strong class={sectionTextStyling}>We may use your personal information for the following purposes:</strong>
</section>
    <ul class={sectionListStyling}>
        <li>To provide and maintain our Website and its services.  </li>
        <li>To personalize your experience on our Website.</li>
        <li>To communicate with you, including responding to your inquiries and providing customer support.  </li>
        <li>To send you newsletters and marketing communications (where you have provided consent).  </li>
        <li>To process and fulfill your orders.</li>
        <li>To monitor and analyze usage trends and improve our Website and services.</li>
        <li>For advertising and marketing purposes, including showing you relevant ads through Google Ads and measuring the effectiveness of our campaigns.</li>
        <li>To facilitate enhanced conversions for Google Ads to improve the accuracy of conversion tracking and optimize our advertising spend.</li>
        <li>To detect, prevent, and address technical issues, security breaches, or fraud.</li>
        <li>To comply with legal obligations.</li>
    </ul>
<section>
    <h2 class={sectionHeaderStyling}>5. Legal Basis for Processing Personal Information</h2>
    <ul class={sectionListStyling}>
        <li>
            <span>
                <strong>Consent:</strong>
                Where you have given us explicit consent to process your personal information for a specific purpose (e.g., marketing cookies, newsletter subscriptions). You have the right to withdraw your consent at any time.
            </span>
        </li>
        <li>
            <span>
                <strong>Contractual Necessity:</strong>
                Where processing is necessary for the performance of a contract with you (e.g., processing your order).  
            </span>
        </li>
        <li>
            <span>
                <strong>Legitimate Interests:</strong>
                Where processing is necessary for our legitimate interests or the legitimate interests of a third party, provided that your interests and fundamental rights do not override those interests (e.g., analyzing website usage to improve our services, preventing fraud).  
            </span>
        </li>
        <li>
            <span>
                <strong>Legal Obligation:</strong>
               Where processing is necessary for compliance with a legal obligation to which we are subject.
            </span>
        </li>
    </ul>
</section>
<section>
    <h2 class={sectionHeaderStyling}>6. Sharing Your Personal Information</h2>
    We may share your personal information with the following categories of recipients:
    <ul class={sectionListStyling}>
        <li>Service Providers: Third-party service providers who assist us in operating our Website, conducting our business, or providing services to you (e.g., hosting providers, payment processors, email marketing providers, analytics providers).  </li>
        <li>Advertising Partners: Third-party advertising partners, including Google, to show you relevant advertisements and measure the effectiveness of our campaigns. For enhanced conversions, we share pseudonymized data with Google.</li>
        <li>Analytics Providers: Third-party analytics providers, including Google Analytics, to analyze website usage.</li>
        <li>Social Media Platforms: If you interact with our social media accounts.</li>
        <li>Legal Authorities: When required by law or legal process.</li>
        <li>Business Transfers: In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
        <li>With your consent: We may share your personal information with other third parties with your explicit consent.</li>
    </ul>
</section>
<section>
    <h2 class={sectionHeaderStyling}>7. International Data Transfers</h2>
    <p class={sectionTextStyling}>Your personal information may be transferred to and processed in countries outside of your country of residence, which may have different data protection laws than your country. We will implement appropriate safeguards to ensure the protection of your personal information in accordance with applicable law when making such transfers, such as using Standard Contractual Clauses approved by the European Commission.  </p>
</section>
<section>
    <h2 class={sectionHeaderStyling}>8. Your Rights Under the GDPR (for EU Residents)</h2>
    <strong class={sectionTextStyling}> If you are a resident of the European Union, you have the following rights regarding your personal information:</strong>
    <ul class={sectionListStyling}>
        <li>Right to Access: You have the right to request access to the personal information we hold about you.</li>
        <li>Right to Rectification: You have the right to request that we correct any inaccurate or incomplete personal information.  </li>
        <li>Right to Erasure ("Right to be Forgotten"): You have the right to request the deletion of your personal information under certain circumstances.</li>
        <li>Right to Restriction of Processing: You have the right to request the restriction of the processing of your personal information under certain circumstances.  </li>
        <li>Right to Data Portability: You have the right to receive your personal information in a structured, commonly used, and machine-readable format and to transmit that data to another controller.  </li>
        <li>Right to Object: You have the right to object to the processing of your personal information under certain circumstances, including for direct marketing purposes.  </li>
        <li>Right Not to Be Subject to Automated Decision-Making: You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.  </li>
        <li>Right to Withdraw Consent: If we are processing your personal information based on your consent, you have the right to withdraw your consent at any time.  </li>
        <li>Right to Lodge a Complaint: You have the right to lodge a complaint with a supervisory authority in your country of residence if you believe that our processing of your personal information infringes the GDPR.  </li>
        <li>To exercise any of these rights, please contact us using the contact information provided in Section 2. We may ask you to verify your identity before responding to your request.</li>
    </ul>

</section>

<section>
    <h2 class={sectionHeaderStyling}>9. Data Security</h2>
    <p class={sectionTextStyling}>We have implemented reasonable technical and organizational measures to protect your personal information from unauthorized access,
        use, disclosure, alteration, or destruction. These measures include
        {DataSecuritySafetyMeasures}
        However, no method of transmission over the internet or method of electronic storage is completely secure,
        and we cannot guarantee absolute security.  
    </p>
</section>
 <section>
     <h2 class={sectionHeaderStyling}>10. Data Retention</h2>
     <p class={sectionTextStyling}>We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, as described in this Privacy Policy, or as required by law. The retention period may vary depending on the type of information and the specific purposes.  </p>
 </section>

<section>
    <h2 class={sectionHeaderStyling}>11. Children's Privacy</h2>
    <p class={sectionTextStyling}>
        Our Website is not intended for children under the age of [Specify Age]. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.  
    </p>
</section>
<section>
    <h2 class={sectionHeaderStyling}>12. Links to Other Websites</h2>
    <p class={sectionTextStyling}>
        Our Website may contain links to other websites that are not operated by us. We are not responsible for the privacy practices of these third-party websites. We encourage you to review the privacy policies of any website you visit.  
    </p>
</section>
<section>
    <h2 class={sectionHeaderStyling}>13. Changes to This Privacy Policy</h2>
    <p class={sectionTextStyling}>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post any changes on this page and update the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically. Significant changes may be communicated to you more directly.  </p>
</section>
    <section>
        <h2 class={sectionHeaderStyling}>14. Contact Us</h2>
        <p class={sectionTextStyling}>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:  </p>
        {appState.CompanyInfo.email}
        <address>
            {appState.CompanyInfo.address}
        </address>
    </section>
</div>
