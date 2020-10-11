
<template>
  <div>
    <v-stepper v-model="e1" style="height:500px;margin:50px 0">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" color="#033" :alt-labels="true">
          購物車
        </v-stepper-step>

        <v-divider />

        <v-stepper-step :complete="e1 > 2" step="2" color="#033">
          填寫資料
        </v-stepper-step>

        <v-divider />

        <v-stepper-step step="3" color="#033">
          訂單完成
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
            dark
          />
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

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
  }

}
</script>

<style>
@import '@/assets/css/compress/checkout.min.css';

</style>
