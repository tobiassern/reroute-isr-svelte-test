import type { Reroute } from '@sveltejs/kit';

const translated: { [n: string]: string } = {
    '/isr': '/isr-rerouted',
};

export const reroute: Reroute = ({ url }) => {
    console.log(`REROUTE`, url.toString());

    let suffix = '';
    let pathname = url.pathname;
    const segments = pathname.split('/');
    const lastSegment = segments.at(-1);
    if (lastSegment && /\.\w+$/.test(lastSegment)) {
        suffix = '/' + lastSegment;
        pathname = segments.slice(0, -1).join('/');
    }

    if (pathname in translated) {
        return translated[pathname] + suffix;
    }
}

