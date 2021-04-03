<template>
  <div class="container">
    <send-messages></send-messages>
    <messages></messages>
  </div>
</template>

<script>
import Messages from "@/components/messages/messages";
import SendMessages from "@/components/messages/send-messages";
export default {
name: "messages-container",
  components: {SendMessages, Messages}
}
</script>

<style scoped>
div.container {
  background: linear-gradient(#363636, #4a999a);
  width: 66%;
  margin: 5% auto;
  padding: 2%;
  border-radius: 5px;
}
</style>
