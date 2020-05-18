<template>
  <div id="app">
    <gbutton icon="set">按钮</gbutton>
    <gbutton icon="set"></gbutton>
    <gbutton icon="set" ></gbutton>
    <gbutton icon="set"></gbutton>
    <gbutton icon="set" icon-position="left"></gbutton>
  </div>
</template>

<script>
import gbutton from "./components/button.vue";

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
}
</style>
