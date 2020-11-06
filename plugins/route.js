export default ({ app, store, $axios }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach(async (to, from, next) => {
    // do something to validate
    const { data } = await $axios.post('/api/USER/checkLogin')
    if ((to.name === 'login' || to.name === 'register' || to.name === 'forget') && data) {
      next(false)
    } else {
      next()
    }
  }

  )
}
