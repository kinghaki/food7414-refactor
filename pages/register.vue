<template>
  <div>
    <!-- <div @click="fuck"></div> -->
    <div class="loginform">
      <div class="loginbody ">
        <div class="headertitle">
          Register
        </div>
        <ValidationObserver ref="loginss" v-slot="{invalid}">
          <form>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required1|email1"
            >
              <!-- purple是背景色 -->
              <div class="justify-center mt-3">
                <v-text-field
                  v-model="value.acc"
                  label="信箱"
                  placeholder="請輸入註冊信箱"
                  style="padding:0 20px; margin-top:40px"
                >
                  123
                </v-text-field>
                <div class="mt-n5 text-center" style="padding:0 20px; color:red; margin-top:-10px">
                  {{ errors[0] }}
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              :rules="{ alpha_num2|min2:8|max2:12|required2|confirmed:confirmation,regex: /(?:[0-9]+[a-zA-Z]|[a-zA-z]+[0-9])/ }"
              rules=""
            >
              <!-- purple是背景色 -->
              <div class="justify-center mt-4">
                <v-text-field
                  v-model="value.pass"
                  type="password"
                  placeholder="請輸入註冊密碼"
                  label="密碼"
                  style="padding:0 20px; margin-top:40px"
                >
                  123
                </v-text-field>
                <div class="mt-n5 text-center" style="padding:0 20px; color:red; margin-top:-10px">
                  {{ errors[0] }}
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"

              vid="confirmation"
            >
              <div
                class="
              justify-center
              mt-4"
              >
                <v-text-field
                  v-model="confirmation"
                  type="password"
                  placeholder="再次輸入註冊密碼"
                  label="確認密碼"
                  style="padding:0 20px; margin-top:40px"
                >
                  123
                </v-text-field>
                <div class="mt-n5 text-center" style="padding:0 20px; color:red; margin-top:-10px">
                  {{ errors[0] }}
                </div>
              </div>
            </validationprovider>
            <div class="mt-n5 text-center">
              <v-container>
                <!-- no-gutters 每個v-cols不會有距離 -->
                <v-row no-gutters style="justify-content:center">
                  <!-- cols 沒有的尺寸會採用這個 -->

                  <v-btn class="mr-4" :disabled="invalid">
                    提交
                  </v-btn>

                  <v-btn class="mr-4" @click="$router.push('/login')">
                    回到登入頁面
                  </v-btn>
                </v-row>
              </v-container>
            </div>
          </form>
        </validationobserver></form>
      </div>
    </div>
  </div>
</template>

<script>

import { extend } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha_num, required, min, max, confirmed, email, regex } from 'vee-validate/dist/rules'

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
})
// eslint-disable-next-line no-unused-expressions
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
extend('confirmed', {
  ...confirmed,
  message: '確認密碼 與 密碼 輸入的不一致'
})
extend('regex', {
  ...regex,
  message: '必須包含英文和數字'
})
export default {
  layout: 'front',
  data () {
    return {
      value: {
        acc: '',
        pass: ''
      },
      confirmation: ''
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/compress/register.min.css";
</style>
