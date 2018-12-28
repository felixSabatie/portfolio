<template>
  <div class="projects container">
    <div class="projects-wrapper">
      <div class="title">
        <div class="icon">
          <font-awesome-icon icon="code" />
        </div>
        <h2 class="text">{{ $t('projects.title') }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import '../styles/colors';

  .projects-wrapper {
    margin-top: 80px;

    .title {
      text-align: center;

      .icon {
        margin: 20px auto;
        width: 80px;
        height: 80px;
        line-height: 80px;
        border: 2px solid $primaryColor;
        border-radius: 50%;
        font-size: 50px;
        color: $primaryColorLight;
      }

      .text {
      }
    }

  }
</style>
