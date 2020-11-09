
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
                          <button @click.stop="subcountcart(item)">
                            -
                          </button>
                          <div class="output">
                            <input :value="item.count" type="text" @change="changecountcart(item,$event)" @input="onlynumber">
                          </div>

                          <button @click.stop="pluscountcart(item)">
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
                          @click.stop="deletecart(item)"
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
                <button class="beforestop" @click="takeCode">
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
    deletecart (item) {
      // 等待的圈圈
      this.$store.commit('header/updatefrontwaitfixed')
      const that = this
      window.setTimeout(async () => {
        that.$store.commit('header/deletefrontwaitfixed')
        await that.$store.dispatch('cart/deleteUSERCart', item)
      }, 800)
    },
    async pluscountcart (payload) {
      await this.$store.dispatch('cart/addUSERCart', payload)
    //   if (payload.item.count < 30) {
    //     this.$store.commit('cart/pluscountcart', payload)
    //   } else {
    //     alert('單項商品最多下單30個')
    //   }
    },
    async subcountcart (payload) {
      await this.$store.dispatch('cart/subUSERCart', payload)
      // 結帳車數量=1不能在減了
    //   if (payload.item.count > 1) {
    //     this.$store.commit('cart/subcountcart', payload)
    //   }
    },
    // oninput 會再處理完回傳值
    onlynumber (event) {
      event.target.value = event.target.value.replace(/[^\d]/g, '')
    },
    changecountcart (item, event) {
      // eslint-disable-next-line eqeqeq
      if (event.target.value === '' || event.target.value == 0) {
        event.target.value = 1
        item.value = event.target.value
        this.$store.dispatch('cart/handInputUSERCart', item)
      } else {
        item.value = event.target.value
        this.$store.dispatch('cart/handInputUSERCart', item)
      }
      //   if (event.target.value >= 30) {
      //     alert('單項商品最多下單30個')
      //     event.target.value = 30
      //   }

    //   //   這裡是將原本數量的值先扣掉，再重新計算數量，金額才不會移植累加
    //   const data = (event.target.value * item.item.afterprice) - (item.item.count * item.item.afterprice)
    //   // 計算總金額的
    //   this.$store.commit('cart/totalcountcart', data)
    //   //  用來手動輸入數量
    //   this.$store.commit('cart/inputcountcart', { index: item.index, value: event.target.value })
    },
    // 金流
    ecpay () {
      this.$store.commit('header/updatefrontwaitfixed')
      const that = this
      window.setTimeout(async () => {
        that.$store.commit('header/deletefrontwaitfixed')

        const { data } = await that.$axios.get('/api/USER/ecpay/Credit')
        that.$refs.ecpay.innerHTML = data
        document.querySelector('#_form_aiochk').submit()
      }, 800)
    },
    // 檢查優惠碼有沒套用成功
    async checkCode () {
      if (this.mrLight === 'MrLight') {
        const { data } = await this.$axios.post('/api/USER/ecpay/checkCode')
        if (data === true) {
          alert('優惠碼套用成功')
        } else {
          alert('優惠碼已經套用過了')
        }
      } else {
        alert('優惠碼套用失敗')
      }
    },
    async takeCode () {
      await this.$axios.post('/api/USER/ecpay/takeCode')
      alert('返回後，套用優惠碼重置')
      this.e1 = 1
    },
    // 看有無登入在決定下一步
    async checklogin () {
      const { data } = await this.$axios.post('/api/USER/checkLogin')
      if (data && this.$store.state.cart.cart.length > 0) {
        this.e1 = 2
      } else if (this.$store.state.cart.cart.length === 0) {
        alert('購物車無商品，請至商品專區購買')
        this.$router.push('/product/all')
      } else {
        alert('請先登入會員才能購買')
      }
    }

  }
}
</script>

<style>
@import '@/assets/css/compress/checkout.min.css';

</style>
