import type { Reroute } from '@sveltejs/kit';


export const reroute: Reroute = ({ url }) => {
    console.log("## REROUTE ##");
    console.log(url.pathname)
    if (url.pathname === '/isr' || url.pathname === '/isr/__data.json' ) {
        console.log("HERE")
        if(url.pathname === '/isr/__data.json') {
            return '/isr-rerouted/__data.json'
        }
        return '/isr-rerouted'
    }
};


