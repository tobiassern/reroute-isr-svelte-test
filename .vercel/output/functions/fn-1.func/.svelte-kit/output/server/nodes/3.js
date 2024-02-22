import * as server from '../entries/pages/isr-with-reroute/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/isr-with-reroute/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/isr-with-reroute/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.B7dnPqqt.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B8d90xcV.js"];
export const stylesheets = [];
export const fonts = [];
