<!--  -->
<template>
  <div class="frontlayout">
    <transition-group name="menu">
      <div v-for="(item) in headermenu.menu" v-show="headercount == item.id" :key="item.id" :class="item.background">
        <div class="menutitle">
          <h1>Mr.Light 輕食先生</h1>
          <div>保證選用最新鮮的肉品 及 蔬菜</div>
        </div>
      </div>
    </transition-group>
    <div class="container">
      <div ref="headerfixed" class="header" :class="[headerfixeds,headerfixeds2]">
        <div class="imgblock">
          <div class="img" @click="$router.push('/')" />
          <ul class="menulist">
            <li>
              <nuxt-link to="">
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                product
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="">
                about
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="userwhole">
          <input type="text" placeholder="搜尋什麼商品呢?">
          <img src="../assets/font/fonts/search.svg" width="50" height="25">

          <div class="userinfo">
            <i class="user icon-user" />
            <i class="cart icon-cart" />
          </div>
          <div class="menulistbtn">
            <div class="btnline1" />
            <div class="btnline2" />
            <div class="btnline3" />
          </div>
          <!-- </i> -->
        </div>
      </div>
    </div>
    <!-- 用來給header跟main家border css寫在header -->
    <div class="headerborder" />
    <div class="container">
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
          <h3>
            Follow
          </h3>
          <ul class="mediasoft">
            <li class="ig">
              <i class="icon-instagram1 instagram"><span>Instagram</span></i>
            </li>
            <li class="line">
              <i class="icon-line lineline"><span>Line</span></i>
            </li>
            <li class="fb">
              <i class="icon-facebook facebook"><span>Facebook</span></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
      fixed: ''
    }
  },
  // 生命周期 - 創建完成（訪問當前this實例）
  created () {
  },
  // 生命周期 - 掛載完成（訪問DOM元素）
  mounted () {
    this.header = window.setInterval(() => {
      if (this.headercount < 3) {
        this.headercount = this.headercount + 1
      } else {
        this.headercount = 0
      }
    }, 1000000)
    window.addEventListener('scroll', this.headerfixed)
  },
  destroyed () {
    window.clearInterval(this.header)
    window.removeEventListener('scroll', this.headerfixed)
  },
  methods: {
    headerfixed () {
      // 待解決:當fixed this.$refs.headerfixed.offsetTop會等於0 要把this.$refs.headerfixed.offsetTop的值保存下來
      if (document.documentElement.scrollTop >= this.$refs.headerfixed.offsetHeight + this.$refs.headerfixed.offsetTop) {
        this.headerfixeds = 'headerfixed'
        const that = this
        this.fixed = setTimeout(() => {
          that.headerfixeds2 = 'headerfixed2'
          console.log(1)
        }, 100)
      } else {
        this.headerfixeds2 = ''
        this.headerfixeds = ''
        clearTimeout(this.fixed)
      }
    }
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
@import "@/assets/css/compress/footer.min.css"

</style>
