import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.b2690c44.js","_app/immutable/chunks/index.6a576a5a.js","_app/immutable/chunks/singletons.a7806f43.js","_app/immutable/chunks/index.f169d766.js"];
export const stylesheets = [];
export const fonts = [];
