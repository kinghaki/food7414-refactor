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
                  v-model="email"
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

            <!-- v-container -->
            <v-container class>
              <!-- no-gutters 每個v-cols不會有距離 -->
              <v-row no-gutters align-content="center" class="test" style="margin-top:20px; justify-content:center;">
                <!-- cols 沒有的尺寸會採用這個 -->

                <v-btn :disabled="invalid" class="ml-sm-15" color="#1EA071" style="margin:0 10px" @click="resetpass">
                  發送
                </v-btn>
                <v-btn class="mr-4" style="background:#DBA1A0" @click="$router.push('/login')">
                  回到登入頁面
                </v-btn>
              </v-row>
            </v-container>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from '../plugins/firebase'
export default {
  layout: 'front',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    resetpass () {
      const that = this
      const auth = firebase.auth()

      auth.sendPasswordResetEmail(this.email).then(() => {
        // Email sent.
        alert('請至信箱進行驗證')
        window.setTimeout(() => {
          that.$router.replace('/login')
        }, 100)
      })
    }
  }
}
</script>

<style  scoped>
@import '@/assets/css/compress/forget.min.css';
</style>
