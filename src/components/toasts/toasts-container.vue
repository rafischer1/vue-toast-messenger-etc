<template>
  <div class="container" v-bind:style="{ background: createBackgroundString }">
    <toggle-btn v-bind:icon-type="'toasts'"></toggle-btn>
    <div class="btns-container">
      <info-btn></info-btn>
      <success-btn></success-btn>
      <warn-btn></warn-btn>
      <error-btn></error-btn>
    </div>
  </div>
</template>

<script>
import ErrorBtn from "@/components/toasts/toast-buttons/error-btn";
import WarnBtn from "@/components/toasts/toast-buttons/warn-btn";
import InfoBtn from "@/components/toasts/toast-buttons/info-btn";
import SuccessBtn from "@/components/toasts/toast-buttons/success-btn";
import ToggleBtn from "@/components/toggle-btn";
import { paletteService } from "@/_services";
import { map } from "rxjs/operators";

let colorSubscription;

export default {
  name: "toasts-container",
  components: { ToggleBtn, SuccessBtn, InfoBtn, WarnBtn, ErrorBtn },
  data: function() {
    return {
      initialColor: "#363636",
      color: "#4bb966"
    };
  },
  beforeCreate() {
    colorSubscription = paletteService
      .getColor("success")
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
  padding: 2%;
  width: 70%;
  margin: 5% 11% auto auto;
  border-radius: 5px;
}

div.btns-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: none;
}
</style>
