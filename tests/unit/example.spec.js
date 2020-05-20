import { expect } from "chai";
import { mount } from "@vue/test-utils";


describe("button.vue", () => {
  it("renders props.msg when passed", () => {
      const button = mount({
          propsData: {
              icon: 'settings'
          }
      })
      button.$mount('#test')
      let useElement = button.$el.querySelector('use')
      let href = useElement.getAttribute('xlink:href')
      expect(href).to.eq('#i-settings')
  });
});
