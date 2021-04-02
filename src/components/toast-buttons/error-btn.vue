<template>
  <button class="alert-btn" @click="alertToast()">Error</button>
</template>

<script>
export default {
name: "error-btn",
  methods: {
    alertToast() {
      this.$store.commit("showToast", {text: "OOPS!", type: "alert"})
    }
  }
}
</script>

<style scoped>
.alert-btn {
  border: 1px solid #ff6b6b;
  background: #ff6b6b;
}

.alert-btn:active {
  border: 1px solid #ff8383;
  background: #ff8383;
}

</style>
