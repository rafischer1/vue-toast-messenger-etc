<template>
  <div
    class="app"
    v-bind:style="{
      background: selectedColorTheme.background,
      color: selectedColorTheme.color
    }"
  >
    <button @click="toggleColorTheme" class="app-toggle-btn">
      Toggle Theme
    </button>
    <app-body-container></app-body-container>
    <toast-wrapper></toast-wrapper>
  </div>
</template>

<script>
import ToastWrapper from "@/components/toasts/toast-wrapper";
import AppBodyContainer from "@/components/app-body-container";

export default {
  name: "App",
  components: {
    AppBodyContainer,
    ToastWrapper
  },
  data: function() {
    return {
      selectedColorTheme: this.$store.state.colorThemeLight
    };
  },
  methods: {
    toggleColorTheme() {
      if (this.selectedColorTheme.theme === "light") {
        this.selectedColorTheme = this.$store.state.colorThemeDark;
      } else {
        this.selectedColorTheme = this.$store.state.colorThemeLight;
      }
    }
  }
};
</script>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Avenir Next", sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.app {
  overflow-y: scroll;
}

button {
  padding: 1% 2%;
  color: #333333;
  cursor: pointer;
  margin: 2px;
  border-radius: 5px;
  background: whitesmoke;
  border: none;
  outline: none;
}

button:hover {
  background: #f0f0f0;
}

button:active {
  background: #e2e2e2;
}

.app-toggle-btn {
  float: right;
  height: 3%;
  width: 10%;
  font-size: 10px;
  margin-bottom: 20px;
}
</style>
