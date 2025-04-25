class GoogleTracking implements Tracking.TrackingService{

    private static _instance:GoogleTracking;

    private constructor() {}

    public static getInstance(){
        if(!this._instance) {   this._instance = new GoogleTracking();    }
        return this._instance;
    }

    public sendEvent(eventName: string, eventData:Record<string,string|number|boolean>){
        this.gTagEvent(eventName,eventData)
    }
    public async hashPII(pii: string, hashingType:string="SHA-256"): Promise<string> {
        const encoder = new TextEncoder();
        const cleanedUpData = encoder.encode(pii);
        const buffer = await crypto.subtle.digest(hashingType, cleanedUpData);

        return Array.from(new Uint8Array(buffer))
            .map(b => b.toString(16).padStart(2, '0')).join('');
    }

    public setDefaultConsent(){

        const defaultConsent: TrackingConsent = {ad_storage: "denied", ad_personalization: "denied", ad_user_data: "denied", analytics_storage: "denied"};
        this.gtagConsent("default", defaultConsent);
    }

    public acceptAllConsent(){
        const defaultConsent: TrackingConsent = {ad_storage: "granted", ad_personalization: "granted", ad_user_data: "granted", analytics_storage: "granted"};
        this.gtagConsent("update", defaultConsent);
    }

    public rejectAllConsent(){
        const defaultConsent: TrackingConsent = {ad_storage: "denied", ad_personalization: "denied", ad_user_data: "denied", analytics_storage: "denied"};
        this.gtagConsent("update", defaultConsent);
    }

    public setConsentFromConsentSettings(consent: Tracking.ConsentSettings){
        const consentOptions: TrackingConsent =
            {
                ad_storage: consent.marketing ? 'granted' : 'denied',
                ad_user_data: consent.marketing ? 'granted' : 'denied',
                ad_personalization: consent.marketing ? 'granted' : 'denied',
                analytics_storage: consent.analytics ? 'granted' : 'denied'
            }
            this.gtagConsent("update", consentOptions);
    }

    private gtagConsent(mode:'default' | 'update', consent:TrackingConsent){
        window.gtag('consent', mode, consent);
    }
    private gTagEvent(eventName: string, eventData: any, userData?:any){
        window.gtag('event',eventName,eventData);
    }

}

interface TrackingConsent{
    ad_storage: 'denied' | 'granted',
    ad_user_data: 'denied' | 'granted',
    ad_personalization: 'denied' | 'granted',
    analytics_storage: 'denied' | 'granted'
}

export {GoogleTracking}
export type {TrackingConsent}