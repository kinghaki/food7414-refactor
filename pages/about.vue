<!--  -->
<template>
  <div id="about">
    <div class="main">
      <div class="maintitle">
        <span class="titleone">來自 </span>
        <span style="" class="titletwo">「Mr.Light</span>
        <span class="titlethree">輕食先生」</span>
      </div>
      <div class="maincontent">
        「2020年，Mr. Light 輕食先生成立於政大校園，從外送餐盒起家，同年8月在新光路上開設第一間店。 我們相信健康的食物可以很好吃，秉持著「新鮮健康、方便快速、顧客至上」三大價值，為台灣餐食環境帶來正向影響力。 如果你也熱愛健康生活，支持健康飲食，那你也是Mr. Light 輕食先生的一份子 :)」
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'front',
  data () {
    return {

    }
  },
  // 生命周期 - 創建完成（訪問當前this實例）
  created () {

  },
  // 生命周期 - 掛載完成（訪問DOM元素）
  mounted () {

  },
  methods: {

    //   console.log(this.$refs.father.style.marginRight)
  }
}
</script>
<style scoped>
/* @import 'style.css'; 引入css類 */
@import '@/assets/css/compress/about.min.css';
</style>
