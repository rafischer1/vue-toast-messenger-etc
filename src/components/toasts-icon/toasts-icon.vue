<template>
  <icon v-bind:title="'T'" v-bind:color="color"></icon>
</template>

<script>
import Icon from "@/components/icon";
import { paletteService } from "@/_services";
import { map } from "rxjs/operators";
let colorSubscription;

export default {
  name: "toasts-icon",
  components: { Icon },
  data: function() {
    return {
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
  unmounted() {
    colorSubscription.unsubscribe();
  }
};
</script>

<style scoped></style>
