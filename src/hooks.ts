import type { Reroute } from '@sveltejs/kit';

const reroutes: Record<string, string> = {
    '/isr': '/reroute-and-isr',
    '/isr/__data.json?x-sveltekit-invalidated=01': '/reroute-and-isr/__data.json?x-sveltekit-invalidated=01',
    '/reroute/no-isr': '/reroute-without-isr',
    '/reroute/no-isr/__data.json?x-sveltekit-invalidated=01': '/reroute-without-isr/__data.json?x-sveltekit-invalidated=01',
    '/no-ssr': '/reroute-without-ssr'
}

export const reroute: Reroute = ({ url }) => {
    console.log("## REROUTE HOOK ##");
    console.log("REROUTE HOOK href: ", url.href);
    console.log("REROUTE HOOK pathname: ", url.pathname);

    if (url.pathname in reroutes) {
        return reroutes[url.pathname];
    }

    console.log("Not rerouted");
}

