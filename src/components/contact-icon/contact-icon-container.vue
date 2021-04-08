<template>
  <contact-icon @click="toggle"></contact-icon>
</template>

<script>
import ContactIcon from "@/components/contact-icon/contact-icon";
import { iconsService } from "@/_services";
export default {
  name: "contact-icon-container",
  components: { ContactIcon },
  methods: {
    toggle() {
      iconsService.toggleIcon(false, "contact");
    }
  }
};
</script>

<style scoped></style>
