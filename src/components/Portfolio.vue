<template>
  <div class="portfolio">
    <Header></Header>
    <p>{{ $t('test.hello1') }}</p>
    <p>{{ $t('test.hello2') }}</p>
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
  .portfolio {
    background-image: url('../assets/background.svg');
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;

      background-image: url('../assets/background.svg');
      background-size: 100% auto;
      background-position: center top;
      background-repeat: no-repeat;
      transform: rotate(180deg);
    }
  }
</style>
