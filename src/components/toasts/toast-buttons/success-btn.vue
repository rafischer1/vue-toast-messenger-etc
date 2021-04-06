<template>
  <button class="success-btn" @click="successToast()">Success</button>
</template>

<script>
export default {
  name: "success-btn",
  methods: {
    successToast() {
      this.$store.commit("showToast", { text: "Great Job!", type: "success" });
    }
  }
};
</script>

<style scoped>
.success-btn {
  background: #8ae8a2;
  border: 1px solid #8ae8a2;
}

.success-btn:active {
  background: #a7febe;
  border: 1px solid #adffc3;
}
</style>
