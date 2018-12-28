<template>
  <div class="footer container">
    <img class="logo" src="../assets/logo.svg" alt="Félix Sabatié">
    <p class="copyright">Copyright © 2019 Félix Sabatié</p>
    <p class="repository">{{ $t('footer.footer') }}</p>
    <p><a class="icon" href="https://github.com/felixSabatie/portfolio" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a></p>
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
    font-size: 15px;

    .logo {
      width: 40px;
      margin-bottom: 20px;
    }
    .copyright {
    }
    .repository {
      margin: 10px 0;
    }
    .icon {
      font-size: 30px;
      color: $contrastPrimaryColor;
    }
  }
</style>
