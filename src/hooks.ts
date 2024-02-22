import type { Reroute } from '@sveltejs/kit';


export const reroute: Reroute = ({ url }) => {
    if (url.pathname === '/test') {
        return '/reroute'
    }
};


