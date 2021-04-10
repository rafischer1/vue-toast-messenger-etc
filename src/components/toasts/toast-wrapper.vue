<template>
  <div class="toasts-container">
    <div v-for="(toast, index) of getToasts()" :key="index" class="for-div">
      <toast v-bind:text="toast.text" v-bind:type="toast.type"></toast>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import Toast from "@/components/toasts/toast";

export default {
  name: "toast-wrapper",
  components: { Toast },
  beforeUpdate() {
    this.show = false;
    this.success = false;
    this.warn = false;
    this.alert = false;
    this.info = false;
  },
  data: function() {
    return {
      show: false,
      success: false,
      warn: false,
      alert: false,
      info: false
    };
  },
  methods: {
    getToasts() {
      store.state.toasts.length > 0 ? (this.show = true) : (this.show = false);
      return store.state.toasts;
    }
  }
};
</script>

<style scoped>
div.toasts-container {
  position: fixed;
  top: 80%;
  right: 20px;
  width: 500px;
  z-index: 999999;
}
</style>
