<template>
  <icon v-bind:title="'M'" v-bind:color="color"></icon>
</template>

<script>
import Icon from "@/components/icon";
import { paletteService } from "@/_services";
import { map } from "rxjs/operators";
let colorSubscription;

export default {
  name: "messages-icon",
  components: { Icon },
  data: function() {
    return {
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
  unmounted() {
    colorSubscription.unsubscribe();
  }
};
</script>

<style scoped></style>
