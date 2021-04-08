<template>
  <label v-bind:style="{ color: selectedColor }"
    >{{ type.toUpperCase() }}:
    <input type="color" @change="setColor($event.target.value)" />
  </label>
</template>

<script>
import { paletteService } from "@/_services";
import { map, shareReplay } from "rxjs/operators";

export default {
  name: "palette-color-input",
  props: ["type", "currentColor"],
  data: function() {
    return {
      selectedColor: ""
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
    paletteService
      .getColor(this.type)
      .pipe(
        map(color => {
          if (color) {
            this.selectedColor = color;
          }
        }),
        shareReplay(1)
      )
      .subscribe();
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
