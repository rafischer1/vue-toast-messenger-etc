<template>
  <div class="icon-container">
    <toasts-icon-container v-if="toastsIconView"></toasts-icon-container>
    <toasts-container v-if="!toastsIconView"></toasts-container>
  </div>
  <div class="icon-container">
    <message-icon-container v-if="messagesIconView"></message-icon-container>
    <messages-container v-if="!messagesIconView"></messages-container>
  </div>
  <div class="icon-container">
    <contact-icon-container v-if="contactIconView"></contact-icon-container>
    <contact-container v-if="!contactIconView"></contact-container>
  </div>
</template>

<script>
import ToastsContainer from "@/components/toasts/toasts-container";
import MessagesContainer from "@/components/messages/messages-container";
import ToastsIconContainer from "@/components/toasts-icon/toasts-icon-container";
import MessageIconContainer from "@/components/messages-icon/message-icon-container";
import {of} from "rxjs";
import {iconsService} from "@/_services";
import ContactIconContainer from "@/components/contact-icon/contact-icon-container";
import ContactContainer from "@/components/contact/contact-container";

export default {
name: "app-body-container",
  components: {
    ContactContainer,
    ContactIconContainer, MessageIconContainer, ToastsIconContainer, MessagesContainer, ToastsContainer},
  toastsIconSubscription: of(false),
  messageIconSubscription: of(false),
  contactIconSubscription: of(false),


  data: function () {
    return {
      toastsIconView: true,
      messagesIconView: true,
      contactIconView: true,
    }
  },
  created() {
     this.toastsIconSubscription = iconsService.toastsIcon$().subscribe(active => {
       this.toastsIconView = active
     })
    this.messageIconSubscription = iconsService.messagesIcon$().subscribe(active => {
      this.messagesIconView = active
    })
    this.contactIconSubscription = iconsService.contactIcon$().subscribe(active => {
      this.contactIconView = active
    })
  },
  beforeUnmount () {
    this.toastsIconSubscription.unsubscribe();
    this.messageIconSubscription.unsubscribe();
    this.contactIconSubscription.unsubscribe();
  },
}
</script>

<style scoped>
   .icon-container {
     display: flex;
     flex-direction: row;
   }
</style>
