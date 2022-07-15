import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)
const state = useLocalState()

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (
    to.name !== 'Login' &&
    to.name !== 'Signup' &&
    to.name == '/' &&
    !state.value.token
  ) {
    next({ name: 'Login' })
  } else {
    next()
  }
})
// console.log(router)

export default router
