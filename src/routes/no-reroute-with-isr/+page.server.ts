import { BYPASS_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

// export const config = {
// 	isr: {
// 		// Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
// 		// Setting the value to `false` means it will never expire.
// 		expiration: 60,

// 		// Random token that can be provided in the URL to bypass the cached version of the asset, by requesting the asset
// 		// with a __prerender_bypass=<token> cookie.
// 		//
// 		// Making a `GET` or `HEAD` request with `x-prerender-revalidate: <token>` will force the asset to be re-validated.
// 		bypassToken: BYPASS_TOKEN,
// 	},
// };

export const load: PageServerLoad = () => {
	return {
		test: 'Test',
		last_update: new Date()
	}
}