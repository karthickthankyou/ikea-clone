if (!self.define) {
  let e,
    s = {}
  const n = (n, r) => (
    (n = new URL(n + '.js', r).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (r, a) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    let c = {}
    const i = (e) => n(e, t),
      l = { module: { uri: t }, exports: c, require: i }
    s[t] = Promise.all(r.map((e) => l[e] || i(e))).then((e) => (a(...e), c))
  }
}
define(['./workbox-5afaf374'], function (e) {
  'use strict'
  importScripts('fallback-TSKplnjblMcErLdjLOMyH.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/TSKplnjblMcErLdjLOMyH/_buildManifest.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/TSKplnjblMcErLdjLOMyH/_middlewareManifest.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/TSKplnjblMcErLdjLOMyH/_ssgManifest.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/293-06e24531e72be3d9.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/306.1e7d903a2f463aab.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/484-f5164d72ef47bdf7.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/536-2a1627afa5f345ea.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/608-8a7f50177fb6a5d5.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/675-a0e7bc4ebaaecba0.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/783-6702dbcde0e89e64.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/962-fba7f1e26ddb5a5a.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/963.99ccaf1b87137471.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/995-4ae2acdb3a6fd8fe.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/framework-5f4595e5518b5600.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/main-ef3326d12c3c1441.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/404-a8edf2a7fceb7ad2.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/_app-53b7d087a2e2e4df.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/_offline-20f4d8c419fb9cd0.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/cart-75c053cfa576ded2.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/createAccount-6c0438d46cb392cb.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/index-b7f63fbbb1385e4d.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/login-318cbb7e8975359e.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/product/%5Bid%5D-91991127944ba83a.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/products-af3915866c8525cf.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/pages/wishlist-2d6afddb4977fa74.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/chunks/webpack-afd64f0b9479b2a1.js',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        {
          url: '/_next/static/css/6f88256e31ee6bb4.css',
          revision: 'TSKplnjblMcErLdjLOMyH',
        },
        { url: '/_offline', revision: 'TSKplnjblMcErLdjLOMyH' },
        { url: '/favicon.ico', revision: '5ff3bac660414fa6edd8923d770f1872' },
        {
          url: '/images/blur.png',
          revision: 'a2b009fb1741c6b809e7d25c9afdc2c4',
        },
        { url: '/manifest.json', revision: 'c4aa46318647f70eacf874496d82265f' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: r,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    )
})
