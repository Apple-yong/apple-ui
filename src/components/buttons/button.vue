<template>
        <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
            <svg v-if="icon" class="icon" aria-hidden="true">
                <use :xlink:href="` #i-${icon} `" ></use>
            </svg>
            <!-- 如果加了内容就要用slot显示 -->
            <div class="g-button-content">
                <slot></slot>
            </div>
        </button>
</template>

<script>
export default {
  name: "gbutton",
  props: ['icon', 'iconPosition'],
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
    @import "../../styles/_var.scss";
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
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
    }
</style>
