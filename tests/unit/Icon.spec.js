import { mount } from "@vue/test-utils";
import { expect } from "chai";
import IconComponent from "../../src/components/icon.vue";

describe("IconComponent", () => {
  it("renders props {title: string, color: string} when passed", () => {
    global.SVGElement = global.Element;
    const _title = "title";
    const _color = "blue";
    const wrapper = mount(IconComponent, {
      props: { title: _title, color: _color }
    });
    expect(wrapper.text()).to.include(_title, _color);
  });
});
