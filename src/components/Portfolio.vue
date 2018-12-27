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
