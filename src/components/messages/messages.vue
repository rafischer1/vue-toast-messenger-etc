<template>
  <div class="messages">
    <div v-for="(message, index) in messages" :key="index">{{message.text}}
      <span class="trash" @click="deleteMsg(index)">x</span>
    </div>
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
    this.subscription = messagesService.getMessage().subscribe(message =>
        message ?  this.messages.push(message) :  this.messages = []);
  },
  beforeUnmount () {
    this.subscription.unsubscribe();
  },
  methods: {
   deleteMsg(index) {
     this.messages.splice(index, 1)
     if (this.messages.length === 0) messagesService.clearMessages();
     this.$store.commit("showToast", {text: "Deleted", type: "warn"})
   },
  }
};
</script>

<style scoped>
  .messages {
    margin-top: 0;
    background: none;
  }

  .messages > div {
    border-radius: 5px;
    text-align: center;
    margin-top: 5px;
    background: whitesmoke;
    color: #333333;
  }

  .trash {
    float: right;
    margin: -2px 5px 0 0;
    background: none;
    cursor: pointer;
    color: #333333;
  }

  .trash:hover {
    color: #db4a4a;
  }

  .trash:active {
    color: #ff7171;
  }
</style>
