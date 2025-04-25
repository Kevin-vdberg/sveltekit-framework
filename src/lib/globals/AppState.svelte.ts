import config from "$lib/config.json";
import company from "$lib/company.json"

class AppState{

    private static _instance: AppState;
    readonly _geminiActive:boolean = $state(false);
    readonly _googleTagActive:boolean = $state(false);
    readonly _googleTagManagerActive:boolean = $state(false);
    readonly _customCookieBannerActive: boolean = $state(false);
    readonly _cmpCookieBannerActive:boolean = $state(false);
    readonly _companyInfo: CompanyInfo.Company;


    private constructor() {
        this._geminiActive = config.GeminiActive || false ;

        this._googleTagActive = config.GoogleTagActive || false;
        this._googleTagManagerActive = config.GoogleTagManagerActive || false;

        this._cmpCookieBannerActive = (this._googleTagActive || this._googleTagManagerActive) && config.UseCMP;
        this._customCookieBannerActive = (this._googleTagActive || this._googleTagManagerActive) && !config.UseCMP;

        this._companyInfo = AppState._setCompanyInfo();


    }

    public static getInstance(): AppState {
        if (!this._instance) {
            this._instance = new AppState();
        }
        return this._instance;
    }

    public get GeminiActive(): boolean {return this._geminiActive; }
    public get GoogleTagActive(): boolean {return this._googleTagActive; }
    public get GoogleTagManagerActive(): boolean {return this._googleTagManagerActive; }
    public get GoogleTrackingActive():boolean {return (this._googleTagActive || this._googleTagManagerActive); }
    public get CustomCookieBannerActive(): boolean {return this._customCookieBannerActive; }
    public get CMPCookieBannerActive(): boolean { return this._cmpCookieBannerActive; }
    public get CompanyInfo():CompanyInfo.Company {return this._companyInfo}

    private static _setCompanyInfo(){
        const companyInfo: CompanyInfo.Company = {name: company.name, email: company.email, address: company.address, phone: company.phone };

        return companyInfo;
    }


}

export {AppState}