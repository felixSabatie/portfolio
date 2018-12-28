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

  $imageSize: 200px;

  .about-wrapper {
    padding: 0 100px;

    .about-card {
      text-align: center;
      background-color: #fff;
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
        padding: 30px 0;
      }
    }
  }
</style>
