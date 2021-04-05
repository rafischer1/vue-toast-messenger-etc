<template>
  <icon v-bind:title="'M'" v-bind:color="color"></icon>
</template>

<script>
import Icon from "@/components/icon";
export default {
  name: "messages-icon",
  components: { Icon },
  data: function() {
    return {
      color: "#4a999a"
    };
  }
};
</script>

<style scoped></style>
