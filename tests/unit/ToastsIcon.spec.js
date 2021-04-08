import { mount } from "@vue/test-utils";
import { expect } from "chai";
import ToastsIconComponent from "../../src/components/toasts-icon/toasts-icon.vue";

describe("ToastsIconComponent", () => {
  it("should exist", () => {
    const wrapper = mount(ToastsIconComponent);
    expect(wrapper.exists());
  });

  it("should contain title 'T'", () => {
    const wrapper = mount(ToastsIconComponent);
    expect(wrapper.html()).to.contain("T");
  });

  it("should bind color: 'blue'", () => {
    const wrapper = mount(ToastsIconComponent);
    wrapper.setData({ color: "blue" });
    expect(wrapper.vm.color).to.equal("blue");
  });
});
