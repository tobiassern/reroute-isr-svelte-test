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

    // if (url.pathname.startsWith('/isr')) {
    //     return '/reroute-and-isr' + url.pathname.replace('/isr', '');
    // }

    // if (url.pathname.startsWith('/reroute/no-isr')) {
    //     return '/reroute-without-isr' + url.pathname.replace('/reroute/no-isr', '');
    // }

    // if (url.pathname.startsWith('/no-ssr')) {
    //     return '/reroute-without-ssr' + url.pathname.replace('/no-ssr', '');
    // }

    console.log("Not rerouted");
}

