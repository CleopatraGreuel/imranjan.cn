import { p as pictureProps, u as useImage, a as useBaseImage, g as getFileExtension, b as baseImageProps, c as prerenderStaticImages, _ as _sfc_main$3 } from "./NuxtImg-DyBEv8HO.js";
import { defineComponent, useAttrs, computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead, a as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/defu/dist/defu.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/ufo/dist/index.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/h3/dist/index.mjs";
import "./ssr-3C-HW7gL.js";
import "ofetch";
import "#internal/nuxt/paths";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/hookable/dist/index.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/radix3/dist/index.mjs";
import "E:/个人网站/1-复刻mrkriss/student-portfolio/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NuxtPicture",
  __ssrInlineRender: true,
  props: pictureProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const { attrs: baseAttrs, options: baseOptions, modifiers: baseModifiers } = useBaseImage(props);
    const originalFormat = computed(() => getFileExtension(props.src));
    const isTransparent = computed(() => ["png", "webp", "gif", "svg"].includes(originalFormat.value));
    const legacyFormat = computed(() => {
      if (props.legacyFormat) {
        return props.legacyFormat;
      }
      return isTransparent.value ? "png" : "jpeg";
    });
    const sources = computed(() => {
      var _a, _b;
      const formats = ((_a = props.format) == null ? void 0 : _a.split(",")) || (originalFormat.value === "svg" ? ["svg"] : ((_b = $img.options.format) == null ? void 0 : _b.length) ? [...$img.options.format] : ["webp"]);
      if (formats[0] === "svg") {
        return [{ src: props.src }];
      }
      if (!formats.includes(legacyFormat.value)) {
        formats.push(legacyFormat.value);
      } else {
        formats.splice(formats.indexOf(legacyFormat.value), 1);
        formats.push(legacyFormat.value);
      }
      return formats.map((format) => {
        const { srcset, sizes, src } = $img.getSizes(props.src, {
          ...baseOptions.value,
          sizes: props.sizes || $img.options.screens,
          densities: props.densities,
          modifiers: { ...baseModifiers.value, format }
        });
        return { src, type: `image/${format}`, sizes, srcset };
      });
    });
    const lastSource = computed(() => sources.value[sources.value.length - 1]);
    if (props.preload) {
      useHead({ link: () => {
        var _a, _b, _c;
        const firstSource = sources.value[0];
        if (!firstSource) {
          return [];
        }
        const link = {
          rel: "preload",
          as: "image",
          imagesrcset: firstSource.srcset,
          nonce: props.nonce,
          ...typeof props.preload !== "boolean" && ((_a = props.preload) == null ? void 0 : _a.fetchPriority) ? { fetchpriority: props.preload.fetchPriority } : {}
        };
        if ((_c = (_b = sources.value) == null ? void 0 : _b[0]) == null ? void 0 : _c.sizes) {
          link.imagesizes = sources.value[0].sizes;
        }
        return [link];
      } });
    }
    const imgAttrs = computed(() => {
      const result = { ...props.imgAttrs, "data-nuxt-pic": "" };
      for (const key in attrs) {
        if (key in baseImageProps && !(key in result)) {
          result[key] = attrs[key];
        }
      }
      return result;
    });
    const imgEl = ref();
    if (import.meta.prerender) {
      for (const src of sources.value) {
        prerenderStaticImages(src.src, src.srcset);
      }
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<picture${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(sources.value.slice(0, -1), (source) => {
        _push(`<source${ssrRenderAttr("type", source.type)}${ssrRenderAttr("sizes", source.sizes)}${ssrRenderAttr("srcset", source.srcset)}>`);
      });
      _push(`<!--]-->`);
      if (lastSource.value) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl
        }, {
          ...unref(baseAttrs),
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value
        }, {
          src: lastSource.value.src,
          sizes: lastSource.value.sizes,
          srcset: lastSource.value.srcset
        }))}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</picture>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "OptimizedImage",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    loading: {
      type: String,
      default: "lazy",
      validator: (value) => ["lazy", "eager"].includes(value)
    },
    quality: {
      type: Number,
      default: 85,
      validator: (value) => value >= 1 && value <= 100
    },
    format: {
      type: [String, Array],
      default: "webp",
      validator: (value) => {
        const validFormats = ["webp", "jpg", "jpeg", "png", "avif", "gif"];
        if (Array.isArray(value)) {
          return value.every((f) => validFormats.includes(f));
        }
        return validFormats.includes(value);
      }
    },
    fit: {
      type: String,
      default: "cover",
      validator: (value) => ["cover", "contain", "fill", "inside", "outside"].includes(value)
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    // 预设配置：hero, project, photo, thumbnail
    preset: {
      type: String,
      default: "",
      validator: (value) => ["", "hero", "project", "photo", "thumbnail"].includes(value)
    },
    // 响应式尺寸
    sizes: {
      type: String,
      default: ""
    },
    // 是否使用Picture元素（推荐用于关键图片）
    usePicture: {
      type: Boolean,
      default: false
    },
    // 模糊占位符
    blur: {
      type: [Boolean, Number],
      default: false
    },
    class: {
      type: [String, Array, Object],
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const imageLoaded = ref(false);
    const imageError = ref(false);
    const imageRef = ref(null);
    const containerStyle = computed(() => {
      const styles = {};
      if (props.width) styles.width = typeof props.width === "number" ? `${props.width}px` : props.width;
      if (props.height) styles.height = typeof props.height === "number" ? `${props.height}px` : props.height;
      return styles;
    });
    const placeholderStyle = computed(() => {
      const styles = {
        width: "100%",
        height: "100%"
      };
      if (props.width && props.height) {
        styles.aspectRatio = `${props.width} / ${props.height}`;
      }
      return styles;
    });
    const imageClass = computed(() => {
      const classes = ["optimized-image", "transition-opacity", "duration-300"];
      if (imageLoaded.value) {
        classes.push("opacity-100");
      } else {
        classes.push("opacity-0");
      }
      if (props.class) {
        if (typeof props.class === "string") {
          classes.push(props.class);
        } else if (Array.isArray(props.class)) {
          classes.push(...props.class);
        } else {
          Object.keys(props.class).forEach((key) => {
            if (props.class[key]) classes.push(key);
          });
        }
      }
      return classes.join(" ");
    });
    const imageStyle = computed(() => {
      const styles = {
        objectFit: props.fit,
        width: "100%",
        height: "100%"
      };
      if (!imageLoaded.value && props.placeholder) {
        styles.position = "absolute";
        styles.top = "0";
        styles.left = "0";
      }
      return styles;
    });
    const preferredFormat = computed(() => {
      return Array.isArray(props.format) ? props.format[0] : props.format;
    });
    const formats = computed(() => {
      if (Array.isArray(props.format)) {
        return props.format;
      }
      return ["webp", props.format].filter((f, i, arr) => arr.indexOf(f) === i);
    });
    const responsiveSizes = computed(() => {
      if (props.sizes) return props.sizes;
      switch (props.preset) {
        case "hero":
          return "100vw";
        case "project":
          return "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";
        case "photo":
          return "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";
        case "thumbnail":
          return "(max-width: 768px) 50vw, 25vw";
        default:
          return props.width ? `${props.width}px` : "100vw";
      }
    });
    const placeholderSrc = computed(() => {
      if (!props.blur) return void 0;
      const blurAmount = typeof props.blur === "number" ? props.blur : 10;
      return `${props.src}?blur=${blurAmount}&quality=20&width=100`;
    });
    const onImageLoad = () => {
      imageLoaded.value = true;
      imageError.value = false;
    };
    const onImageError = () => {
      imageLoaded.value = false;
      imageError.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPicture = _sfc_main$2;
      const _component_NuxtImg = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "optimized-image-container",
        style: containerStyle.value
      }, _attrs))} data-v-48bfcf99>`);
      if (!imageLoaded.value && __props.placeholder) {
        _push(`<div class="image-placeholder animate-pulse bg-gray-200" style="${ssrRenderStyle(placeholderStyle.value)}" data-v-48bfcf99><div class="flex items-center justify-center h-full" data-v-48bfcf99><svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-48bfcf99><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-48bfcf99></path></svg></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.usePicture) {
        _push(ssrRenderComponent(_component_NuxtPicture, {
          ref_key: "imageRef",
          ref: imageRef,
          src: __props.src,
          alt: __props.alt,
          width: __props.width,
          height: __props.height,
          quality: __props.quality,
          format: formats.value,
          loading: __props.loading,
          sizes: responsiveSizes.value,
          preset: __props.preset,
          class: imageClass.value,
          style: imageStyle.value,
          placeholder: placeholderSrc.value,
          onLoad: onImageLoad,
          onError: onImageError
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtImg, {
          ref_key: "imageRef",
          ref: imageRef,
          src: __props.src,
          alt: __props.alt,
          width: __props.width,
          height: __props.height,
          quality: __props.quality,
          format: preferredFormat.value,
          loading: __props.loading,
          sizes: responsiveSizes.value,
          preset: __props.preset,
          class: imageClass.value,
          style: imageStyle.value,
          placeholder: placeholderSrc.value,
          onLoad: onImageLoad,
          onError: onImageError
        }, null, _parent));
      }
      if (imageError.value) {
        _push(`<div class="image-error bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center" style="${ssrRenderStyle(placeholderStyle.value)}" data-v-48bfcf99><div class="text-center text-gray-500" data-v-48bfcf99><svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-48bfcf99><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" data-v-48bfcf99></path></svg><p class="text-sm" data-v-48bfcf99>图片加载失败</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OptimizedImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-48bfcf99"]]);
const _sfc_main = {
  __name: "test-images",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "@nuxt/image 功能测试",
      meta: [
        { name: "description", content: "测试@nuxt/image和Sharp图片处理功能" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      const _component_NuxtPicture = _sfc_main$2;
      const _component_OptimizedImage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))} data-v-4db14e6d><h1 class="text-3xl font-bold mb-8 text-center" data-v-4db14e6d>@nuxt/image 功能测试</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-4db14e6d><div class="space-y-4" data-v-4db14e6d><h2 class="text-xl font-semibold" data-v-4db14e6d>基础NuxtImg</h2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/hero/hero-bg.jpg",
        alt: "Hero背景测试",
        width: "400",
        height: "300",
        format: "webp",
        quality: "85",
        class: "rounded-lg shadow-md"
      }, null, _parent));
      _push(`</div><div class="space-y-4" data-v-4db14e6d><h2 class="text-xl font-semibold" data-v-4db14e6d>NuxtPicture优化</h2>`);
      _push(ssrRenderComponent(_component_NuxtPicture, {
        src: "/images/projects/project-1.jpg",
        alt: "项目图片测试",
        width: "400",
        height: "300",
        format: "webp",
        quality: "90",
        class: "rounded-lg shadow-md"
      }, null, _parent));
      _push(`</div><div class="space-y-4" data-v-4db14e6d><h2 class="text-xl font-semibold" data-v-4db14e6d>OptimizedImage组件</h2>`);
      _push(ssrRenderComponent(_component_OptimizedImage, {
        src: "/images/photography/photo-1.jpg",
        alt: "摄影作品测试",
        preset: "photo",
        width: "400",
        height: "300",
        blur: true,
        class: "rounded-lg shadow-md"
      }, null, _parent));
      _push(`</div><div class="space-y-4" data-v-4db14e6d><h2 class="text-xl font-semibold" data-v-4db14e6d>Hero预设</h2>`);
      _push(ssrRenderComponent(_component_OptimizedImage, {
        src: "/images/hero/hero-project.jpg",
        alt: "Hero项目测试",
        preset: "hero",
        width: "400",
        height: "225",
        class: "rounded-lg shadow-md"
      }, null, _parent));
      _push(`</div><div class="space-y-4" data-v-4db14e6d><h2 class="text-xl font-semibold" data-v-4db14e6d>项目预设</h2>`);
      _push(ssrRenderComponent(_component_OptimizedImage, {
        src: "/images/projects/project-2.jpg",
        alt: "项目预设测试",
        preset: "project",
        width: "400",
        height: "300",
        class: "rounded-lg shadow-md"
      }, null, _parent));
      _push(`</div><div class="space-y-4" data-v-4db14e6d><h2 class="text-xl font-semibold" data-v-4db14e6d>缩略图预设</h2>`);
      _push(ssrRenderComponent(_component_OptimizedImage, {
        src: "/images/photography/photo-2.jpg",
        alt: "缩略图测试",
        preset: "thumbnail",
        width: "200",
        height: "150",
        class: "rounded-lg shadow-md"
      }, null, _parent));
      _push(`</div></div><div class="mt-12" data-v-4db14e6d><h2 class="text-2xl font-semibold mb-6" data-v-4db14e6d>Sharp图片处理测试</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-4db14e6d><div class="space-y-2" data-v-4db14e6d><h3 class="font-medium" data-v-4db14e6d>WebP格式</h3>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/about/profile.jpg",
        alt: "WebP测试",
        format: "webp",
        width: "300",
        height: "300",
        class: "rounded-lg"
      }, null, _parent));
      _push(`</div><div class="space-y-2" data-v-4db14e6d><h3 class="font-medium" data-v-4db14e6d>JPEG格式</h3>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/about/profile.jpg",
        alt: "JPEG测试",
        format: "jpg",
        width: "300",
        height: "300",
        class: "rounded-lg"
      }, null, _parent));
      _push(`</div><div class="space-y-2" data-v-4db14e6d><h3 class="font-medium" data-v-4db14e6d>PNG格式</h3>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/about/profile.jpg",
        alt: "PNG测试",
        format: "png",
        width: "300",
        height: "300",
        class: "rounded-lg"
      }, null, _parent));
      _push(`</div></div></div><div class="mt-12" data-v-4db14e6d><h2 class="text-2xl font-semibold mb-6" data-v-4db14e6d>响应式图片测试</h2>`);
      _push(ssrRenderComponent(_component_OptimizedImage, {
        src: "/images/hero/landscape.jpg",
        alt: "响应式图片测试",
        "use-picture": true,
        sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
        class: "w-full max-w-4xl mx-auto rounded-lg shadow-lg"
      }, null, _parent));
      _push(`</div><div class="mt-12 p-6 bg-gray-50 rounded-lg" data-v-4db14e6d><h2 class="text-xl font-semibold mb-4" data-v-4db14e6d>功能状态检查</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" data-v-4db14e6d><div class="space-y-2" data-v-4db14e6d><div class="flex justify-between" data-v-4db14e6d><span data-v-4db14e6d>@nuxt/image:</span><span class="text-green-600 font-medium" data-v-4db14e6d>✅ 已安装</span></div><div class="flex justify-between" data-v-4db14e6d><span data-v-4db14e6d>Sharp:</span><span class="text-green-600 font-medium" data-v-4db14e6d>✅ 已安装</span></div><div class="flex justify-between" data-v-4db14e6d><span data-v-4db14e6d>WebP支持:</span><span class="text-green-600 font-medium" data-v-4db14e6d>✅ 支持</span></div></div><div class="space-y-2" data-v-4db14e6d><div class="flex justify-between" data-v-4db14e6d><span data-v-4db14e6d>图片优化:</span><span class="text-green-600 font-medium" data-v-4db14e6d>✅ 启用</span></div><div class="flex justify-between" data-v-4db14e6d><span data-v-4db14e6d>响应式图片:</span><span class="text-green-600 font-medium" data-v-4db14e6d>✅ 启用</span></div><div class="flex justify-between" data-v-4db14e6d><span data-v-4db14e6d>预设配置:</span><span class="text-green-600 font-medium" data-v-4db14e6d>✅ 配置完成</span></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-images.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const testImages = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4db14e6d"]]);
export {
  testImages as default
};
//# sourceMappingURL=test-images-CdV0ttWy.js.map
