<template>
  <nav-bar
    @clicked="colorTheme($event)"
    v-bind:theme="selectedColorTheme"
  ></nav-bar>
  <div
    class="app"
    v-bind:style="{
      background: selectedColorTheme.background,
      color: selectedColorTheme.color
    }"
  >
    <app-body-container></app-body-container>
    <toast-wrapper></toast-wrapper>
  </div>
</template>

<script>
import ToastWrapper from "@/components/toasts/toast-wrapper";
import AppBodyContainer from "@/components/app-body-container";
import NavBar from "@/nav-bar";

export default {
  name: "App",
  components: {
    NavBar,
    AppBodyContainer,
    ToastWrapper
  },
  data: function() {
    return {
      selectedColorTheme: this.$store.state.colorThemeLight.theme
    };
  },
  methods: {
    colorTheme(theme) {
      theme === "dark"
        ? (this.selectedColorTheme = this.$store.state.colorThemeDark)
        : (this.selectedColorTheme = this.$store.state.colorThemeLight);
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Avenir Next", sans-serif;
  font-size: 20px;
  font-weight: bold;
  height: fit-content;
}

.app {
  margin-top: 70px;
  overflow-y: scroll;
  height: 1080px;
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
</style>
