<template>
  <div class="app-body">
    <draggable dragArea list-group :list="list" @change="log">
      <div class="icon-container toasts" ref="toasts">
        <toasts-icon-container v-if="toastsIconView"></toasts-icon-container>
        <toasts-container v-if="!toastsIconView"></toasts-container>
      </div>
      <div class="icon-container messages" ref="messages">
        <message-icon-container
          v-if="messagesIconView"
        ></message-icon-container>
        <messages-container v-if="!messagesIconView"></messages-container>
      </div>
      <div class="icon-container palette" ref="palette">
        <palette-icon-container v-if="paletteIconView"></palette-icon-container>
        <palette-container v-if="!paletteIconView"></palette-container>
      </div>
      <div class="icon-container contact" ref="contact">
        <contact-icon-container v-if="contactIconView"></contact-icon-container>
        <contact-container v-if="!contactIconView"></contact-container>
      </div>
    </draggable>
  </div>
</template>

<script>
import ToastsContainer from "@/components/toasts/toasts-container";
import MessagesContainer from "@/components/messages/messages-container";
import ToastsIconContainer from "@/components/toasts-icon/toasts-icon-container";
import MessageIconContainer from "@/components/messages-icon/message-icon-container";
import { of } from "rxjs";
import { iconsService } from "@/_services";
import ContactIconContainer from "@/components/contact-icon/contact-icon-container";
import ContactContainer from "@/components/contact/contact-container";
import { VueDraggableNext } from "vue-draggable-next";
import PaletteIconContainer from "@/components/palette-icon/palette-icon-container";
import PaletteContainer from "@/components/palette/palette-container";

export default {
  name: "app-body-container",
  components: {
    PaletteContainer,
    PaletteIconContainer,
    draggable: VueDraggableNext,
    ContactContainer,
    ContactIconContainer,
    MessageIconContainer,
    ToastsIconContainer,
    MessagesContainer,
    ToastsContainer
  },
  toastsIconSubscription: of(false),
  messageIconSubscription: of(false),
  contactIconSubscription: of(false),
  paletteIconSubscription: of(false),

  data: function() {
    return {
      toastsIconView: true,
      messagesIconView: true,
      contactIconView: true,
      paletteIconView: true,
      list: []
    };
  },
  methods: {
    log(event) {
      console.table(event);
      if (event) {
        this.$store.commit("showToast", {
          text: "🚧 Under Construction 🚧",
          type: "warn"
        });
      }
    },
    buildList() {
      this.list = [
        this.$refs["toasts"],
        this.$refs["messages"],
        this.$refs["palette"],
        this.$refs["contact"]
      ];
    }
  },
  mounted() {
    this.buildList();
  },
  created() {
    this.toastsIconSubscription = iconsService
      .toastsIcon$()
      .subscribe(active => {
        this.toastsIconView = active;
      });
    this.messageIconSubscription = iconsService
      .messagesIcon$()
      .subscribe(active => {
        this.messagesIconView = active;
      });
    this.contactIconSubscription = iconsService
      .contactIcon$()
      .subscribe(active => {
        this.contactIconView = active;
      });
    this.paletteIconSubscription = iconsService
      .paletteIcon$()
      .subscribe(active => {
        this.paletteIconView = active;
      });
  },
  beforeUnmount() {
    this.toastsIconSubscription.unsubscribe();
    this.messageIconSubscription.unsubscribe();
    this.contactIconSubscription.unsubscribe();
    this.paletteIconSubscription.unsubscribe();
  }
};
</script>

<style>
.icon-container {
  display: flex;
  flex-direction: row;
}
</style>
