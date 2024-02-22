import type { Reroute } from '@sveltejs/kit';


export const reroute: Reroute = ({ url }) => {
    console.log("## REROUTE ##");
    console.log(url.pathname)
    if (url.pathname === '/isr') {
        console.log("HERE")
        return '/isr-rerouted'
    }
};


