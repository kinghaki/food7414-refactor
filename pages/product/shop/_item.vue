<!--  -->
<template>
  <div id="item">
    <ul class="menuorder">
      <li>
        <div @click="$router.push('/product/all')">
          全部商品
        </div>
      </li>
      <span>/</span>
      <li>
        <div @click="menuchoice(item.title)">
          {{ item.title }}
        </div>
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
            <button :disabled="zero" :class="hover" @click="subcount">
              -
            </button>
            <div class="output">
              {{ count }}
            </div>
            <button @click="addcount">
              +
            </button>
          </div>
        </div>
        <!-- product頁面是加1個數 item葉面可以加不同個數 -->
        <button class="cart" @click.stop="addcart(item); waitcircle()">
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
  // async fetch ({ route, store, query }) {
  //   const path = route.path.split('/')
  //   // query.search 自己搜尋結果的葉面

  //   await store.dispatch('item/getitem', {
  //     params: {
  //       id: path[3]
  //     }
  //   })
  // },
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
      console.log(data)
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
    this.getItemId()
  },
  // 生命周期 - 掛載完成（訪問DOM元素）
  mounted () {

  },
  methods: {
    getItemId () {
      const path = this.$route.path.split('/')
      // query.search 自己搜尋結果的葉面

      this.$store.dispatch('item/getitem', {
        params: {
          id: path[3]
        }
      })
    },
    addcount () {
      this.count += 1
    },
    subcount () {
      this.count -= 1
    },
    menuchoice (payload) {
      switch (payload) {
      case '主餐':
        this.$router.push('/product/main')
        break
      case '飲品':
        this.$router.push('/product/drink')
      }
    },
    async addcart (value) {
      const { data } = await this.$axios.post('/api/USER/checkLogin')

      if (data) {
        value.count = this.count
        await this.$axios.post('/api/USER/addItem', value)
        await this.$store.dispatch('cart/getUSERCartItem')
        // const flag = this.$store.state.cart.cart.some((item, index) => {
        //   if (item.name === value.name) {
        //     return true
        //   }
        //   return false
        // })
        // // 判斷購物車項目裡有無 有的話數量加1 沒有的話添加商品
        // if (flag) {
        //   // 這裡是數量+多少都可
        //   this.$store.commit('item/addcountcartitem', { value, counts })
        //   this.$store.commit('item/totalcountcartitem', { value, counts })
        // } else {
        //   // 這裡是添加新產品
        //   this.$store.commit('item/updatecartitem', { value, counts })
        //   this.$store.commit('item/totalcountcartitem', { value, counts })
        //   this.$store.commit('cart/updatecountheight', 204)
        //   this.$store.commit('header/updateproductcount')
        // }
      } else {
        this.$router.push('/login')
      }
    },
    waitcircle () {
      this.$store.commit('header/updatefrontwaitfixed')

      const that = this
      window.setTimeout(() => {
        that.$store.commit('header/deletefrontwaitfixed')
      }, 800)
    }
  }
}
</script>
<style scoped>
 @import '@/assets/css/compress/item.min.css';
</style>
