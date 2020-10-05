<!--  -->
<template>
  <div id="item">
    <ul class="menuorder">
      <li>
        <router-link to="/product/all">
          全部商品
        </router-link>
      </li>
      <span>/</span>
      <li>
        <router-link :to="menuchoice(item.title)">
          {{ item.title }}
        </router-link>
      </li>
      <span>/</span>
      <li>
        {{ item.name }}
      </li>
      <li />
    </ul>
    <div class="itemwhole">
      <div :style="{backgroundImage:`url(${item.img})`}" class="itemimg" />
      <div class="itemcontent">
        <h2>{{ item.name }}</h2>
        <div class="itemtext">
          Mr.Light 輕食先生 ， 保證選用最新鮮的肉品 及 蔬菜
        </div>
        <div class="originprice">
          原價 ${{ item.beforeprice }}
        </div>
        <div class="afterprice">
          現在特價只要 ${{ item.afterprice }}
        </div>
        <div class="totalprice">
          小計 ${{ item.afterprice * count }}
        </div>
        <div class="inputtotal">
          <div class="inputaddsub">
            <button :disabled="zero" :class="hover" @click="count--">
              -
            </button>
            <div class="output">
              {{ count }}
            </div>
            <button @click="count++">
              +
            </button>
          </div>
        </div>
        <button class="cart">
          加入購物車
        </button>
      </div>
    </div>
    <!-- <img :src="`${item.img}`" alt=""> -->
  </div>
</template>

<script>
export default {
  layout: 'front',
  //   async asyncData ({ $axios, params }) {
  //     const api = '/api/product/item'
  //     const { data } = await $axios.get(api, {
  //       params: {
  //         id: params.item
  //       }
  //     })
  //     return {
  //       item: data
  //     }
  //   },
  async fetch ({ route, store, query }) {
    const path = route.path.split('/')
    // query.search 自己搜尋結果的葉面

    await store.dispatch('item/getitem', {
      params: {
        id: path[3]
      }
    })
  },
  data () {
    return {
      zero: true,
      count: 1,
      hover: 'hover'
    }
  },
  computed: {
    item () {
      const [data] = this.$store.state.item.item
      return data
    }

  },
  watch: {
    count (val) {
      if (val === 1) {
        this.zero = true
        this.hover = 'hover'
        return
      }
      this.zero = false
      this.hover = ''
    }
  },
  // 生命周期 - 創建完成（訪問當前this實例）
  created () {

  },
  // 生命周期 - 掛載完成（訪問DOM元素）
  mounted () {

  },
  methods: {
    menuchoice (payload) {
      switch (payload) {
      case '主餐':
        return '/product/main'
      case '飲品':
        return '/product/drink'
      }
    }
  }
}
</script>
<style scoped>
 @import '@/assets/css/compress/item.min.css';
</style>
