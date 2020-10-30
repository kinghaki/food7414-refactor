export default ({ route, redirect, store }) => {
  console.log('routerAuth')
  console.log(route.meta[0].requiresAuth)
  console.log(process.server) // 直接輸入網址是true
  if (route.meta[0].requiresAuth) {
    const authstate = store.state.header.usereditimg // 直接輸入網址是true
    if (!authstate && !process.server) {
      return redirect('/')
    } else if (authstate && process.server) {
      return redirect('/')
    }
  }
}
