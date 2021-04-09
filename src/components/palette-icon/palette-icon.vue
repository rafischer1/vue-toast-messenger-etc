<template>
  <icon v-bind:title="'P'" v-bind:color="color"></icon>
</template>

<script>
import Icon from "@/components/icon";
import { paletteService } from "@/_services";
export default {
  name: "palette-icon",
  components: { Icon },
  data: function() {
    return {
      color: "#ffe674"
    };
  },
  beforeCreate() {
    paletteService.getColor("warn").subscribe(res => {
      this.color = res;
    });
  }
};
</script>

<style scoped></style>
