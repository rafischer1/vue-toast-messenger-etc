<template>
 <div class="container">
   <toggle-btn v-bind:icon-type="'contact'"></toggle-btn>
  <contact></contact>
 </div>
</template>

<script>
import Contact from "@/components/contact/contact";
import ToggleBtn from "@/components/toggle-btn";
export default {
  name: "contact-container",
  components: {ToggleBtn, Contact}
}
</script>

<style scoped>
div.container {
  background: linear-gradient(#363636, #e24e42);
  width: 66%;
  margin: 0 auto;
  padding: 2%;
  border-radius: 5px;
}
</style>
