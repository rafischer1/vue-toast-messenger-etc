<template>
     <click-counter-container></click-counter-container>
     <messages-container></messages-container>
     <toast-wrapper></toast-wrapper>
</template>

<script>
import ClickCounterContainer from "@/components/click-counter-container";
import MessagesContainer from "@/components/messages-container";
import ToastWrapper from "@/components/toast-wrapper";

export default {
  name: 'App',
  components: {
    ToastWrapper,
    MessagesContainer,
    ClickCounterContainer,
  },
}
</script>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #1a1a1a;
  font-family: "Avenir Next", sans-serif;
  font-size: 20px;
  font-weight: bold;
}

button {
  padding: 1% 2%;
  color: #333333;
  cursor: pointer;
  margin: 2px;
  border-radius: 5px;
  background: whitesmoke;
  border: none;
  outline: none;
}

button:hover {
  background: #f0f0f0;
}

button:active {
  background: #e2e2e2;
}
</style>
