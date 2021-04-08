import { mount } from "@vue/test-utils";
import { expect } from "chai";
import MessagesIconComponent from "../../src/components/messages-icon/messages-icon.vue";

describe("MessagesIconComponent", () => {
  it("should exist", () => {
    const wrapper = mount(MessagesIconComponent);
    expect(wrapper.exists());
  });

  it("should contain title 'M'", () => {
    const wrapper = mount(MessagesIconComponent);
    expect(wrapper.html()).to.contain("M");
  });

  it("should bind color: 'teal'", () => {
    const wrapper = mount(MessagesIconComponent);
    wrapper.setData({ color: "teal" });
    expect(wrapper.vm.color).to.equal("teal");
  });
});
