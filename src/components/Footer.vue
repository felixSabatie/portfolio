<template>
  <div class="footer">
    <img class="logo" src="../assets/logo.svg" alt="Félix Sabatié">
    <p class="copyright">Copyright © 2019 Félix Sabatié</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import '../styles/colors';

  .footer {
    text-align: center;
    color: $contrastPrimaryColor;
    padding: 80px 0;

    .logo {
      width: 40px;
      margin-bottom: 20px;
    }
    .copyright {
      font-size: 15px;
    }
  }
</style>
