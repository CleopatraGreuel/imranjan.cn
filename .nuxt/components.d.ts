
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CodeBlock': typeof import("../components/CodeBlock.vue")['default']
    'GlassCursor': typeof import("../components/GlassCursor.vue")['default']
    'OptimizedImage': typeof import("../components/OptimizedImage.vue")['default']
    'PageHeader': typeof import("../components/PageHeader.vue")['default']
    'PhotoMasonry': typeof import("../components/PhotoMasonry.vue")['default']
    'ProjectDetails': typeof import("../components/ProjectDetails.vue")['default']
    'ProjectTimeline': typeof import("../components/ProjectTimeline.vue")['default']
    'TheNavigation': typeof import("../components/TheNavigation.vue")['default']
    'WelcomeMessage': typeof import("../components/WelcomeMessage.vue")['default']
    'ContentDoc': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
    'ContentList': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
    'ContentNavigation': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
    'ContentQuery': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
    'ContentRenderer': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'ContentRendererMarkdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
    'ContentSlot': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
    'DocumentDrivenEmpty': typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
    'DocumentDrivenNotFound': typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
    'Markdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
    'ProseCode': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']
    'ProseCodeInline': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']
    'ProsePre': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']
    'ProseA': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
    'ProseEm': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'ProseStrong': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
    'ProseTable': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
    'ProseTbody': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyCodeBlock': LazyComponent<typeof import("../components/CodeBlock.vue")['default']>
    'LazyGlassCursor': LazyComponent<typeof import("../components/GlassCursor.vue")['default']>
    'LazyOptimizedImage': LazyComponent<typeof import("../components/OptimizedImage.vue")['default']>
    'LazyPageHeader': LazyComponent<typeof import("../components/PageHeader.vue")['default']>
    'LazyPhotoMasonry': LazyComponent<typeof import("../components/PhotoMasonry.vue")['default']>
    'LazyProjectDetails': LazyComponent<typeof import("../components/ProjectDetails.vue")['default']>
    'LazyProjectTimeline': LazyComponent<typeof import("../components/ProjectTimeline.vue")['default']>
    'LazyTheNavigation': LazyComponent<typeof import("../components/TheNavigation.vue")['default']>
    'LazyWelcomeMessage': LazyComponent<typeof import("../components/WelcomeMessage.vue")['default']>
    'LazyContentDoc': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
    'LazyContentList': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
    'LazyContentNavigation': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
    'LazyContentQuery': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyContentRendererMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
    'LazyContentSlot': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
    'LazyDocumentDrivenEmpty': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
    'LazyDocumentDrivenNotFound': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
    'LazyMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']>
    'LazyProseCodeInline': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CodeBlock: typeof import("../components/CodeBlock.vue")['default']
export const GlassCursor: typeof import("../components/GlassCursor.vue")['default']
export const OptimizedImage: typeof import("../components/OptimizedImage.vue")['default']
export const PageHeader: typeof import("../components/PageHeader.vue")['default']
export const PhotoMasonry: typeof import("../components/PhotoMasonry.vue")['default']
export const ProjectDetails: typeof import("../components/ProjectDetails.vue")['default']
export const ProjectTimeline: typeof import("../components/ProjectTimeline.vue")['default']
export const TheNavigation: typeof import("../components/TheNavigation.vue")['default']
export const WelcomeMessage: typeof import("../components/WelcomeMessage.vue")['default']
export const ContentDoc: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
export const ContentList: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
export const ContentNavigation: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
export const ContentQuery: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
export const ContentRenderer: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const ContentRendererMarkdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
export const ContentSlot: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
export const DocumentDrivenEmpty: typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
export const DocumentDrivenNotFound: typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
export const Markdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
export const ProseCode: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']
export const ProseCodeInline: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']
export const ProsePre: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']
export const ProseA: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
export const ProseEm: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const ProseStrong: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
export const ProseTable: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
export const ProseTbody: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyCodeBlock: LazyComponent<typeof import("../components/CodeBlock.vue")['default']>
export const LazyGlassCursor: LazyComponent<typeof import("../components/GlassCursor.vue")['default']>
export const LazyOptimizedImage: LazyComponent<typeof import("../components/OptimizedImage.vue")['default']>
export const LazyPageHeader: LazyComponent<typeof import("../components/PageHeader.vue")['default']>
export const LazyPhotoMasonry: LazyComponent<typeof import("../components/PhotoMasonry.vue")['default']>
export const LazyProjectDetails: LazyComponent<typeof import("../components/ProjectDetails.vue")['default']>
export const LazyProjectTimeline: LazyComponent<typeof import("../components/ProjectTimeline.vue")['default']>
export const LazyTheNavigation: LazyComponent<typeof import("../components/TheNavigation.vue")['default']>
export const LazyWelcomeMessage: LazyComponent<typeof import("../components/WelcomeMessage.vue")['default']>
export const LazyContentDoc: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
export const LazyContentList: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
export const LazyContentNavigation: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
export const LazyContentQuery: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyContentRendererMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
export const LazyContentSlot: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
export const LazyDocumentDrivenEmpty: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
export const LazyDocumentDrivenNotFound: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
export const LazyMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']>
export const LazyProseCodeInline: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
