import {type Actions, fail, redirect} from "@sveltejs/kit";
import {AppState, routes} from "$lib/globals";
import {CloudflareD1, type IDatabase} from "$lib/lxdigital/Databases";

const appState = AppState.getInstance();

export const actions: Actions = {
    requestQuote: async ({request, platform}) => {

        if(!platform) { return fail(500, {success: false, error:true}) }

        const _db: IDatabase = new CloudflareD1(platform.env.DB);
        const formData = await request.formData();
        const email = formData.get("email");

        const client: CRM.Client = {email: email as string};
        await _db.saveClientInfo(client);


        if(appState.GoogleTrackingActive){
            const gclid = formData.get("gclid");
        }

        throw redirect(302, routes.thankYou);
    }
}