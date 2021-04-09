<template>
  <button
    class="warn-btn"
    v-bind:style="{ background: color }"
    @click="warnToast()"
  >
    Warn
  </button>
</template>

<script>
import { paletteService } from "@/_services";

export default {
  name: "warn-btn",
  data: function() {
    return {
      color: "yellow"
    };
  },
  methods: {
    warnToast() {
      this.$store.commit("showToast", { text: "WARNING", type: "warn" });
    }
  },
  created() {
    paletteService.getColor("warn").subscribe(res => (this.color = res));
  }
};
</script>

<style scoped>
.warn-btn {
  background: #fff37a;
}

.warn-btn:active {
  filter: brightness(90%);
}
</style>
