import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_b7kJXi8s.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_tA7Ii4fb.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/work/bookmark-landing-page/bookmark-landing-page/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const r=document.querySelector(\".primary-header\"),e=document.querySelector(\".mobile-nav-toggle\"),t=document.querySelector(\".primary-navigation\"),i=document.querySelector(\".icon-hamburger\"),o=document.querySelector(\".icon-close\"),a=document.getElementById(\"logo-header\");e?.addEventListener(\"click\",()=>{t?.hasAttribute(\"data-visible\")?n():c(),t?.toggleAttribute(\"data-visible\"),r?.toggleAttribute(\"data-visible\"),a?.classList.toggle(\"white\")});function n(){e?.setAttribute(\"aria-expanded\",\"false\"),i?.removeAttribute(\"hidden\"),o?.setAttribute(\"hidden\",\"true\")}function c(){e?.setAttribute(\"aria-expanded\",\"true\"),o?.removeAttribute(\"hidden\"),i?.setAttribute(\"hidden\",\"true\")}\n"}],"styles":[{"type":"external","src":"/_astro/index.C3VnmHZB.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/runner/work/bookmark-landing-page/bookmark-landing-page/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_CYbFYgvY.mjs","/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/submit-form":"_astro/submit-form.Dru3Jt6U.js","/home/runner/work/bookmark-landing-page/bookmark-landing-page/src/components/features-tab":"_astro/features-tab.BOQ1nfiG.js","@/components/faq-accordion":"_astro/faq-accordion.D8yLfxxd.js","@astrojs/react/client.js":"_astro/client.B8tgQKZO.js","/astro/hoisted.js?q=0":"_astro/hoisted.BXlpQ6eY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.C3VnmHZB.css","/favicon-32x32.png","/_astro/button.CBLtLIE_.js","/_astro/client.B8tgQKZO.js","/_astro/faq-accordion.D8yLfxxd.js","/_astro/features-tab.BOQ1nfiG.js","/_astro/index.BXmx4ITx.js","/_astro/index.CVp3I2yG.js","/_astro/index.DEAzawzC.js","/_astro/submit-form.Dru3Jt6U.js","/images/icon-close.svg","/images/icon-error.svg","/images/icon-hamburger.svg","/images/illustration-features-tab-1.svg","/images/illustration-features-tab-2.svg","/images/illustration-features-tab-3.svg","/images/illustration-hero.svg","/images/logo-bookmark.svg","/images/logo-chrome.svg","/images/logo-firefox.svg","/images/logo-opera.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"hoqUSEG55TgITPk0AF+8bDEhfEqyOTp7vFP+fOkx66I=","experimentalEnvGetSecretEnabled":false});

export { manifest };
