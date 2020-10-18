<!--  -->
<template>
  <div>
    <div>{{ ss }}</div>
    <div class="father" style>
      <div ref="father" class="trans">
        <div v-for="(value,index) in item" :key="index" :class="value.items" />
        <!-- <div :class="[a]">
        1
      </div>
      <div :class="[b]">
        2
      </div>
      <div :class="[c]">
        3
      </div>
      <div :class="[d]">
        4
      </div>
      <div :class="[e]">
        5
        </div>-->
      </div>
    </div>
    <button class="lefts" @click="change">
      右
    </button>
    <div class="background">
      <div>{{}}</div>
    </div>
    <input v-model="avc" type="text">
    <div @click="ssss();gggg()">
      1237
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',
  data () {
    return {
      item: [{ items: 'a left' }, { items: 'b left' }, { items: 'c center' }, { items: 'd left' }, { items: 'e left' }],
      ss: '1',
      gg: 456,
      avc: ''

    }
  },
  watch: {
    avc (value) {
      console.log(value)
    }
  },
  // 生命周期 - 創建完成（訪問當前this實例）
  created () {
    console.log('created')
  },
  // 生命周期 - 掛載完成（訪問DOM元素）
  mounted () {

  },
  updated () {
    console.log('upadted')
  },
  methods: {
    change () {
      //   this.$refs.father.style.marginRight = this.$refs.father.style.marginRight.replace('px', '') - 600 + 'px'
      //   //   this.$refs.father.style.marginRight
      this.data = '2'
      this.$refs.father.style.transform = 'translateX(300px)'
      const that = this
      this.item.forEach((v, i) => {
        if (v.items.includes('center')) {
          v.items = v.items.replace('center', 'left')
          that.item[i - 1].items = that.item[i - 1].items.slice(0, 1)
          that.item[i - 1].items += ' center'
        }
      })
    //   console.log(this.$refs.father.style.marginRight)
    },
    ssss () {
      console.log(1)
    },
    gggg () {
      console.log(2)
    }

  }
}
</script>
<style scoped>
/* @import 'style.css'; 引入css類 */
.father {
  background: tan;

}
.trans {
  background-color: rosybrown;
  display: flex;
  justify-content: space-around;
  perspective: 1000px;
}
.trans > div {
  width: 150px;
  height: 150px;
}
.a {
  /* transition: all 2s ease; */
  background-color: red;
  /* order: 1; */
}

.b {
  /* transform-origin: 50% 50%; */
  background-color: orange;
  /* transition: all 2s ease; */
}

.c {
  background-color: yellow;
  /* transition: all 2s ease; */
  /* order: 3; */
}

.d {
  background-color: green;
  /* transition: all 2s ease; */
  /* order: 4; */
}

.e {
  background-color: aqua;
  /* transition: all 2s ease; */
  /* order: 5; */
}
.left {
    transition: transform 0.5s ease-in-out;
  opacity: 0.5;
}
.center {
    /* transform-style: preserve-3d; */
  transition: transform 0.5s ease-in-out ;
  transform: scale(1.5,1.5)
}
.background{
  /* background-image: url("../assets/img/backstone.jpg"); */
  width: 100%;
  height: 500px;
}
</style>
