

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BC7rLjAA.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B8d90xcV.js","_app/immutable/chunks/entry.Cq-TphN8.js"];
export const stylesheets = [];
export const fonts = [];
