<template>
  <div id="product">
    <!-- <input type="text"> -->
    <!-- v-app原本背景色預設白色 -->
    <v-app style="background-color:transparent">
      <div class="wholeselcete">
        <span class="showoption">顯示方式 :</span>
        <select v-model="selectvalue" class="selcetedop" @change="sortvalue">
          <option value="0" disabled>
            請選擇商品排列
          </option>
          <option value="1">
            價格由低到高
          </option>
          <option value="2">
            價格由高到低
          </option>
        </select>
        <img src="@/assets/img/SVG/arrow-down.svg" alt :class="[imgupdown]">
      </div>
      <v-row
        dense
        class="px-xl-10 p-lg-10 p-md-10 p-sm-5 p-xs-3 mt-10 mx-md-0 mx-4"
        justify="space-between"
        align-content="start"
      >
        <v-col cols="12" sm="12" md="2">
          <v-card class="mb-md-0 mb-3" max-width="100%" height="270" tile>
            <v-list rounded>
              <v-subheader>Category</v-subheader>
              <v-list-item-group v-model="items" color="primary">
                <!-- @click設在vuetify的元素上會有bug 所以添加div-->
                <div @click.stop="waitcircle">
                  <v-list-item v-for="(item, index) in listitems" :key="index" link :to="item.path">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text" />
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <!-- 內容部分 -->
        <v-col cols="12" md="9" class="mt-md-0 mt-4">
          <v-row class dense>
            <v-card
              v-for="(item,index) in product"
              :key="index"
              :width="cardwidth"
              min-width="150"
              class="ml-md-10 mb-5 card-relative"
              loading="green"
              outlined
            >
              <div class="card-position" @click="$router.push(`/product/shop/${item._id}`)">
                看更多內容
              </div>
              <!-- <v-img
                class="white--text align-end"
                height="200px"
                width="200px"
                :src="`../../assets/img/shop/${item.img}.jpg`"
              />-->
              <img :src="`${item.img}`" style="width:100%;" :style="{height:imgHeight}">

              <div class="producttitle">
                <h5>{{ item.name }}</h5>
                <span>{{ item.title }}</span>
              </div>

              <v-card-text class="text--primary price mb-4">
                <div class="text-decoration-line-through beforeprice">
                  原價 $ {{ item.beforeprice }} 元
                </div>

                <div class="afterprice">
                  現在只要
                  $ {{ item.afterprice }} 元
                </div>
              </v-card-text>

              <v-card-actions class="pa-0">
                <v-btn
                  style="font-size:22px; font-weight:700"
                  class="green"
                  color="white"
                  width="100%"
                  text
                  height="50"
                  @click.stop="checklogin(item);waitcircle()"
                >
                  <v-icon class="icon-cart" />
                  <span style="padding-left:10px">加入購物車</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  layout: 'front',
  // 獲取商品內容
  // async asyncData ({ $axios, params, store }) {
  //   const api = '/api/product/id'
  //   const { data } = await $axios.get(api, {
  //     params: {
  //       id: params.product
  //     }
  //   })
  //   return {
  //     product: data
  //   }
  // },

  // fetch ({ $axios, params, store }) {
  //   return store.dispatch('item/getitem', {
  //     params: {
  //       id: params.product
  //     }
  //   })
  // },

  data () {
    return {
      aa: '',
      items: 0,
      listitems: [
        { text: '全部', icon: 'mdi-clock', path: '/product/all' },
        { text: '主餐', icon: 'mdi-account', path: '/product/main' },
        { text: '飲料', icon: 'mdi-flag', path: '/product/drink' }
      ],
      selectvalue: 0,
      selectflag: false,
      imgupdown: 'imgnone'

    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    cardwidth () {
      switch (this.$vuetify.breakpoint.name) {
      case 'xs': return '100%'
      case 'sm': return '100%'
      case 'md': return '270'
      case 'lg': return '320'
      case 'xl': return '450'
      }
    },
    // 不知道為甚麼要加這行 待查
    // eslint-disable-next-line vue/return-in-computed-property
    imgHeight () {
      switch (this.$vuetify.breakpoint.name) {
      case 'xs': return '300px'
      case 'sm': return '500px'
      case 'md': return '300px'
      case 'lg': return '300px'
      case 'xl': return '300px'
      }
    },
    product () {
      return this.$store.state.item.product
    }
  },

  // 使用$route每當路由的參數變更會觸發， 因正常來講路由相同組件不會更新
  watch: {
    $route (to, from) {
      this.getcreated()
    }

  },
  // 生命周期 - 創建完成（訪問當前this實例）

  created () {
    this.getcreated()
  },
  mounted () {

  },
  // 生命周期 - 掛載完成（訪問DOM元素）

  methods: {
    sortvalue () {
      if (!this.selectflag) {
        switch (this.selectvalue) {
        case '1':
          this.selectflag = true
          this.imgupdown = 'imgup'
          // 價錢由小排到大
          this.product.sort((a, b) => {
            return a.afterprice - b.afterprice
          })
          break
        case '2':
          this.selectflag = true
          this.imgupdown = 'imgblock'

          this.product.sort((a, b) => {
            return b.afterprice - a.afterprice
          })
          break
        }
      } else {
        switch (this.selectvalue) {
        case '1':
          this.imgupdown = 'imgup'

          this.product.sort((a, b) => {
            return a.afterprice - b.afterprice
          })
          break
        case '2':
          this.imgupdown = 'imgdown'

          this.product.sort((a, b) => {
            return b.afterprice - a.afterprice
          })
          break
        }
      }
    },
    async getcreated () {
      if (!this.$route.query.search) {
        await this.$store.dispatch('item/getproduct', {
          params: {
            id: this.$route.params.product
          }
        })
      } else {
        await this.$store.dispatch('item/getproduct', {
          params: {
            id: this.$route.params.product,
            search: this.$route.query.search
          }
        })
      }
    },
    async checklogin (value) {
      const { data } = await this.$axios.post('/api/USER/checkLogin')
      if (data) {
        value.count = 1// 初始添加購物車數量為1
        await this.$axios.post('/api/USER/addProduct', value)
        await this.$store.dispatch('cart/getUSERCartProduct')

        // const flag = this.$store.state.cart.cart.some((item, index) => {
        //   if (item.name === value.name) {
        //     return true
        //   }
        //   return false
        // })
        // 判斷購物車項目裡有無 有的話數量加1 沒有的話添加商品
        // if (flag) {
        //   // 這裡是數量+1
        //   // this.$store.commit('cart/addcountcart', value)
        //   // this.$store.commit('cart/totalcountcart', value.afterprice)
        // } else {
        //   // 這裡是添加新產品
        //   // this.$store.commit('cart/updatecart', value)
        //   // this.$store.commit('cart/totalcountcart', value.afterprice)
        //   // this.$store.commit('cart/updatecountheight', 204)
        //   // this.$store.commit('header/updateproductcount')
        // }
      } else {
        alert('請先登入會員')
        this.$router.push('/login')
      }

      // alert('請登入會員')
      // this.$router.push('/login')
    },
    waitcircle () {
      this.$store.commit('header/updatefrontwaitfixed')

      const that = this
      window.setTimeout(() => {
        that.$store.commit('header/deletefrontwaitfixed')
      }, 800)
    }

    //   console.log(this.$refs.father.style.marginRight)
  }
}
</script>
<style scoped>
/* @import 'style.css'; 引入css類 */
@import "@/assets/css/compress/product.min.css";
@import "@/assets/font/style.css";
</style>
