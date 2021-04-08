<template>
  <div class="container">
    <toggle-btn v-bind:icon-type="'palette'"></toggle-btn>
    <palette-color-input
      v-bind:type="'info'"
      v-bind:current-color="infoColor"
    ></palette-color-input>
    <palette-color-input
      v-bind:type="'warn'"
      v-bind:current-color="warnColor"
    ></palette-color-input>
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
      warnColor: paletteService.getColor("warn")
    };
  }
};
</script>

<style scoped>
div.container {
  background: linear-gradient(#363636, #ffe674);
  width: 66%;
  margin: 0 auto;
  padding: 2%;
  border-radius: 5px;
}
</style>
