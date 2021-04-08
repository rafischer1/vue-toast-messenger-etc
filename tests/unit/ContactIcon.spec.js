import { mount } from "@vue/test-utils";
import { expect } from "chai";
import ContactIconComponent from "../../src/components/contact-icon/contact-icon.vue";

describe("ContactIconComponent", () => {
  global.SVGElement = global.Element;
  it("should exist", () => {
    const wrapper = mount(ContactIconComponent);
    expect(wrapper.exists());
  });

  it("should contain title 'C'", () => {
    const wrapper = mount(ContactIconComponent);
    expect(wrapper.html()).to.contain("C");
  });

  it("should bind color: 'pink'", () => {
    const wrapper = mount(ContactIconComponent);
    wrapper.setData({ color: "pink" });
    expect(wrapper.vm.color).to.equal("pink");
  });
});
