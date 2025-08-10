import { _ as __nuxt_component_0 } from "./PageHeader-DAXK5P9E.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "./nuxt-link-B2zO3J93.js";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/unctx/dist/index.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/radix3/dist/index.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/defu/dist/defu.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const welcomeText = "欢迎访问imranjan.cn";
const _sfc_main$1 = {
  __name: "WelcomeMessage",
  __ssrInlineRender: true,
  setup(__props) {
    const welcomeChars = ref([...welcomeText]);
    const visibleChars = ref(new Array(welcomeText.length).fill(false));
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "welcome-message-container" }, _attrs))} data-v-86cd7368><div class="typewriter-container" data-v-86cd7368><div class="welcome-text" data-v-86cd7368><!--[-->`);
      ssrRenderList(welcomeChars.value, (char, index2) => {
        _push(`<span class="${ssrRenderClass([{
          "visible": visibleChars.value[index2],
          "chinese-elegant": index2 < 4
        }, "welcome-char"])}" data-v-86cd7368>${ssrInterpolate(char)}</span>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WelcomeMessage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-86cd7368"]]);
const _imports_0 = publicAssetsURL("/videos/hero-video.webm");
const _imports_1 = publicAssetsURL("/videos/hero-video.mp4");
const _imports_2 = publicAssetsURL("/videos/hero-video2.webm");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    useHead({
      title: "首页 - 依木然的个人网站",
      meta: [
        {
          name: "description",
          content: "依木然的个人网站，展示技术项目、竞赛作品和摄影创作"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      const _component_WelcomeMessage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage" }, _attrs))} data-v-8650fff3>`);
      _push(ssrRenderComponent(_component_PageHeader, null, null, _parent));
      _push(`<div class="video-section" data-v-8650fff3><div class="video-container" data-v-8650fff3><video autoplay muted playsinline preload="auto" class="hero-video active" data-v-8650fff3><source${ssrRenderAttr("src", _imports_0)} type="video/webm" data-v-8650fff3><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-8650fff3> 您的浏览器不支持视频播放，请升级浏览器或使用现代浏览器访问 </video><video muted playsinline preload="auto" class="hero-video" data-v-8650fff3><source${ssrRenderAttr("src", _imports_2)} type="video/webm" data-v-8650fff3> 您的浏览器不支持视频播放，请升级浏览器或使用现代浏览器访问 </video><div class="welcome-overlay" data-v-8650fff3>`);
      _push(ssrRenderComponent(_component_WelcomeMessage, null, null, _parent));
      _push(`</div></div></div><footer class="bottom-copyright" data-v-8650fff3><p class="copyright-text" data-v-8650fff3>© 2025 依木热尼江·买买提明. 个人网站</p></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8650fff3"]]);
export {
  index as default
};
//# sourceMappingURL=index-CoNy8C_V.js.map
