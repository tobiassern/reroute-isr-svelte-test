import { B as BYPASS_TOKEN } from "../../chunks/private.js";
const actions = {
  "prerender-revalidate": async (event) => {
    const { fetch } = event;
    await fetch("/isr", {
      method: "HEAD",
      headers: {
        "x-prerender-revalidate": BYPASS_TOKEN
      }
    });
    await fetch("/isr-rerouted", {
      method: "HEAD",
      headers: {
        "x-prerender-revalidate": BYPASS_TOKEN
      }
    });
    await fetch("/isr-no-reroute", {
      method: "HEAD",
      headers: {
        "x-prerender-revalidate": BYPASS_TOKEN
      }
    });
    return { success: true };
  }
};
export {
  actions
};
