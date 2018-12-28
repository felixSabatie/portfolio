<template>
  <div class="about container">
    <div class="about-wrapper">
      <div class="about-card">
        <div class="image">
          <img src="../assets/portrait.jpeg" alt="Portrait">
        </div>
        <h2 class="title">{{ $t('about.title') }}</h2>
        <div class="content">{{ $t('about.text') }}</div>
        <div class="links">
          <a class="icon" href="https://www.linkedin.com/in/felix-sabatie/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          <a class="icon" href="https://github.com/felixSabatie" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
          <a class="icon" href="mailto:felix.sabatie@gmail.com"><font-awesome-icon icon="envelope" /></a>
        </div>
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
  @import '../styles/variables';

  $imageSize: 200px;
  $icon-size: 60px;

  .about-wrapper {
    @media screen and (min-width: $smallSize) {
      padding: 0 100px;
    }

    .about-card {
      text-align: center;
      background-color: $cardBackgroundColor;
      padding: 40px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, .3) 3px 3px 10px;

      .image {
        width: $imageSize;
        height: $imageSize;
        margin: auto;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .title {
        margin-top: 30px;
        margin-bottom: 50px;
      }

      .links {
        color: $primaryColorLight;
        font-size: calc(#{$icon-size} - 24px);
        line-height: $icon-size;
        text-align: center;
        padding-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;

        .icon {
          width: $icon-size;
          height: $icon-size;
          margin: 0 20px;
          border: 1px solid $primaryColorLight;
          border-radius: 50%;
          transition: background-color $transitionsDuration, color $transitionsDuration;

          &:hover {
            background-color: $primaryColorLight;
            color: $contrastPrimaryColor;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
