<template>
  <div class="toast-parent">
    <div
      class="toast-div"
      v-bind:class="type"
      v-bind:style="{ background: color }"
    >
      {{ text.toUpperCase() }}
    </div>
  </div>
</template>

<script>
import { paletteService } from "@/_services";

export default {
  name: "toast",
  props: ["text", "type"],
  data: function() {
    return {
      color: "whitesmoke"
    };
  },
  created() {
    if (this.type) {
      this.color = paletteService.getColorValue(this.type);
    }
  }
};
</script>

<style scoped>
div.toast-parent {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}

.toast-div {
  padding: 5px 15px;
  color: #333333;
  width: fit-content;
  border-radius: 5px;
  font-size: 18px;
  margin-right: 10px;
  position: relative;
}
</style>
