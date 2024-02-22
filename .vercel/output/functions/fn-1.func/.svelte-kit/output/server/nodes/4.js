import * as server from '../entries/pages/isr-without-reroute/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/isr-without-reroute/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/isr-without-reroute/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Bz1xWMov.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B8d90xcV.js"];
export const stylesheets = [];
export const fonts = [];
