<template>
  <div class="app-toggle-btn">
    <div
      @click="toggleColorTheme('light')"
      class="theme light"
      v-bind:class="{ selected: setTheme() === 'light' }"
    >
      ☀️
    </div>
    <div
      class="theme dark"
      @click="toggleColorTheme('dark')"
      v-bind:class="{ selected: setTheme() === 'dark' }"
    >
      🌙
    </div>
  </div>
</template>

<script>
export default {
  name: "color-theme-toggle",
  props: ["theme"],
  methods: {
    toggleColorTheme(theme) {
      this.$emit("clicked", theme);
    },
    setTheme() {
      return this.theme;
    }
  }
};
</script>

<style scoped>
.app-toggle-btn {
  float: right;
  font-size: 13px;
  margin-bottom: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
}

.theme {
  cursor: pointer;
  filter: brightness(85%);
}

.theme:hover {
  filter: brightness(130%);
}

.selected {
  filter: brightness(100%);
  text-decoration: underline;
  text-decoration-color: lightgrey;
}
</style>
