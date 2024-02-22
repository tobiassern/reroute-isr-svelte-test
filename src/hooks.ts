import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
    console.log("## REROUTE HOOK ##");
    console.log(url.href);
    console.log(url.pathname);

    if (url.pathname.startsWith('/isr')) {
        return '/reroute-and-isr' + url.pathname.replace('/isr', '');
    }

    if (url.pathname.startsWith('/reroute/no-isr')) {
        return '/reroute-without-isr' + url.pathname.replace('/reroute/no-isr', '');
    }

    if (url.pathname.startsWith('/no-ssr')) {
        return '/reroute-without-ssr' + url.pathname.replace('/no-ssr', '');
    }

    console.log("Not rerouted");
}

