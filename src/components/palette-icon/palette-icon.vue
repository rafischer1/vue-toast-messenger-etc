<template><icon v-bind:title="'P'" v-bind:color="color"></icon></template>

<script>
import Icon from "@/components/icon";
export default {
  name: "palette-icon",
  components: { Icon },
  data: function() {
    return {
      color: "#ffe674"
    };
  }
};
</script>

<style scoped></style>
