const reroute = ({ url }) => {
  if (url.pathname === "/isr") {
    return "/isr-with-reroute";
  }
  if (url.pathname === "/isr/no-reroute") {
    return "/reroute-without-isr";
  }
  if (url.pathname === "/no-ssr") {
    return "/reroute-without-ssr";
  }
};
export {
  reroute
};
