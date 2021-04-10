<template>
  <div class="nav-bar">
    <color-theme-toggle
      @clicked="colorThemeEmit($event)"
      v-bind:theme="selectedColorTheme"
    ></color-theme-toggle>
  </div>
</template>

<script>
import ColorThemeToggle from "@/components/color-theme-toggle";
export default {
  name: "nav-bar",
  props: ["selectedColorTheme"],
  components: { ColorThemeToggle },
  methods: {
    colorThemeEmit(theme) {
      this.$emit("clicked", theme);
    }
  }
};
</script>

<style scoped>
div.nav-bar {
  background: #8dbfd0;
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #aeaeae;
}
</style>
