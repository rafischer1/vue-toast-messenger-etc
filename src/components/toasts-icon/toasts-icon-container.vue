<template>
   <toasts-icon @click="toggle()"></toasts-icon>
</template>

<script>
import ToastsIcon from "@/components/toasts-icon/toasts-icon";
import {iconsService} from "@/_services";
export default {
name: "toasts-icon-container",
  components: {ToastsIcon},
  methods: {
    toggle() {
      iconsService.toggleToastsIcon(false)
    }
  }
}
</script>

<style scoped>

</style>
