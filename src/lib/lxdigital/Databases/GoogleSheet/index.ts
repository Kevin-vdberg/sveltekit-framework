import type {IDatabase} from "$lib/lxdigital/Databases/IDatabase";

class GoogleSheetAppScript implements IDatabase{
    private _appscript_token: string;
    private _appscript_url: string;
    private _headers:HeadersInit;

    constructor(appScriptToken:string, appScriptUrl:string){
        this._appscript_token = appScriptToken;
        this. _appscript_url = appScriptUrl;
        this._headers = { 'Content-Type': 'application/json' };

    }

    public doPost(data:Record<string,any>):Promise<Response>{ return this.doPostRequest(data); }
    public doGet():Promise<Response>{ return this.doGetRequest(); }

    public async doPostData<T>(data:Record<string,any>):Promise<T>{
        const response = await this.doPost(data);

        if(!response.ok){
            throw new Error(response.statusText);
        }

        try {
            return await response.json() as T;
        } catch (error)
        {
            throw new Error("Error converting response data to given type");
        }


    }

    private doPostRequest(data:Record<string,any>):Promise<Response>{

        //append the TOKEN
        data.token = this._appscript_token;

        return fetch(this._appscript_url, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data)
        });
    }

    private doGetRequest()
    {
        return fetch(this._appscript_url, {
            method: "GET",
            headers: this._headers
        });
    }
}