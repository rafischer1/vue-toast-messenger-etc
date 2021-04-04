<template>
  <div class="group-1">
    <div>Robert A Fischer</div>
    <div>Boulder, Colorado</div>
  </div>
   <div class="contact-container">
     <a href="mailto: artiefischer@gmail.com">Email</a>
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
    justify-content: space-evenly;
  }

  .group-1 {
    display: flex;
    justify-content: space-evenly;
    background: none;
  }

  .group-1 > div {
    background: none;
    color: whitesmoke;
    margin-bottom: 10px;

  }

  a {
    background: whitesmoke;
    color: #333333;
    text-decoration: none;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    padding: 1%;
  }


  a:active {
    color: #333333;
    background: #d7d7d7;
    border: 1px solid #d7d7d7;
  }
</style>
