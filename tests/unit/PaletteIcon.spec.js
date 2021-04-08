import { mount } from "@vue/test-utils";
import { expect } from "chai";
import PaletteIconComponent from "../../src/components/palette-icon/palette-icon.vue";

describe("PaletteIconComponent", () => {
  it("should exist", () => {
    const wrapper = mount(PaletteIconComponent);
    expect(wrapper.exists());
  });

  it("should contain title 'P'", () => {
    const wrapper = mount(PaletteIconComponent);
    expect(wrapper.html()).to.contain("P");
  });

  it("should bind color: 'salmon'", () => {
    const wrapper = mount(PaletteIconComponent);
    wrapper.setData({ color: "salmon" });
    expect(wrapper.vm.color).to.equal("salmon");
  });
});
