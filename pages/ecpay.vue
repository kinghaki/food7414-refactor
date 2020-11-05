<template>
  <div ref="ss">
    <button @click="test">
      測試
    </button>
    <button @click="ATM">
      ATN
    </button>
    <button @click="credit">
      credit
    </button>
    <button @click="testCookie">
      testcookie
    </button>
    <div />
  </div>
</template>

<script>
export default {
  layout: 'front',
  data () {
    return {
      url: ''
    }
  },
  mounted () {
    console.log(document.cookie)
  },
  methods: {
    async test () {
      // axios預設content-type是application/json，server端接口需要把它改成form
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const { data } = await this.$axios.post('/api/USER/ecpay', {}, config)
      console.log(data)
      this.$refs.ss.innerHTML = data
      // document.querySelector('#_form_aiochk').submit()
    },
    async ATM () {
      // axios預設content-type是application/json，server端接口需要把它改成form
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const { data } = await this.$axios.post('/api/USER/ecpay/ATM', {}, config)
      console.log(data)
      this.$refs.ss.innerHTML = data
      document.querySelector('#_form_aiochk').submit()
    },
    async credit () {
      // axios預設content-type是application/json，server端接口需要把它改成form

      const { data } = await this.$axios.get('/api/USER/ecpay/Credit')
      console.log(data)
      this.$refs.ss.innerHTML = data
      document.querySelector('#_form_aiochk').submit()
    },
    testCookie () {
      const data = this.$axios.get('/api/cookie')
      console.log(data)
    }
  }

}
</script>

<style>

</style>
