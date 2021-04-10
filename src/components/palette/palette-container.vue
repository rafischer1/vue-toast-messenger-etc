<template>
  <div class="container">
    <toggle-btn v-bind:icon-type="'palette'"></toggle-btn>
    <div class="palettes">
      <palette-color-input
        v-bind:type="'info'"
        v-bind:current-color="infoColor"
      ></palette-color-input>
      <palette-color-input
        v-bind:type="'success'"
        v-bind:current-color="successColor"
      ></palette-color-input>
      <palette-color-input
        v-bind:type="'warn'"
        v-bind:current-color="warnColor"
      ></palette-color-input>
      <palette-color-input
        v-bind:type="'alert'"
        v-bind:current-color="alertColor"
      ></palette-color-input>
    </div>
  </div>
</template>

<script>
import ToggleBtn from "@/components/toggle-btn";
import PaletteColorInput from "@/components/palette/palette-color-input";
import { paletteService } from "@/_services";

export default {
  name: "palette-container",
  components: { PaletteColorInput, ToggleBtn },
  data: function() {
    return {
      infoColor: paletteService.getColor("info"),
      warnColor: paletteService.getColor("warn"),
      successColor: paletteService.getColor("success"),
      alertColor: paletteService.getColor("alert")
    };
  }
};
</script>

<style scoped>
div.container {
  width: 66%;
  margin: 0 auto;
  padding: 2%;
  border-radius: 5px;
  background: lightgrey;
}

.palettes {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
