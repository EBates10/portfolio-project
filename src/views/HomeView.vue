<template>
  <div class="home">
    <skills-component />
    <projects-component />
  </div>
</template>

<script>
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import SkillsComponent from '@/components/SkillsComponent.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { ProjectsComponent, SkillsComponent }
}
</script>

    
    