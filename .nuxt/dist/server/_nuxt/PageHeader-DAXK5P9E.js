import { _ as __nuxt_component_0$1 } from "./nuxt-link-B2zO3J93.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = publicAssetsURL("/images/signature.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-header-section" }, _attrs))} data-v-110fbd35><header class="signature-header" data-v-110fbd35><div class="signature-container" data-v-110fbd35><img${ssrRenderAttr("src", _imports_0)} alt="您的签名" class="signature-img" data-v-110fbd35></div></header><nav class="horizontal-navigation" data-v-110fbd35><ul class="nav-menu-horizontal" data-v-110fbd35><li class="nav-item-horizontal" data-v-110fbd35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav-link-horizontal group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="nav-text-horizontal" data-v-110fbd35${_scopeId}>首页</span>`);
      } else {
        return [
          createVNode("span", { class: "nav-text-horizontal" }, "首页")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item-horizontal" data-v-110fbd35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav-link-horizontal group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="nav-text-horizontal" data-v-110fbd35${_scopeId}>个人简介</span>`);
      } else {
        return [
          createVNode("span", { class: "nav-text-horizontal" }, "个人简介")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item-horizontal" data-v-110fbd35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "nav-link-horizontal group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="nav-text-horizontal" data-v-110fbd35${_scopeId}>项目经历</span>`);
      } else {
        return [
          createVNode("span", { class: "nav-text-horizontal" }, "项目经历")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item-horizontal" data-v-110fbd35>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/photography",
    class: "nav-link-horizontal group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="nav-text-horizontal" data-v-110fbd35${_scopeId}>摄影作品</span>`);
      } else {
        return [
          createVNode("span", { class: "nav-text-horizontal" }, "摄影作品")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-110fbd35"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=PageHeader-DAXK5P9E.js.map
