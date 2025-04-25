import {AppState} from "$lib/globals";

export async function load({platform}){

    //creates the global app state object server side
    AppState.getInstance();


    //get all environmental variables that are needed to setup page
    // GTAG (if applicable)
    if(platform){
        const googleTrackingId = platform.env.GOOGLE_TRACKING_CODE ;
        return {googleTrackingId }

    }
}