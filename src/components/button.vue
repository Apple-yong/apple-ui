<template>
        <button class="g-button">
            <svg v-if="icon" class="icon" aria-hidden="true">
                <use :xlink:href="` #i-${icon} `" ></use>
            </svg>
            <!-- 如果加了内容就要用slot显示 -->
            <div class="content">
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
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .g-button{
         --button-height: 32px;
        --font-size: 14px;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon{
            order: 1;
        }
        > .content{
            order: 2;
        }
        &.icon-right{
            > .icon{
                order: 2;
            }
            > .content{
                order: 1;
            }
        }
    }
    .content{
        margin-left: .3em;
    }
</style>
