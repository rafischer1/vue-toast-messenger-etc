<template>
  <div class="icon" v-bind:style="{ border: '5px solid ' + color }">
    <div class="title" v-bind:style="{ color: color }">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "icon",
  props: ["title", "color"]
};
</script>

<style scoped>
div.icon {
  cursor: pointer;
  padding: 2%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 35px;
}

div.icon:active {
  border: 5px solid whitesmoke !important;
}

.title {
  font-size: 65px;
  margin: auto auto;
}
</style>
