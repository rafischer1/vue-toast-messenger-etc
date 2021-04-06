<template>
  <button class="info-btn" @click="resetCount()">Info</button>
</template>

<script>
export default {
  name: "info-btn",
  methods: {
    resetCount() {
      this.toastReset();
    },
    addToast() {
      this.$store.commit("resetToast");
    },
    toastReset() {
      this.$store.commit("showToast", { text: "Information", type: "info" });
    }
  }
};
</script>

<style scoped>
.info-btn {
  background: whitesmoke;
  border: 1px solid whitesmoke;
}

.info-btn:active {
  background: #d7d7d7;
  border: 1px solid #d7d7d7;
}
</style>
