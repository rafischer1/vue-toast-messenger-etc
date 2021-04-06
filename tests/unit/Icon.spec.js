import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import IconComponent from "../../src/components/icon.vue";

describe("IconComponent", () => {
  it("renders props.title when passed", () => {
    global.SVGElement = global.Element;
    const title = "new title";
    const wrapper = shallowMount(IconComponent, {
      props: { title }
    });
    expect(wrapper.text()).to.include(title);
  });
  it("renders props.color when passed", () => {
    global.SVGElement = global.Element;
    const color = "";
    const wrapper = shallowMount(IconComponent, {
      props: { color }
    });
    expect(wrapper.text()).to.include(color);
  });
});
