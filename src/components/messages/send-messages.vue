<template>
  <div class="msg-buttons">
    <form @submit="sendMessage($event)">
      <label for="msg"
        >Message:
        <input id="msg" type="text" v-model="msg" />
      </label>
    </form>
    <button @click="sendMessage" class="btn btn-primary">Send Message</button>
    <button
      :disabled="messages.length === 0"
      v-bind:class="{ disabled: messages.length === 0 }"
      @click="clearMessages()"
      class="btn btn-secondary"
    >
      {{ clearBtnText }}
    </button>
  </div>
</template>

<script>
import { messagesService } from "@/_services";

export default {
  name: "send-messages",
  data: function() {
    return {
      msg: "",
      clearBtnText: "Clear Messages",
      messages: []
    };
  },
  created() {
    this.subscription = messagesService
      .getMessage()
      .subscribe(message =>
        message ? this.messages.push(message) : (this.messages = [])
      );
  },
  beforeUnmount() {
    this.subscription.unsubscribe();
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();
      if (this.msg.length > 0) {
        messagesService.sendMessage(this.msg);
        this.$store.commit("showToast", { text: "Sent! 💌", type: "success" });
        this.msg = "";
      } else {
        this.$store.commit("showToast", { text: "No Message", type: "alert" });
      }
    },
    clearMessages() {
      messagesService.clearMessages();
      this.$store.commit("showToast", { text: "Cleared", type: "info" });
      this.msg = "";
    }
  }
};
</script>

<style scoped>
.msg-buttons,
label {
  color: whitesmoke;
  background: none;
}

.msg-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

form {
  background: none;
  margin: auto auto;
}

label {
  margin-top: 1%;
}

input {
  color: whitesmoke;
  background: #333333;
}

.disabled {
  background: #bababa;
  color: #333333;
  cursor: not-allowed;
}
</style>
