import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    return {
        test: 'Test',
        last_update: new Date()
    }
}