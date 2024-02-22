

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DALXJqUU.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B8d90xcV.js"];
export const stylesheets = [];
export const fonts = [];
