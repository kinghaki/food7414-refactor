// 用來導入全局組件的

import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
