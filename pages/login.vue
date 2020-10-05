<template>
  <div>
    <div class="loginform">
      <div class="loginbody">
        <div class="headertitle">
          ACCOUNT LOGIN
        </div>
        <ValidationObserver ref="loginss" v-slot="{invalid}">
          <form class="d-flex flex-column align-center">
            <ValidationProvider v-slot="{ errors }" rules="required1|email1">
              <!-- purple是背景色 -->
              <div class="justify-center mt-3">
                <v-text-field
                  v-model="value.acc"
                  style="padding:0 20px"
                  class="indent"
                  label="信箱"
                  placeholder="請輸入信箱"
                  outline
                >
                  123
                </v-text-field>
                <div class=" text-center" style="padding:0 20px; color:red; margin-top:-10px">
                  {{ errors[0] }}
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="alpha_num2|min2:8|max2:12|required2">
              <!-- purple是背景色 -->
              <div class="justify-center ">
                <v-text-field
                  v-model="value.pass"
                  type="password"
                  placeholder="請輸入密碼"
                  label="密碼"
                  outline
                  class="indent "
                  style="padding:0 20px; margin-top:40px"
                >
                  123
                </v-text-field>
                <div class="text-center" style="padding:0 20px; color:red; margin-top:-10px">
                  {{ errors[0] }}
                </div>
              </div>
            </ValidationProvider>
            <!-- v-container -->
            <v-container class>
              <!-- no-gutters 每個v-cols不會有距離 -->
              <v-row no-gutters align-content="center" class="test" style="margin-top:20px; justify-content:center;">
                <!-- cols 沒有的尺寸會採用這個 -->

                <v-btn :disabled="invalid" class="ml-sm-15" color="#1EA071" style="margin:0 10px">
                  登入
                </v-btn>

                <v-btn color="#66B1FF" style="margin:0 10px" @click="$router.push('/register')">
                  註冊
                </v-btn>
              </v-row>
              <!-- <v-row justify="center">
                <v-col cols="12" class="text-center d-flex justify-center">
                  <v-btn link :href="url" class="" @click.native="gettoken">

                  </v-btn>
                </v-col>
              </v-row> -->
              <div class="google">
                <button class="googlelogin">
                  google帳號登入
                </button>
              </div>
            </v-container>
          </form>
        </ValidationObserver>
        <div class="forgetpass">
          <nuxt-link to="/forget">
            忘記密碼?
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { extend } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha_num, required, min, max, email } from 'vee-validate/dist/rules'

// Vue.component('ValidationProvider', ValidationProvider)
// Vue.component('ValidationObserver', ValidationObserver)

extend('required1', {
  ...required,
  message: '信箱不能為空白'
})

extend('email1', {
  ...email,
  message: '信箱格式錯誤'
})

extend('required2', {
  ...required,
  message: '密碼不能為空白'
})

extend('min1', {
  ...min,
  message: '長度需包含6-9字，只能輸入英文和數字'
})

extend('min2', {
  ...min,
  message: '長度需包含8-12字，只能輸入英文和數字'
})
extend('max1', {
  ...max,
  message: '長度需包含6-9字，只能輸入英文和數字'
})

// eslint-disable-next-line no-unused-expressions
extend('max2', {
  ...max,
  message: '長度需包含8-12字，只能輸入英文和數字'
// eslint-disable-next-line no-sequences
}),

extend('alpha_num1', {
  // eslint-disable-next-line camelcase
  ...alpha_num,
  message: '長度需包含6-9字，只能輸入英文和數字'
})

extend('alpha_num2', {
  // eslint-disable-next-line camelcase
  ...alpha_num,
  message: '長度需包含8-12字，只能輸入英文和數字'
})

extend('requ', {
  ...required,
  message: '長度需包含8-12字，且需包含英文和數字'
})
export default {
  layout: 'front',
  data () {
    return {
      value: {
        acc: '',
        pass: ''
      },
      url: ''
    }
  },
  async googleapi () {
    await this.$axios.get('/api/googleapi',
                          {

                          })
  }
}

</script>

<style scoped>
@import '@/assets/css/compress/login.min.css';
</style>
