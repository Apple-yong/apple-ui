/* eslint-disable */
import Vue from "vue";
import { expect } from "chai";
import { mount } from "@vue/test-utils";
import gbutton from "@/components/buttons/button.vue";

describe("button.vue的测试", () => {
  it("button.vue的set测试", () => {
    const button = mount(gbutton, {
      propsData: {
        icon: "set",
      },
    });
    // 获取use标签内容
    const use = button.find("svg").find("use");
    expect(use.attributes("href")).to.equal(" #i-set ");
  });

  it("button.vue的loading测试", () => {
    const button = mount(gbutton, {
      propsData: {
        icon: "set",
        loading: true,
      },
    });
    // 获取use标签内容
    const use = button.find("svg").find("use");
    expect(use.attributes("href")).to.equal(" #i-loading ");
  });

  it("icon 默认的 order 是 1", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(gbutton);
    const vm = new Constructor({
      propsData: {
        icon: "set",
      },
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
  });

  it("设置 iconPosition 可以改变 order", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(gbutton);
    const vm = new Constructor({
      propsData: {
        icon: "settings",
        iconPosition: "right",
      },
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).order).to.eq("2");
    vm.$el.remove();
    vm.$destroy();
  });
  
//   it("点击 button 触发 click 事件", () => {
//     const Constructor = Vue.extend(gbutton);
//     const vm = new Constructor({
//       propsData: {
//         icon: "settings",
//       },
//     }).$mount();

//     const callback = sinon.fake();
//     vm.$on("click", callback);
//     vm.$el.click();
//     expect(callback).to.have.been.called;
//   });
});
