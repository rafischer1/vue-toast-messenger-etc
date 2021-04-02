<template>
  <div class="messages">
    <div v-for="(message, index) in messages" :key="index">{{message.text}}</div>
  </div>
</template>

<script>
import { messagesService } from "@/_services";
export default {
name: "messages", data () {
    return {
      messages: []
    };
  },
  created () {
    // subscribe to home component messages
    this.subscription = messagesService.getMessage().subscribe(message => {
      if (message) {
        // add message to local state if not empty
        console.log("message here:", message)
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  },
  beforeUnmount () {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
};
</script>

<style scoped>
  .messages {
    margin-top: 0;
    background: none;
  }

  .messages > div {
    text-align: center;
    margin-top: 5px;
    background: whitesmoke;
    color: #333333;
  }
</style>
