class ConsentState{
    readonly CONSENT_KEY: string = "consent";

    private _essential: boolean = $state(true);
    private _analytics: boolean = $state(false);
    private _marketing: boolean = $state(false);
    private _initialized: boolean = $state(false);
    private _trackingServices: Set<Tracking.TrackingService> = new Set();

    private static _instance: ConsentState;

    private constructor(){
        // try to see if choices were stored in local storage, otherwise set default
        const consent = this.getFromLocalStorage(this.CONSENT_KEY);

        if (consent){
            this._initialized = true;
            this._essential = consent.essential;
            this._marketing = consent.marketing;
            this._analytics = consent.analytics;
        }
    }

    public static getConsentState(){
        if(!this._instance) {   this._instance = new ConsentState();    }
        return this._instance;
    }

    public registerTrackingService(service: Tracking.TrackingService){
        this._trackingServices.add(service);
        service.setDefaultConsent();
        service.setConsentFromConsentSettings(this.ActiveConsent);
    }

    public SetAllConsent(accept: boolean) {
        this._analytics=accept;
        this._marketing=accept;

        this.saveToLocalStorage(this.CONSENT_KEY, this.ActiveConsent);
        this.updateTrackingServices();
        this._initialized = true;
    }

    public SetConsentSettings(consentSettings:Tracking.ConsentSettings)
    {
        this._analytics=consentSettings.analytics;
        this._marketing=consentSettings.marketing;

        this.saveToLocalStorage(this.CONSENT_KEY, this.ActiveConsent);
        this.updateTrackingServices();
        this._initialized = true;
    }

    public get ActiveConsent(): Tracking.ConsentSettings{
        return {essential: this._essential, analytics: this._analytics, marketing: this._marketing} as Tracking.ConsentSettings
    }
    public get ConsentSetByUser() {return this._initialized}

    public get AnalyticsConsent(){ return this._analytics; }
    public set AnalyticsConsent(value: boolean){
        this._analytics = value;
        this.saveToLocalStorage(this.CONSENT_KEY, this.ActiveConsent);
        }
    public get MarketingConsent(){ return this._marketing; }
    public set MarketingConsent(value: boolean){
        this._marketing = value;
        this.saveToLocalStorage(this.CONSENT_KEY, this.ActiveConsent);
    }
    public get EssentialConsent(){ return this._essential; }
    public set EssentialConsent(value: boolean){
        this._essential = value;
        this.saveToLocalStorage(this.CONSENT_KEY, this.ActiveConsent);
    }

    private saveToLocalStorage(key:string, value: Tracking.ConsentSettings){
        if (typeof window !== "undefined"){
            window.localStorage.setItem(key,JSON.stringify(value));
        }
    }
    private getFromLocalStorage(key:string): Tracking.ConsentSettings | null{
        let consent: Tracking.ConsentSettings | null = null;
        if (typeof window !== "undefined"){
            const data = window.localStorage.getItem(key) || null;
            try {
                if(data){ consent = JSON.parse(data) as Tracking.ConsentSettings;}
            }
            catch(e){
                console.error("Error converting consent settings");
            }
        }

        return consent;
    }

    private updateTrackingServices(){
        //TODO: Check if this can be done in parallel loops to optimize speed. Not sure if consent functions can be async?
        this._trackingServices.forEach((service) => {service.setConsentFromConsentSettings(this.ActiveConsent)});

    }

}




export {ConsentState}