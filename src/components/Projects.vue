<template>
  <div class="projects container">
    <div class="projects-wrapper">
      <div class="projects-title">
        <div class="icon">
          <font-awesome-icon icon="code" />
        </div>
        <h2 class="text">{{ $t('projects.title') }}</h2>
      </div>

      <div class="projects-container">
        <Project value="projects.grocery" :icons="groceryIcons">
          <img src="../assets/grocery.png" :alt="$t('projects.grocery.title')" slot="image" />
          <div class="links" slot="links">
            <a href="https://drive.google.com/open?id=1bXP0EIlNSe9XKHCu8Av8T_mzNaY3dsht" target="_blank" class="link">
              <font-awesome-icon :icon="['fab', 'youtube']" /><span class="text">{{ $t('projects.demo') }}</span>
            </a>
          </div>
        </Project>

        <Project value="projects.scrumBattle" :icons="scrumBattleIcons">
          <img src="../assets/scrum-battle.png" :alt="$t('projects.polyenco.title')" slot="image" />
          <div class="links" slot="links">
            <a href="https://www.youtube.com/watch?v=73hjQVx-ZKc/" target="_blank" class="link">
              <font-awesome-icon :icon="['fab', 'youtube']" /><span class="text">{{ $t('projects.demo') }}</span>
            </a>
            <a href="https://www.linkedin.com/feed/update/activity:6466682120529154048/" target="_blank" class="link">
              <font-awesome-icon :icon="['fab', 'linkedin']" /><span class="text">{{ $t('projects.post') }}</span>
            </a>
            <a href="https://github.com/felixSabatie/ScrumBattle/" target="_blank" class="link">
              <font-awesome-icon :icon="['fab', 'github']" /><span class="text">{{ $t('projects.repository') }}</span>
            </a>
          </div>
        </Project>

        <Project value="projects.polyenco" :icons="polyencoIcons">
          <img src="../assets/polyenco.png" :alt="$t('projects.polyenco.title')" slot="image" />
          <div class="links" slot="links">
            <a href="https://junior-polyenco.fr/" target="_blank" class="link">
              <font-awesome-icon icon="link" /><span class="text">{{ $t('projects.link') }}</span>
            </a>
          </div>
        </Project>

        <Project value="projects.afterworker" :icons="afterworkerIcons">
          <img src="../assets/afterworker.png" :alt="$t('projects.afterworker.title')" slot="image" />
          <div class="links" slot="links">
            <a href="https://gitlab.com/felixSabatie/afterworker" target="_blank" class="link">
              <font-awesome-icon :icon="['fab', 'gitlab']" /><span class="text">{{ $t('projects.repository') }}</span>
            </a>
            <a href="https://afterworker.herokuapp.com/" target="_blank" class="link">
              <font-awesome-icon icon="link" /><span class="text">{{ $t('projects.link') }}</span>
            </a>
          </div>
        </Project>

        <Project value="projects.jsExecutor" :icons="jsExecutorIcons">
          <img src="../assets/js-executor.png" :alt="$t('projects.polyenco.title')" slot="image" />
          <div class="links" slot="links">
            <a href="https://github.com/felixSabatie/js-executor/" target="_blank" class="link">
              <font-awesome-icon :icon="['fab', 'github']" /><span class="text">{{ $t('projects.repository') }}</span>
            </a>
          </div>
        </Project>

        <Project value="projects.simpleChat" :icons="simpleChatIcons">
          <img src="../assets/simple-chat.png" :alt="$t('projects.polyenco.title')" slot="image" />
          <div class="links" slot="links">
            <a href="https://github.com/felixSabatie/SimpleChatApp/" target="_blank" class="link">
              <font-awesome-icon :icon="['fab', 'github']" /><span class="text">{{ $t('projects.repository') }}</span>
            </a>
          </div>
        </Project>

      </div>
    </div>
  </div>
</template>

<script>
  import Project from './Project'

  export default {
    components: { Project },
    data() {
      return {
        groceryIcons: [
          ['fab', 'react'],
          ['fab', 'node'],
          ['fab', 'android'],
          ['fab', 'apple'],
        ],
        polyencoIcons: [
          ['fab', 'angular'],
          ['fab', 'laravel'],
          ['fab', 'docker'],
        ],
        jsExecutorIcons: [
          ['fab', 'node'],
          ['fab', 'vuejs'],
        ],
        simpleChatIcons: [
          ['fab', 'node'],
          ['fab', 'vuejs'],
        ],
        scrumBattleIcons: [
          ['fab', 'laravel'],
          ['fab', 'vuejs'],
        ],
        afterworkerIcons: [
          ['fab', 'angular'],
          ['fas', 'gem'],
          ['fab', 'docker'],
          ['fab', 'gitlab'],
          ['fab', 'node'],
        ],
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/colors';

  .projects-wrapper {

    .projects-title {
      text-align: center;
      margin: 80px 0;

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
    }

    .projects-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
    }

  }
</style>
