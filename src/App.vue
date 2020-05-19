<template>
  <div id="app">
    <gbutton icon="set" icon-position="right">按钮</gbutton>
    <gbutton>按钮</gbutton>
    <gbutton icon="set" icon-position="right">按钮</gbutton>
    <gbutton icon="set" icon-position="left">按钮</gbutton>
    <gbutton icon="set"></gbutton>
  </div>
</template>

<script>
import gbutton from "./components/buttons/button.vue";

export default {
  name: "App",
  components: {
    gbutton
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
