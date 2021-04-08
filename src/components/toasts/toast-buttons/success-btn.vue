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
  background: #4bb966;
  border: 1px solid #4bb966;
}

.success-btn:active {
  filter: brightness(90%);
}
</style>
