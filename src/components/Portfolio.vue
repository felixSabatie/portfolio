<template>
  <div class="portfolio">
    <Header></Header>
    <WelcomeText></WelcomeText>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header'
  import WelcomeText from './WelcomeText'
  import About from './About'
  import Projects from './Projects'
  import Footer from './Footer'

  export default {
    components: { Header, WelcomeText, About, Projects, Footer }
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .portfolio {
    background-image: url('../assets/background.svg');
    background-size: auto;
    background-position: center top;
    background-repeat: no-repeat;
    position: relative;

    @media screen and (min-width: $smallSize) {
      background-size: 100% 1000px;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;

      background-image: url('../assets/background.svg');
      background-size: auto;
      background-position: center top;
      background-repeat: no-repeat;
      transform: rotate(180deg);

      @media screen and (min-width: $smallSize) {
        background-size: 100% 1000px;
      }
    }
  }
</style>
