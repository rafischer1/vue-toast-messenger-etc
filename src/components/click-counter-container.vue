<template>
<div class="container">
  <info-btn></info-btn>
  <success-btn></success-btn>
  <error-btn></error-btn>
  <warn-btn></warn-btn>
</div>
</template>

<script>
import ErrorBtn from "@/components/toast-buttons/error-btn";
import WarnBtn from "@/components/toast-buttons/warn-btn";
import InfoBtn from "@/components/toast-buttons/info-btn";
import SuccessBtn from "@/components/toast-buttons/success-btn";
export default {
name: "click-counter-container",
  components: {SuccessBtn, InfoBtn, WarnBtn, ErrorBtn}
}
</script>

<style scoped>

div.container {
  background: linear-gradient(#363636, #714a9a);
  padding: 2%;
  width: 66%;
  margin: 60px auto auto auto;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

</style>
