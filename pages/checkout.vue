
<template>
  <div>
    <v-stepper v-model="e1" style="margin:50px 0;">
      <v-stepper-header class="stepperheader">
        <v-stepper-step :complete="e1 > 1" step="1" color="#033" :alt-labels="true">
          購物車
        </v-stepper-step>

        <v-divider />

        <v-stepper-step :complete="e1 > 2" step="2" color="#033">
          使用折扣碼
        </v-stepper-step>

        <v-divider />

        <v-stepper-step step="3" color="#033">
          訂單完成
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <!-- 因為stepper預設是overflow讓height改大一點 -->
          <v-card
            class="mb-5"
            color="grey lighten-1"
            :height="countsfixed"
          >
            <client-only>
              <div class="moneyform">
                <h2 v-if="cart.length === 0" class="noproduct">
                  購物車內無商品，請返回產品列表選購 !
                </h2>
                <table v-else>
                  <thead>
                    <tr>
                      <th style="width:300px">
                        商品圖片
                      </th>
                      <th>商品名稱</th>
                      <th>價格</th>
                      <th>數量</th>
                      <th>小計</th>
                      <th>刪除</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in cart" :key="index">
                      <td>
                        <img :src="item.img" alt="">
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.afterprice }}</td>
                      <td>
                        <div class="inputtotal">
                          <button @click.stop="subcountcart({item,index})">
                            -
                          </button>
                          <div class="output">
                            <input :value="item.count" type="text" @change="changecountcart({item,index},$event)" @input="onlynumber">
                          </div>

                          <button @click.stop="pluscountcart( {item,index})">
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <div class="totalcount">
                          {{ item.count * item.afterprice }}
                        </div>
                      </td>
                      <td>
                        <button
                          @click.stop="deletecart(item,index)"
                        >
                          刪除
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="countabsolute">
                  <div ref="countfixed" class="countfixed">
                    <div class="totalcount">
                      <div class="totalcountheader">
                        金額總計
                      </div>
                      <div v-if="count == 0" class="totalcountmain">
                        0
                      </div>
                      <div v-else class="totalcountmain">
                        $ {{ count }}
                      </div>
                    </div>
                    <button class="nextstop" @click.stop="checklogin">
                      下一步
                    </button>
                    <button class="goshop" @click.stop=" $router.push('/product/all')">
                      繼續購物
                    </button>
                  </div>
                </div>
              </div>
            </client-only>
          </v-card>
          <!-- <v-btn
            color="#4DB6AC"
            @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
          </v-card> -->
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="500px"
          >
            <div class="cheapcode">
              <div class="usecode">
                使用折扣碼:
              </div>
              <div class="inputcode">
                <div class="inputbuttoncode">
                  <input v-model="mrLight" type="text"><button @click="checkCode">
                    套用折扣碼
                  </button>
                </div>
                <i>請輸入<b>MrLight</b>即享30元優惠</i>
              </div>
              <div class="buttonstop">
                <button class="beforestop" @click="e1 = 1">
                  上一步
                </button>
                <button class="nextstop" @click="ecpay">
                  下一步
                </button>
              </div>
              <div ref="ecpay" />
            </div>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
            dark
          />
          <div class="buttonstop">
            <button class="beforestop" @click="e1 = 2">
              上一步
            </button>
            <button class="nextstop">
              送出
            </button>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  layout: 'front',
  data () {
    return {
      e1: 1,
      mrLight: ''
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart.cart
    },
    count () {
      return this.$store.state.cart.count
    },
    countsfixed () {
      return this.$store.state.cart.height + 'px'
    }
  },
  created () {
    this.getUSERCart()
  },
  mounted () {
    window.addEventListener('scroll', this.countfixed)
  },
  destroyed () {
    window.removeEventListener('scroll', this.countfixed)
  },
  methods: {
    countfixed () {
      if (window.pageYOffset >= 500 || document.documentElement.scrollTop >= 500 || document.body.scrollTop >= 500) {
        console.log(this.$refs.countfixed.style.top)
        this.$refs.countfixed.style.top = (window.pageYOffset || document.documentElement.scrollTop ||
          document.body.scrollTop) - 500 + 'px'
      }
    },
    deletecart (item, index) {
      this.$store.commit('header/updatefrontwaitfixed')
      const that = this
      window.setTimeout(() => {
        that.$store.commit('header/deletefrontwaitfixed')
        this.$store.commit('header/updatenegproductcount')
        this.$store.commit('cart/deletecart', { item, index })
        // 刪除商品高度要減掉
        this.$store.commit('cart/updatecountheight', -204)
      }, 800)
    },
    pluscountcart (payload) {
      if (payload.item.count < 30) {
        this.$store.commit('cart/pluscountcart', payload)
      } else {
        alert('單項商品最多下單30個')
      }
    },
    subcountcart (payload) {
      // 結帳車數量=1不能在減了
      if (payload.item.count > 1) {
        this.$store.commit('cart/subcountcart', payload)
      }
    },
    // oninput 會再處理完回傳值
    onlynumber (event) {
      event.target.value = event.target.value.replace(/[^\d]/g, '')
    },
    changecountcart (item, event) {
      if (event.target.value === '') {
        event.target.value = 1
        window.setTimeout(() => {
          alert('請輸入數值')
        })
        return
      }
      if (event.target.value >= 30) {
        alert('單項商品最多下單30個')
        event.target.value = 30
      }
      //   這裡是將原本數量的值先扣掉，再重新計算數量，金額才不會移植累加
      const data = (event.target.value * item.item.afterprice) - (item.item.count * item.item.afterprice)
      // 計算總金額的
      this.$store.commit('cart/totalcountcart', data)
      //  用來手動輸入數量
      this.$store.commit('cart/inputcountcart', { index: item.index, value: event.target.value })
    },
    // 金流
    ecpay () {
      this.$store.commit('header/updatefrontwaitfixed')
      const that = this
      window.setTimeout(async () => {
        that.$store.commit('header/deletefrontwaitfixed')
        const cartname = []
        that.cart.forEach((value) => {
          cartname.push(value.name)
        })
        const { data } = await that.$axios.post('/api/USER/ecpay', {
          count: that.count,
          cart: cartname
        })
        that.$refs.ecpay.innerHTML = data
        document.querySelector('#_form_aiochk').submit()
      }, 800)
    },
    // 看有無登入在決定下一步
    checklogin () {
      if (!this.$store.state.header.usereditimg && this.$store.state.cart.cart.length > 0) {
        this.e1 = 2
      } else if (!this.$store.state.header.usereditimg) {
        alert('購物車無商品，請至商品專區購買')
      } else {
        alert('請先登入會員才能購買')
      }
    },
    // 檢查優惠碼有沒套用成功
    checkCode () {
      if (this.mrLight === 'MrLight') {

      }
    },
    async getUSERCart () {
      const { data } = await this.$axios.post('/api/USER/checkLogin')
      if (data) {
        await this.$store.dispatch('cart/getUSERCart')
      }
    }
  }
}
</script>

<style>
@import '@/assets/css/compress/checkout.min.css';

</style>
