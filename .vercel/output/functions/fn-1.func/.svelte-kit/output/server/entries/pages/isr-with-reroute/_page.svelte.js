import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p data-svelte-h="svelte-v4e8fc">ISR with reroute</p> <p>Test data: ${escape(data.test)}</p> <p>Last updated: ${escape(new Date(data.last_update).toLocaleString())}</p> <a href="/" data-svelte-h="svelte-11tu1n7">Go back home</a>`;
});
export {
  Page as default
};
