<template>
        <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
            @click="$emit('click')">
            <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
            <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
            <!-- 如果加了内容就要用slot显示 -->
            <div class="g-button-content">
                <slot></slot>
            </div>
        </button>
</template>

<script>
import gIcon from "./icon"
export default {
  name: "gbutton",
  components: {
    gIcon
  },
  props: {
      icon: {},
      loading: {
          type: Boolean,
          default: false
      },
      iconPosition: {
          default: 'left'
      }
  },
  // 引入在线JS
  mounted() {
    var element = document.createElement("script");
    element.src =
      "//at.alicdn.com/t/font_1176950_yk1zwhamltb.js";
    document.body.appendChild(element);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../styles/var.scss";
    @keyframes spin {
        0%{ transform: rotate(0deg); }
        100%{ transform: rotate(360deg); }
    }
    
    .g-button{
        font-size: $font-size; 
        height: $button-height; 
        padding: 0 1em;
        border-radius: $border-radius; 
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;
        &:hover { border-color: $border-color-hover; }
        &:active { background-color: $button-active-bg; }
        &:focus { outline: none; }
        &.icon-left{
            .icon{
                margin-right: .3em;
                order: 1;
            }
            .g-button-content{
                order: 2;
            }
        }
        &.icon-right{
            .icon{
                margin-left: .3em;
                order: 2;
            }
            .g-button-content{
                order: 1;
            }
        }
        .loading{
            animation: spin 1s infinite linear
        }
    }
</style>
