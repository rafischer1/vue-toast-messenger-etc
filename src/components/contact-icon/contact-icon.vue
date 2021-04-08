<template>
  <icon v-bind:title="'C'" v-bind:color="color"></icon>
</template>

<script>
import Icon from "@/components/icon";
import { paletteService } from "@/_services";
export default {
  name: "contact-icon",
  components: { Icon },
  data: function() {
    return {
      color: "#e24e42"
    };
  },
  beforeCreate() {
    paletteService.getColor("alert").subscribe(res => {
      this.color = res;
    });
  }
};
</script>

<style scoped></style>
