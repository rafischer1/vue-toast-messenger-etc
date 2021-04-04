<template>
  <div class="container">
    <toggle-btn v-bind:icon-type="'toasts'"></toggle-btn>
    <div class="btns-container">
      <info-btn></info-btn>
      <success-btn></success-btn>
      <error-btn></error-btn>
      <warn-btn></warn-btn>
    </div>
  </div>
</template>

<script>
import ErrorBtn from "@/components/toasts/toast-buttons/error-btn";
import WarnBtn from "@/components/toasts/toast-buttons/warn-btn";
import InfoBtn from "@/components/toasts/toast-buttons/info-btn";
import SuccessBtn from "@/components/toasts/toast-buttons/success-btn";
import ToggleBtn from "@/components/toggle-btn";

export default {
name: "toasts-container",
  components: {ToggleBtn, SuccessBtn, InfoBtn, WarnBtn, ErrorBtn},
}
</script>

<style scoped>

div.container {
  background: linear-gradient(#363636, #714a9a);
  padding: 2%;
  width: 66%;
  margin: 60px auto auto auto;
  border-radius: 5px;
}

div.btns-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  background: none;
  margin: auto auto;
}

</style>
