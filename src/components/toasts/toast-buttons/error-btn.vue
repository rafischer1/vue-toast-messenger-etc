<template>
  <button class="alert-btn" @click="alertToast()">Error</button>
</template>

<script>
export default {
  name: "error-btn",
  methods: {
    alertToast() {
      this.$store.commit("showToast", { text: "OOPS!", type: "alert" });
    }
  }
};
</script>

<style scoped>
.alert-btn {
  border: 1px solid #e24e42;
  background: #e24e42;
}

.alert-btn:active {
  filter: brightness(85%);
}
</style>
