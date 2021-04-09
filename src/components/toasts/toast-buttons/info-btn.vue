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
import { paletteService } from "@/_services";

export default {
  name: "info-btn",
  data: function() {
    return {
      color: "whitesmoke"
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
  },
  created() {
    paletteService.getColor("info").subscribe(res => (this.color = res));
  }
};
</script>

<style scoped>
.info-btn:active {
  filter: brightness(90%);
}
</style>
