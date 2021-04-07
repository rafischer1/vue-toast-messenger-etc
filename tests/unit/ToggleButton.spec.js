import { mount } from "@vue/test-utils";
import { expect } from "chai";
import ToggleButtonComponent from "@/components/toggle-btn.vue";

describe("ToggleButtonComponent", () => {
  it("exists", () => {
    global.SVGElement = global.Element;
    const wrapper = mount(ToggleButtonComponent);
    expect(wrapper.text()).to.include("X");
  });
});
