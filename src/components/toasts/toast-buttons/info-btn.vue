<template>
  <button
    class="info-btn"
    v-bind:style="{ background: color }"
    @click="resetCount()"
  >
    Info
  </button>
</template>

<script>
export default {
  name: "info-btn",
  data: function() {
    return {
      color: this.$store.commit("getColors")?.info
    };
  },
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
  border: 1px solid whitesmoke;
}

.info-btn:active {
  filter: brightness(90%);
}
</style>
