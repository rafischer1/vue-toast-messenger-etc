<template>
  <div class="app-toggle-btn">
    <div
      @click="toggleColorTheme('light')"
      class="theme light"
      v-bind:class="{ selected: lightActive }"
    >
      ☀️
    </div>
    <div
      class="theme dark"
      @click="toggleColorTheme('dark')"
      v-bind:class="{ selected: darkActive }"
    >
      🌙
    </div>
  </div>
</template>

<script>
export default {
  name: "color-theme-toggle",
  props: ["theme"],
  data: function() {
    return {
      darkActive: false,
      lightActive: true
    };
  },
  methods: {
    toggleColorTheme(theme) {
      this.$emit("clicked", theme);
      this.setActive(theme);
    },
    setActive(theme) {
      if (theme === "dark") {
        this.lightActive = false;
        this.darkActive = true;
      } else {
        this.lightActive = true;
        this.darkActive = false;
      }
    }
  }
};
</script>

<style scoped>
.app-toggle-btn {
  float: right;
  font-size: 13px;
  margin: 17px 25px;
  display: flex;
  flex-direction: row;
  border: 1px solid lightgrey;
  border-radius: 20px;
  padding: 1px 10px;
}

.app-toggle-btn:hover {
  background: #78b2be;
}

.theme {
  cursor: pointer;
  filter: brightness(65%);
}

.theme:hover {
  filter: brightness(130%);
}

.selected {
  filter: brightness(100%);
}
</style>
