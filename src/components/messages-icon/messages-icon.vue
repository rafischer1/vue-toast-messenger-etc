<template>
  <icon v-bind:title="'M'" v-bind:color="color"></icon>
</template>

<script>
import Icon from "@/components/icon";
import { paletteService } from "@/_services";

export default {
  name: "messages-icon",
  components: { Icon },
  data: function() {
    return {
      color: "#4a999a"
    };
  },
  beforeCreate() {
    paletteService.getColor("info").subscribe(res => {
      this.color = res;
    });
  }
};
</script>

<style scoped></style>
