<template>
  <div>
    <div class="toasts-parent" v-for="(toast, index) of getToasts()" :key="index">
        <div class="toast-div" v-bind:class="{'success': success, 'info': info, 'alert': alert, 'warn': warn}" >
          {{toast.text}}
        </div>
    </div>
  </div>
</template>

<script>
import store from "@/store"

export default {
name: "toast",
  beforeUpdate() {
    this.show = false
    this.success = false
    this.warn = false
    this.alert = false
    this.info = false
  },
  data: function () {
    return {
      show: false,
      success: false,
      warn: false,
      alert: false,
      info: false
    }
  },
  methods: {
    getToasts() {
      store.state.toasts.length > 0 ? this.show = true : this.show = false
      if (store.state.toasts.length > 0) {
        switch (store.state.toasts[0].type) {
          case "success":
            this.success = true
            break;
          case "alert":
            this.alert = true
            break;
          case "warn":
            this.warn = true
            break;
          case "info":
            this.info = true
            break;
          default:
            this.info = true
        }
      }
      return store.state.toasts
    },
  }
}
</script>

<style scoped>

  div.toasts-parent {
    display: flex;
    justify-content: flex-end;
  }

  .toast-div {
    border: 1px solid whitesmoke;
    background: whitesmoke;
    padding: 5px 2px;
    color: #333333;
    width: 10%;
    border-radius: 5px;
    font-size: 18px;
    margin-right: 10px;
    position: fixed;
    bottom: 80px;
    right: 20px;
  }

  .success {
    background: #8ae8a2;
    border: 1px solid #8ae8a2;
  }

  .info {
    background: whitesmoke;
    border: 1px solid whitesmoke;
  }

  .warn {
    background: #fff37a;
    border: 1px solid #fff37a;
  }

  .alert{
    border: 1px solid #ff6b6b;
    background: #ff6b6b;
  }

</style>
