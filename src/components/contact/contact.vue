<template>
   <div class="contact-container">
     <a href="mailto: artiefischer@gmail.com">Email Me</a>
     <a target="_blank" href="https://github.com/rafischer1">Github</a>
     <a target="_blank" href="https://www.linkedin.com/in/robert-a-fischer/">LinkedIn</a>
   </div>
</template>

<script>
export default {
name: "contact",
}
</script>

<style scoped>
  .contact-container {
    background: none;
    display: flex;
    justify-content: space-between;
  }

  a {
    background: none;
    color: whitesmoke;
    text-decoration: none;
    border: 2px solid whitesmoke;
    border-radius: 5px;
    padding: 1%;
  }

  a:hover {
    color: #333333;
    border: 2px solid #4a999a;
    background: whitesmoke;
  }

  a:active {
    color: #333333;
    border: 2px solid #6cdedf;
    background: whitesmoke;
  }
</style>
