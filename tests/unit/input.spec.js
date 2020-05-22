/* eslint-disable */
import { expect } from "chai";
import { mount } from "@vue/test-utils";
import ginput from "@/components/input/input.vue";

describe("input.vue的功能测试", () => {
  it("接收 value 测试", () => {
    const wrapper = mount(ginput, {
      propsData: {
        value: "123",
      },
    });
    const vm = wrapper.vm;
    const inputElement = vm.$el.querySelector("input");
    expect(inputElement.value).to.equal("123");
  });

  it("接收 disabled 测试", () => {
    const wrapper = mount(ginput, {
      propsData: {
        disabled: true,
      },
    });
    const vm = wrapper.vm;
    const inputElement = vm.$el.querySelector("input");
    expect(inputElement.disabled).to.equal(true);
  });

  it("接收 readonly 测试", () => {
    const wrapper = mount(ginput, {
      propsData: {
        readonly: true,
      },
    });
    const vm = wrapper.vm;
    const inputElement = vm.$el.querySelector("input");
    expect(inputElement.readOnly).to.equal(true);
  });

  it("接收 error 测试", () => {
    const wrapper = mount(ginput, {
      propsData: {
        error: "你错了",
      },
    });
    const vm = wrapper.vm;
    const useElement = vm.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.equal(" #i-error ");
    const errorMessage = vm.$el.querySelector(".errorMessage");
    expect(errorMessage.innerText).to.equal("你错了");
  });
});

describe("input.vue的事件测试", () => {
  it("支持 change/input/focus/blur 事件", () => {
    let wrapper = mount(ginput);
    let vm = wrapper.vm;
    ["change", "input", "focus", "blur"].forEach((eventName) => {
      const callback = sinon.fake();
      vm.$on(eventName, callback);
      //触发input的change 事件
      let event = new Event(eventName);
      let inputElement = vm.$el.querySelector("input");
      inputElement.dispatchEvent(event);
      expect(callback).to.have.been.calledWith(event);
    });
  });
});
