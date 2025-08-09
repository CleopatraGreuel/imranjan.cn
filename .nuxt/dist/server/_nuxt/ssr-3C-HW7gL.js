import "vue";
import { a as useNuxtApp } from "../server.mjs";
function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
export {
  useRequestEvent as u
};
//# sourceMappingURL=ssr-3C-HW7gL.js.map
