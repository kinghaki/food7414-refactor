
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
            <div class="moneyform">
              <table>
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
                <div class="countfixed">
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
                  <button class="nextstop">
                    下一步
                  </button>
                  <button class="goshop">
                    繼續購物
                  </button>
                </div>
              </div>
            </div>
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
          </v-card>
        </v-stepper-content> -->

          <v-stepper-content step="2">
            <v-card
              class="mb-5"
              color="grey lighten-1"
              height="200px"
              dark
            />

            <v-btn
              color="primary"
              @click="e1 = 3"
            >
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-5"
              color="grey lighten-1"
              height="200px"
              dark
            />

            <v-btn
              color="primary"
              @click="e1 = 1"
            >
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
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
      e1: 1
    }
  },
  computed: {
    cart () {
      console.log(this.$store.state.cart.cart)
      return this.$store.state.cart.cart
    },
    count () {
      return this.$store.state.cart.count
    },
    countsfixed () {
      return this.$store.state.cart.height + 'px'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.countfixed)
  },
  methods: {
    countfixed () {
      console.log(document.documentElement.clientHeight || document.body.clientHeight)
    },
    deletecart (item, index) {
      this.$store.commit('cart/deletecart', { item, index })
      // 刪除商品高度要減掉
      this.$store.commit('cart/updatecountheight', -200)
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
    onlynumber (event) {
      event.target.value = event.target.value.replace(/[^\d]/g, '')
      console.log(event.target.value)
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
    }

  }
}
</script>

<style>
@import '@/assets/css/compress/checkout.min.css';

</style>
