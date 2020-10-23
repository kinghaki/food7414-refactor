<template>
  <div ref="ss">
    <button @click="test">
      測試
    </button>
    <button @click="ATM">
      ATN
    </button>
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
  methods: {
    async test () {
      // axios預設content-type是application/json，server端接口需要把它改成form
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const { data } = await this.$axios.post('/api/ecpay', {}, config)
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
      const { data } = await this.$axios.post('/api/ecpay/ATM', {}, config)
      console.log(data)
      this.$refs.ss.innerHTML = data
      document.querySelector('#_form_aiochk').submit()
    }
  }

}
</script>

<style>

</style>
