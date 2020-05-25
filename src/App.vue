<template>
    <div id="app">
        <div class="box">
            <g-input value="但分" readonly></g-input>
            <g-input value="但分" disabled></g-input>
        </div>
        <div class="box">
            <g-input value="但分" error="不能少于两个字"></g-input>
            <g-input value="王" @change="inputChange"></g-input>
        </div>
        <div class="box">
            <g-input v-model="message"></g-input>
            <p>{{message}}</p>
            <button @click="message+=1">+1</button>
        </div>

        <div style="margin: 20px">
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
        </div>
    </div>
</template>

<script>
import gButton from "./components/buttons/button.vue";
import gButtonGroup from "./components/buttons/button-group";
import gInput from "./components/input/input";

export default {
    name: "App",
    data() {
        return {
            loading1: false,
            message: 'hi'
        };
    },
    components: {
        gButton,
        gButtonGroup,
        gInput
    },
    created() {
        setTimeout(() => {
            let event = new Event("change");
            let inputElement = this.$el.querySelector("input");
            inputElement.dispatchEvent(event);
            console.log("hi");
        }, 3000);
    },
    methods: {
        inputChange(e) {
            console.log(e);
        }
    }
};
</script>

<style lang="scss">
@import "assets/cssreset.css";
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    margin: 20px;
    .box {
        margin: 20px;
    }
}
</style>


