<template>
  <div v-for="(toast, index) of getToasts()" :key="index" class="for-div">
    <toast v-bind:text="toast.text" v-bind:type="toast.type"></toast>
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

<style scoped></style>
