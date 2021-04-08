<template>
  <button class="warn-btn" @click="warnToast()">Warn</button>
</template>

<script>
export default {
  name: "warn-btn",
  methods: {
    warnToast() {
      this.$store.commit("showToast", { text: "WARNING", type: "warn" });
    }
  }
};
</script>

<style scoped>
.warn-btn {
  border: 1px solid #fff37a;
  background: #fff37a;
}

.warn-btn:active {
  filter: brightness(90%);
}
</style>
