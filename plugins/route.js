export default ({ app, store }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    // do something to validate
    console.log(1456546546)
    if ((to.name === 'login' || to.name === 'register' || to.name === 'forget') && !store.state.header.usereditimg) {
      next(false)
    } else {
      next()
    }
  })
}
