<template>
 <icon v-bind:title="'T'" v-bind:color="color"></icon>
</template>

<script>
import Icon from "@/components/icon";
export default {
name: "toasts-icon",
  components: {Icon},
  data: function () {
    return {
      color: "#714a9a"
    }
  }
}
</script>

<style scoped>

</style>
