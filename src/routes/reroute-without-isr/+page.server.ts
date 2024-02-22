import type { PageServerLoad } from './$types';
export const csr = false;
export const ssr = true;
export const load: PageServerLoad = () => {
    return {
        test: 'Test',
        last_update: new Date()
    }
}