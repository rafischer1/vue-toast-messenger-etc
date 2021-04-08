<template>
  <palette-icon @click="toggle"></palette-icon>
</template>

<script>
import PaletteIcon from "@/components/palette-icon/palette-icon";
import { iconsService } from "@/_services";
export default {
  name: "palette-icon-container",
  components: { PaletteIcon },
  methods: {
    toggle() {
      iconsService.toggleIcon(false, "palette");
    }
  }
};
</script>

<style scoped></style>
