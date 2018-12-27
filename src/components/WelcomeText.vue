<template>
  <div class="welcome-text container">
    <h1 class="title">{{ $t('welcomeText.title') }}</h1>
    <div class="text" v-html="$t('welcomeText.text')"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import '../styles/colors';

  .welcome-text {
    text-align: center;
    color: $contrastPrimaryColor;
    letter-spacing: 1.5px;

    .title {
      margin-top: 100px;
      margin-bottom: 70px;
      letter-spacing: 2px;
    }

    .text {
      max-width: 500px;
      font-size: 20px;
      margin: auto auto 100px;
    }
  }
</style>
