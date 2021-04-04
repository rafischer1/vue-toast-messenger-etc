<template>
  <messages-icon @click="toggle()"></messages-icon>
</template>

<script>
import MessagesIcon from "@/components/messages-icon/messages-icon";
import { iconsService } from "@/_services";
export default {
name: "message-icon-container",
  components: {MessagesIcon},
  methods: {
   toggle() {
     iconsService.toggleMessagesIcon(false)
   }
  }
}
</script>

<style scoped>

</style>
