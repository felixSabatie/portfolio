<template>
  <div class="header">
    <h1>Header</h1>
    <p @click="changeLang(lang.value)">{{ lang.text }}</p>
  </div>
</template>

<script>
  export default {
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
      }
    }
  }
</script>

<style lang="scss">

</style>
