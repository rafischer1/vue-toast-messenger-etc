<template>
  <button
    class="alert-btn"
    v-bind:style="{ background: color }"
    @click="alertToast()"
  >
    Error
  </button>
</template>

<script>
import { paletteService } from "@/_services";

export default {
  name: "error-btn",
  data: function() {
    return {
      color: "red"
    };
  },
  methods: {
    alertToast() {
      this.$store.commit("showToast", { text: "OOPS!", type: "alert" });
    }
  },
  created() {
    paletteService.getColor("alert").subscribe(res => (this.color = res));
  }
};
</script>

<style scoped>
.alert-btn {
  background: #e24e42;
}

.alert-btn:active {
  filter: brightness(85%);
}
</style>
