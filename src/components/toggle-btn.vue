<template>
 <div @click="toggle" class="toggle-btn">X</div>
</template>

<script>
import {iconsService} from "@/_services";

export default {
name: "toggle-btn",
  props: ["iconType"],
  methods: {
    toggle() {
      switch (this.iconType) {
         case "toasts":
           iconsService.toggleToastsIcon(true)
              break;
           case "messages":
             iconsService.toggleMessagesIcon(true)
              break;
             case "contact":
               iconsService.toggleContactIcon(true)
      }
    }
  }
}
</script>

<style scoped>
.toggle-btn {
  width: fit-content;
  float: left;
  margin-top: -25px;
  margin-left: -20px;
  background: none;
  cursor: pointer;
  color: #a1a1a1;
}

.toggle-btn:hover {
  color: #b6b6b6;
}

.toggle-btn:active {
  color: #d3d3d3;
  text-decoration: underline;
}
</style>
