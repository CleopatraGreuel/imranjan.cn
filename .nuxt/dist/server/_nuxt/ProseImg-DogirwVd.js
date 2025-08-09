import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
import { withLeadingSlash, withTrailingSlash, joinURL } from "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/ufo/dist/index.mjs";
import { _ as _sfc_main$1 } from "./NuxtImg-DyBEv8HO.js";
import { c as useRuntimeConfig } from "../server.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/defu/dist/defu.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/h3/dist/index.mjs";
import "./ssr-3C-HW7gL.js";
import "ofetch";
import "#internal/nuxt/paths";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/hookable/dist/index.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/radix3/dist/index.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      var _a;
      if (((_a = props.src) == null ? void 0 : _a.startsWith("/")) && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
        if (_base !== "/" && !props.src.startsWith(_base)) {
          return joinURL(_base, props.src);
        }
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(_sfc_main$1)), mergeProps({
        src: unref(refinedSrc),
        alt: props.alt,
        width: props.width,
        height: props.height
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProseImg-DogirwVd.js.map
