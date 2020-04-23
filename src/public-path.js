const isPrerender = window.__PRERENDER_INJECTED__ === 'prerender'
window.__webpack_public_path__ = isPrerender ? '' : process.env.WEBPACK_PATH
