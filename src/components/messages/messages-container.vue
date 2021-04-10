<template>
  <div class="container" v-bind:style="{ background: createBackgroundString }">
    <toggle-btn v-bind:icon-type="'messages'"></toggle-btn>
    <send-messages></send-messages>
    <messages></messages>
  </div>
</template>

<script>
import Messages from "@/components/messages/messages";
import SendMessages from "@/components/messages/send-messages";
import ToggleBtn from "@/components/toggle-btn";
import { paletteService } from "@/_services";
import { map } from "rxjs/operators";
let colorSubscription;

export default {
  name: "messages-container",
  components: { ToggleBtn, SendMessages, Messages },
  data: function() {
    return {
      initialColor: "#363636",
      color: "#4a999a"
    };
  },
  beforeCreate() {
    colorSubscription = paletteService
      .getColor("info")
      .pipe(
        map(res => {
          this.color = res;
        })
      )
      .subscribe();
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(${this.initialColor}, ${this.color})`;
    }
  },
  unmounted() {
    colorSubscription.unsubscribe();
  }
};
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
