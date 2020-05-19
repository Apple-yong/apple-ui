<template>
  <div id="app">
    <g-button icon="set" icon-position="right">按钮</g-button>
    <g-button>按钮</g-button>
    <g-button icon="set" icon-position="right">按钮</g-button>
    <g-button icon="set" icon-position="left">按钮</g-button>
    <g-button icon-position="right">加载中</g-button>
    <g-button icon="set" :loading="loading1" @click="loading1 = !loading1">jzz</g-button>
  </div>
</template>

<script>
import gButton from "./components/buttons/button.vue";


export default {
  name: "App",
  data() {
      return {
          loading1: false
      }
  },
  components: {
    gButton
  }
};
</script>

<style lang="scss">
@import "assets/cssreset.css";
#app {
    margin: 20px;
    .g-button{
      margin-right: .3em;
    }
}
</style>
