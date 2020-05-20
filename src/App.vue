<template>
  <div id="app">
    <g-button icon="set" icon-position="right">按钮</g-button>
    <g-button>按钮</g-button>
    <g-button icon="set" icon-position="right">按钮</g-button>
    <g-button icon="set" icon-position="left">按钮</g-button>
    <g-button icon-position="right" :loading="true">加载中</g-button>
    <g-button icon="set" :loading="loading1" @click="loading1 = !loading1">jzz</g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right">下一页</g-button>
    </g-button-group>
    <div id="test"></div>
  </div>
</template>

<script>
import gButton from "./components/buttons/button.vue";
import gButtonGroup from "./components/buttons/button-group";

export default {
  name: "App",
  data() {
    return {
      loading1: false
    }
  },
  components: {
    gButton,
    gButtonGroup
  }
};
</script>

<style lang="scss">
@import "assets/cssreset.css";
* {margin: 0; padding: 0; box-sizing: border-box;}
#app {
  margin: 20px;
}
</style>
