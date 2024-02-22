

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reroute-without-ssr/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Cf5obbXF.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B8d90xcV.js"];
export const stylesheets = [];
export const fonts = [];
