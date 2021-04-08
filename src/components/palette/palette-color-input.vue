<template>
  <label v-bind:style="{ color: selectedColor }"
    >{{ type.toUpperCase() }}:
    <input type="color" @change="setColor($event.target.value)" />
  </label>
</template>

<script>
import { paletteService } from "@/_services";

export default {
  name: "palette-color-input",
  props: ["type", "currentColor"],
  data: function() {
    return {
      selectedColor: paletteService.getColor(this.type)
    };
  },
  methods: {
    setColor(color) {
      paletteService.setColor(this.type, color);
      this.$store.commit("showToast", {
        text: "Color Change Detected",
        type: this.type
      });
    }
  },
  created() {
    paletteService.getColor(this.type).subscribe(color => {
      this.selectedColor = color;
    });
  }
};
</script>

<style scoped>
label {
  color: white;
  background: none;
}

input {
  cursor: pointer;
}
</style>
