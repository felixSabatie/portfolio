<template>
  <div class="header container">
    <div class="header-wrapper">
      <a class="brand" href="#">
        <div class="logo"><img src="../assets/logo.svg" alt="Félix Sabatié"></div>
        <div class="title">Félix Sabatié</div>
      </a>
      <div class="buttons">
        <div class="button" @click="changeLang(lang.value)">{{ lang.text }}</div>
        <div class="button" :class="darkTheme ? 'selected' : ''" @click="toggleDarkTheme">{{ $t('header.dark')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['darkTheme'],
    computed: {
      lang() {
        return ((currentLang) => {
          switch(currentLang) {
            case 'fr':
              return {
                text: 'English',
                value: 'en'
              }
            default:
              return {
                text: 'Français',
                value: 'fr'
              }
          }
        })(this.$i18n.locale)
      }
    },
    methods: {
      changeLang(newLang) {
        this.$i18n.locale = newLang
      },
      toggleDarkTheme() {
        this.$emit('toggle-dark-theme')
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/variables';

  .header-wrapper {
    color: $contrastPrimaryColor;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;

    .brand {
      display: flex;
      flex-direction: row;
      align-items: center;
      white-space: nowrap;

      .logo {
        width: 20px;
        height: 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        padding-left: 10px;
        font-weight: bold;
        font-size: 20px;
        color: $contrastPrimaryColor;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;

      .button {
        border: 2px solid $contrastPrimaryColor;
        padding: 5px 25px;
        border-radius: 100px;
        cursor: pointer;
        transition: background-color $transitionsDuration, color $transitionsDuration;
        margin: 5px 0 5px 10px;

        &:hover {
          background-color: $contrastPrimaryColor;
          color: $primaryColor;
        }

        &.selected {
          background-color: $contrastPrimaryColor;
          color: $primaryColor;
        }
      }
    }
  }
</style>
