import * as server from '../entries/pages/reroute-without-isr/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reroute-without-isr/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/reroute-without-isr/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Bz1xWMov.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B8d90xcV.js"];
export const stylesheets = [];
export const fonts = [];
