import {redirect} from "@sveltejs/kit";
import {AppState, routes} from "$lib/globals";

const appState: AppState = AppState.getInstance();

export async function load () {
    if(!appState.GeminiActive) { throw redirect(302,routes.mainPage.home); }
}