<template>
  <div>
    <button @click="test">
      測試
    </button>
  </div>
</template>

<script>
export default {
  layout: 'front',
  data () {
    return {

    }
  },
  methods: {
    async test () {
      const url = await this.$axios.get('/api/ecpay')
      console.log(url)
    }
  }

}
</script>

<style>

</style>
