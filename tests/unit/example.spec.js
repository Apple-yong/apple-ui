/* eslint-disable */
import { expect } from "chai";
import { mount } from "@vue/test-utils";
import gbutton from "@/components/buttons/button.vue"

describe("button.vue的测试", () => {
  it("button.vue的set测试", () => {
      const button = mount(gbutton, {
          propsData: {
              icon: 'set'
          }
      })
      // 获取use标签内容
      const use = (button.find('svg')).find('use')
      expect(use.attributes('href')).to.equal(' #i-set ')
  });
});
