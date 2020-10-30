export default {
  mounted () {
    const authstate = this.$store.state.header.usereditimg
    console.log(2)
    if (!authstate) {
      this.$router.push('/')
    }
  }
}
