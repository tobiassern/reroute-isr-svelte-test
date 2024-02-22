import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-erlyun">ISR with reroute (rerouted path): <a href="/isr">/isr</a></p> <p data-svelte-h="svelte-jdc8xy">ISR with reroute (original path): <a href="/isr-with-reroute">/isr-with-reroute</a></p> <br> <p data-svelte-h="svelte-14y1o85">Reroute without ISR (rerouted path): <a href="/isr/no-reroute">/isr/no-reroute</a></p> <p data-svelte-h="svelte-1d2c4sd">Reroute without ISR (original path): <a href="/reroute-without-isr">/reroute-without-isr</a></p> <br> <p data-svelte-h="svelte-zam7gh">Reroute without SSR (rerouted path): <a href="/no-ssr">/no-ssr</a></p> <p data-svelte-h="svelte-ehy9p7">Reroute without SSR (original path): <a href="/reroute-without-ssr">/reroute-without-ssr</a></p> <br> <p data-svelte-h="svelte-w8e9ez">ISR wtihout reroute: <a href="/isr-with-reroute">/isr-without-reroute</a></p> <form method="POST" action="?/prerender-revalidate" data-svelte-h="svelte-1sdjwih"><button>Revalidate ISR</button></form>`;
});
export {
  Page as default
};
