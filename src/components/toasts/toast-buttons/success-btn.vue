<template>
  <button
    class="success-btn"
    v-bind:style="{ background: color }"
    @click="successToast()"
  >
    Success
  </button>
</template>

<script>
import { paletteService } from "@/_services";

export default {
  name: "success-btn",
  data: function() {
    return {
      color: "green"
    };
  },
  methods: {
    successToast() {
      this.$store.commit("showToast", { text: "Great Job!", type: "success" });
    }
  },
  created() {
    paletteService.getColor("success").subscribe(res => (this.color = res));
  }
};
</script>

<style scoped>
.success-btn {
  background: #4bb966;
}

.success-btn:active {
  filter: brightness(90%);
}
</style>
