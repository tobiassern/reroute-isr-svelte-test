import type { Actions } from "@sveltejs/kit";
import { BYPASS_TOKEN } from "$env/static/private";
export const actions: Actions = {
    'prerender-revalidate': async (event) => {

        const { fetch } = event;

        await fetch('/isr', {
            method: 'HEAD',
            headers: {
                'x-prerender-revalidate': BYPASS_TOKEN
            }
        });

        await fetch('/isr-rerouted', {
            method: 'HEAD',
            headers: {
                'x-prerender-revalidate': BYPASS_TOKEN
            }
        });

        await fetch('/isr-no-reroute', {
            method: 'HEAD',
            headers: {
                'x-prerender-revalidate': BYPASS_TOKEN
            }
        });

        return { success: true }
    }
}