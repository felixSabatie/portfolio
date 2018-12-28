<template>
  <div class="project">
    <div class="header">
      <slot name="image"></slot>
    </div>
    <div class="content">
      <h3 class="title">{{ $t(value + '.title') }}</h3>
      <div class="description" v-html="$t(value + '.content')"></div>
      <div class="icons">
        <div class="icon" v-for="icon in icons" v-bind:key="icon[1]">
          <font-awesome-icon :icon="icon" />
        </div>
      </div>
    </div>
    <div class="footer">
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['imageLink', 'value', 'icons']
  }
</script>

<style lang="scss">
  @import '../styles/colors';

  $borderRadius: 5px;

  .project {
    max-width: 350px;
    margin: 20px;
    border-radius: $borderRadius;
    text-align: left;
    display: inline-block;
    background-color: $contrastPrimaryColor;
    box-shadow: rgba(0, 0, 0, .2) 2px 2px 8px;

    .header {
      width: 100%;

      img {
        width: 100%;
        border-top-left-radius: $borderRadius;
        border-top-right-radius: $borderRadius;
      }
    }

    .content {
      padding: 0 30px;

      .title {
        margin: 20px 0 30px 0;
      }

      .icons {
        padding: 30px 0;
        display: flex;
        flex-direction: row;
        color: $accentColor;
        font-size: 30px;

        .icon {
          margin-right: 20px;
        }
      }
    }

    .footer {
      padding: 0;
      .links {
        padding: 20px;
        border-top: 1px solid $borderColor;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;

        .link {
          padding: 10px;
          .text {
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
