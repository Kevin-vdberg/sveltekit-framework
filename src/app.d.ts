// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
        }
    namespace Tracking {
        interface ConsentSettings{
            essential: boolean,
            analytics: boolean,
            marketing: boolean
        }

        interface TrackingService{
            setDefaultConsent(): void;
            acceptAllConsent(): void;
            rejectAllConsent(): void;
            setConsentFromConsentSettings(consent: Tracking.ConsentSettings): void;

        }
    }
    namespace CompanyInfo {
        interface Company {
            name: string,
            email: string,
            phone: string,
            address: string,
        }
        interface TeamMember {
            firstName: string,
            lastName?:string,
            description?: string,
            function?: string,
            avatar?: string

        }
    }

    namespace CRM {
        interface Client{
            id?: number
            email:  string,
            firstName?: string,
            lastName?: string,
            companyName?: string,
            websiteUrl?: string,
            phoneNumber?: string,
            createdAt?: Date,
            modifiedAt?: Date,
        }
    }
	namespace App {
        interface Platform {
            env: {
                DB: D1Database,
                GOOGLE_TRACKING_CODE: string,
                GEMINI_TOKEN: string,
            }
            cf: CfProperties
            ctx: ExecutionContext
        }
    }
}

export {};