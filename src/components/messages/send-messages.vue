<template>
<div class="msg-buttons">
  <label for="msg">Message:
    <input id="msg" type="text" v-model="msg" />
  </label>
  <br />
  <button @click="sendMessage()" class="btn btn-primary">Send Message</button>
  <button @click="clearMessages()" class="btn btn-secondary">Clear Messages</button>
</div>
</template>

<script>
import { messagesService } from "@/_services";

export default {
  name: "send-messages",
  data: function () {
    return {
      msg: ""
    }
  },
  methods: {
    sendMessage() {
      if (this.msg.length > 0) {
        messagesService.sendMessage(this.msg);
        this.$store.commit("showToast", {text: "Sent! 💌", type: "success"})
        this.msg = ""
      } else {
        this.$store.commit("showToast", {text: "No Message", type: "alert"})
      }

    },
    clearMessages() {
      messagesService.clearMessages();
      this.$store.commit("showToast", {text: "Cleared", type: "info"})
      this.msg = ""
    }
  }
};
</script>

<style scoped>
.msg-buttons, label {
  color: whitesmoke;
  background: none;
}

.msg-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
}

.btn {
  height: 40px;
}

label {
  margin-top: 1%;
}

input {
  color: whitesmoke;
}
</style>
