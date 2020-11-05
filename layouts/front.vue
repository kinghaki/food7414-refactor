<!--  -->
<template>
  <div ref="frontlayout" class="frontlayout">
    <div class="frontwait" :class="frontwaitfixed">
      <div class="circle" />
    </div>
    <div class="frontfixed">
      <!-- <input type="text"> -->
      <transition-group v-if="!($route.path =='/login' || $route.path =='/register' || $route.path =='/forget')" name="menu">
        <div
          v-for="(item) in headermenu.menu"
          v-show="headercount == item.id"
          :key="item.id"
          :class="item.background"
        >
          <div class="menutitle">
            <h1>Mr.Light 輕食先生</h1>
            <div>保證選用最新鮮的肉品 及 蔬菜</div>
          </div>
        </div>
      </transition-group>
      <div class="containers">
        <div ref="headerheight" class="headerfixed" />
        <div ref="headerfixed" class="header" :class="[headerfixeds,headerfixeds2]">
          <div class="imgblock">
            <div class="img" @click="$router.push('/')" />
            <ul class="menulist">
              <li>
                <nuxt-link to="/" exact-active-class="active" tag="button" style="outline:none">
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/product/all" active-class="active" tag="button" style="outline:none" :class="productmainanddrink">
                  product
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about" tag="button" exact-active-class="active" style="outline:none">
                  about
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="userwhole">
            <div class="inputtooltip">
              <!-- keypress會失敗 不知道為啥 -->
              <input
                v-model="inputlen"
                type="text"
                placeholder="搜尋什麼商品呢?"
                @click.stop="firstword"
                @blur="leavefirstword"
                @input="inputtext"
                @keyup.delete="deleteinputtext"
                @keyup.enter="searchinput"
                @keydown.up="upinput"
                @keydown.down="downinput"
              >

              <ul ref="inputul">
                <li v-for="(item,index) in inpclidata" :key="index" :ref="`li${index+1}`" @mousedown.left="test(item)">
                  {{ item }}
                </li>
              </ul>
            </div>

            <img src="../assets/font/fonts/search.svg" width="50" height="25" @click="searchinput">
            <!-- <img v-else src="../assets/img/svg/user-edit-solid.svg" alt=""> -->
            <client-only>
              <div class="userinfo">
                <i v-if="usereditimg" class="user icon-user" @click="$router.push('/login')" />
                <div v-else class="menuabsolute">
                  <img src="../assets/img/SVG/user-edit-solid.svg" class="userlogin" alt="" @click.stop="$router.push('/checkout')">
                  <ul class="menu">
                    <li class="checkout" @click.stop="$router.push('/product/all')">
                      商品區
                    </li>

                    <nuxt-link tag="li" :to="'/'" class="logout" @click.native="logout">
                      登出
                    </nuxt-link>
                  </ul>
                </div>
                <i class="cart icon-cart" @click="$router.push('/checkout')">
                  <span>{{ productcount }}</span>
                </i>
              </div>
            </client-only>
            <div class="menulistbtn" @click="isdisplay = 'block'">
              <div class="btnline1" />
              <div class="btnline2" />
              <div class="btnline3" />
            </div>
          </div>
        </div>
      </div>

      <!-- 用來給header跟main家border css寫在header -->
      <div class="headerborder" />
      <div class="containers">
        <!-- vue keep-alive包在外面 -->
        <!-- <nuxt keep-alive /> -->
        <nuxt />
      </div>
      <div id="footer">
        <h2 class="title">
          Mr.Light 輕食先生
        </h2>

        <div class="info">
          <div class="contact">
            <h3 class="contacttitle">
              聯絡資訊
            </h3>
            <ul class="contactmain">
              <li class="tel">
                TEL: 02-29368011
              </li>
              <li class="address">
                ADDRESS: 台北市文山區新光路一段50號
              </li>
              <li class="time">
                TIME: 11:30-14:00 ，17:30-2000
              </li>
            </ul>
          </div>
          <div class="copyright">
            <h4 class="copyrighttitle">
              ©Copright 2020 TSAI-Yi-Chin
            </h4>
            <span>僅個人作品練習 ，無任何商品用途</span>
          </div>
          <div class="media">
            <h3>Follow</h3>
            <ul class="mediasoft">
              <li class="ig">
                <i class="icon-instagram1 instagram">
                  <span>Instagram</span>
                </i>
              </li>
              <li class="line">
                <i class="icon-line lineline">
                  <span>Line</span>
                </i>
              </li>
              <li class="fb">
                <i class="icon-facebook facebook">
                  <span>Facebook</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 用來做手機的menu選單 -->
    <div
      v-if="isdisplay == 'block'"
      style="position:fixed;top:0;left:0;background-color:white; width:100%; height:100%;z-index:11;padding:10px"
    >
      <div style="display:flex; justify-content:space-between; cursor:pointer; height:150px">
        <div @click.stop="isdisplay='none', $router.push('/')">
          <img src="../assets/img/logo.png" alt style="height:100%;width:150px">
        </div>
        <img src="../assets/img/svg/cancel-circle.svg" alt @click="isdisplay='none'">
      </div>
      <ul style="padding-top:20px;padding-left:15px">
        <li
          style="border-bottom:3px double gray; padding-bottom:10px;cursor:pointer"
          @click.stop="isdisplay='none', $router.push('/')"
        >
          <h2>首頁</h2>
          <span style="color:gray">HOME</span>
        </li>
        <li
          style="border-bottom:3px double gray; padding-bottom:10px;cursor:pointer"
          @click.stop="isdisplay='none', $router.push('/product')"
        >
          <h2>產品</h2>
          <span style="color:gray">PRODUCT</span>
        </li>
        <li
          style="border-bottom:3px double gray; padding-bottom:10px;cursor:pointer"
          @click.stop="isdisplay='none', $router.push('/about')"
        >
          <h2>關於我們</h2>
          <span style="color:gray">ABOUT</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      headermenu: {
        menu: [{
                 background: 'menupng0',
                 id: 0
               },
               {
                 background: 'menupng1',
                 id: 1
               },
               {
                 background: 'menupng2',
                 id: 2
               },
               {
                 background: 'menupng3',
                 id: 3
               }
        ]

      },
      headercount: 0,
      header: '',
      headerfixeds: '',
      headerfixeds2: '',
      fixed: '',
      isdisplay: 'none',
      inputlen: '',
      clickdata: '',
      // 方向鍵上下的索引值，添加灰色背景
      updownnum: 0,
      token: '',
      productmainanddrink: '',
      windowscrolltop: 0
      // ss: 0
    }
  },
  computed: {
    inpclidata () {
      return this.$store.state.header.clickdata
    },
    frontwaitfixed () {
      return this.$store.state.header.frontwaitfixed
    },
    usereditimg () {
      return this.$store.state.header.usereditimg
    },
    productcount () {
      return this.$store.state.header.productcount
    }

  },
  watch: {
    $route (to, from) {
      this.productMainDrink()
    }
  },

  // 生命周期 - 創建完成（訪問當前this實例）
  created () {

  },
  // 生命周期 - 掛載完成（訪問DOM元素）
  mounted () {
    // 最頭的照片倫波圖
    this.header = window.setInterval(() => {
      if (this.headercount < 3) {
        this.headercount = this.headercount + 1
      } else {
        this.headercount = 0
      }
    }, 1000000)
    // 用來讓product連結激活

    // headermenu
    // this.$refs.frontlayout.style.height = this.$refs.frontfixed.style.height
    // window.addEventListener('resize', this.)
    window.addEventListener('scroll', this.headerfixed)
    window.addEventListener('scroll', this.bodyheight)
    // window.addEventListener('scroll', this.smoothscroll)
  },
  destroyed () {
    window.clearInterval(this.header)
    window.removeEventListener('scroll', this.headerfixed)
    window.removeEventListener('scroll', this.bodyheight)
  },
  methods: {
    headerfixed () {
      window.removeEventListener('scroll', this.headerfixed)
      // 已解決:當fixed this.$refs.headerfixed.offsetTop會等於0 要把this.$refs.headerfixed.offsetTop的值保存下來
      const a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      if (a >= this.$refs.headerfixed.offsetHeight + this.$refs.headerfixed.offsetTop) {
        this.headerfixeds = 'headerfixed'
        this.$refs.headerheight.style.height = '200px'
        const that = this
        this.fixed = setTimeout(() => {
          that.headerfixeds2 = 'headerfixed2'
          // console.log(1)
        }, 100)
      } if (a <= this.$refs.headerheight.offsetTop) {
        this.headerfixeds2 = ''
        this.headerfixeds = ''
        this.$refs.headerheight.style.height = '0px'
        clearTimeout(this.fixed)
      }
      window.addEventListener('scroll', this.headerfixed)
    },
    bodyheight () {
      window.removeEventListener('scroll', this.bodyheight)
      if (window.pageYOffset === document.documentElement.style.height) { document.documentElement.style.height += document.documentElement.clientHeight }
    },
    // 點擊第一個字提是眶出來
    async firstword () {
      this.$refs.inputul.style.display = 'block'
      await this.$store.dispatch('header/headerinput', this.inputlen)

      // 每次提是眶出來的東西數量不同必須歸零
      this.updownnum = 0
    },
    // 離開焦點
    leavefirstword () {
      // 非常重要，當滑鼠blur時會將所有得到的值背景清除
      for (let i = 1; i <= this.inpclidata.length; i++) {
        if (this.$refs[`li${i}`].length > 0) {
          this.$refs[`li${i}`][0].style.backgroundColor = 'white'
        }
      }
      this.$refs.inputul.style.display = 'none'
      this.updownnum = 0
    },
    // v-model只會在文字輸入完成時，oninput會在輸入的每個字都會觸發，ex:注音拼音
    async inputtext () {
      this.$refs.inputul.style.display = 'block'

      // 每次提是眶出來的東西不同必須歸零
      this.updownnum = 0
      await this.$store.dispatch('header/headerinput', this.inputlen)
    },

    // 使用backspace鍵觸發的
    async deleteinputtext () {
      this.$refs.inputul.style.display = 'block'
      // 非常重要，當滑鼠blur時會將所有得到的值背景清除
      for (let i = 1; i <= this.inpclidata.length; i++) {
        if (this.$refs[`li${i}`].length > 0) {
          this.$refs[`li${i}`][0].style.backgroundColor = 'white'
        }
      }
      // 每次提是眶出來的東西不同必須歸零
      this.updownnum = 0
      await this.$store.dispatch('header/headerinput', this.inputlen)
    },

    // 點擊li標籤
    test (value) {
      this.inputlen = value

      // 每次提是眶出來的東西不同必須歸零
      this.updownnum = 0
      // this.$refs.inputul.style.display = 'none'
    },
    searchinput () {
      this.$store.commit('header/updatefrontwaitfixed')
      this.$refs.inputul.style.display = 'none'
      window.setTimeout(() => {
        this.$router.push({ path: '/product/search', query: { search: this.inputlen } })
        this.$store.commit('header/deletefrontwaitfixed')
        this.inputlen = ''
        this.updownnum = 0
      }, 800)
    },
    upinput () {
      // 在v-for的template標籤添加 ref 會導致 取$refs時 會變成"""陣列"""
      const len = this.inpclidata.length

      if (this.updownnum === 0 || this.updownnum === 1) {
        switch (this.updownnum) {
        case 0:
          // this.$refs[`li${this.updownnum + 1}`][0].style.backgroundColor = 'transparent'
          break
        case 1:
          this.$refs[`li${this.updownnum}`][0].style.backgroundColor = 'white'
        }

        this.updownnum = len
        this.$refs[`li${len}`][0].style.backgroundColor = 'gray'
        this.inputlen = this.$refs[`li${len}`][0].textContent.trim()
      } else {
        this.$refs[`li${this.updownnum}`][0].style.backgroundColor = 'white'
        this.updownnum -= 1
        this.$refs[`li${this.updownnum}`][0].style.backgroundColor = 'gray'
        this.inputlen = this.$refs[`li${this.updownnum}`][0].textContent.trim()
      }
    },
    downinput () {
      const len = this.inpclidata.length

      if (this.updownnum === len || this.updownnum === 0) {
        switch (this.updownnum) {
        case 0:
          // this.$refs[`li${this.updownnum + 1}`][0].style.backgroundColor = 'transparent'
          break
        case len:
          this.$refs[`li${this.updownnum}`][0].style.backgroundColor = 'transparent'
        }

        this.updownnum = 1
        this.$refs[`li${this.updownnum}`][0].style.backgroundColor = 'gray'
        this.inputlen = this.$refs[`li${this.updownnum}`][0].textContent.trim()

        // 到時候清除顏色把索引值存起來
        this.removebackground = this.updownnum
      } else {
        this.$refs[`li${this.updownnum}`][0].style.backgroundColor = 'transparent'
        this.updownnum += 1
        this.$refs[`li${this.updownnum}`][0].style.backgroundColor = 'gray'
        this.inputlen = this.$refs[`li${this.updownnum}`][0].textContent.trim()

        // 到時候清除顏色把索引值存起來
        this.removebackground = this.updownnum
      }
    },
    // 用來使productmain 和 productdrink class觸發
    productMainDrink () {
      if (this.$route.path === '/product/main' || this.$route.path === '/product/drink') {
        this.productmainanddrink = 'active'
      } else {
        this.productmainanddrink = ''
      }
    },
    async logout () {
      window.setTimeout(() => {
        alert('登出成功')
      }, 200)
      // 把登入圖案改成登出圖案
      await this.$store.commit('header/updatelogout')
      this.$axios.delete('/api/USER/clearJWT')
    }

    // 用來使滾輪滑動平順

    // 待解決:不知道如何讓滾輪便平滑

    // async smoothscroll () {
    //   // if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > this.windowscrolltop) {
    //   //   window.scrollTo({ top: this.windowscrolltop + 100, behavior: 'smooth' })
    //   //   const that = this
    //   //   window.setTimeout(() => {
    //   //     that.windowscrolltop += 100
    //   //   }, 1000)
    //   // } else {
    //   //   window.scrollTo({ top: this.windowscrolltop - 100, behavior: 'smooth' })
    //   //   const that = this
    //   //   window.setTimeout(() => {
    //   //     that.windowscrolltop -= 100
    //   //   }, 1000)
    //   // }

    // }

  }

}
</script>
<style scoped>
/* @import 'style.css'; 引入css類 */
@import "@/assets/font/style.css";
@import "@/assets/css/compress/front.min.css";
@import "@/assets/css/compress/container.min.css";
@import "@/assets/css/compress/header.min.css";
@import "@/assets/css/compress/headermenu.min.css";
@import "@/assets/css/compress/footer.min.css";
</style>
