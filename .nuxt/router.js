import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4809d7d8 = () => interopDefault(import('../pages/laap.vue' /* webpackChunkName: "pages/laap" */))
const _bbc6f164 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _2a662ed3 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _29698ae4 = () => interopDefault(import('../pages/report.vue' /* webpackChunkName: "pages/report" */))
const _862e3b5c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/fmockup/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/laap",
    component: _4809d7d8,
    name: "laap"
  }, {
    path: "/list",
    component: _bbc6f164,
    name: "list"
  }, {
    path: "/register",
    component: _2a662ed3,
    name: "register"
  }, {
    path: "/report",
    component: _29698ae4,
    name: "report"
  }, {
    path: "/",
    component: _862e3b5c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
