<template>
  <section id="skills-component">
    <h1>Skills</h1>
    <p>under construction...</p>
    <!-- <div class="flex-container card" v-for="skill in skills" v-bind:key="skill.id">
      <p>{{ skill.name }} : {{ skill.experience }} of 5</p>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'SkillsComponent',
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          experience: 2,
        },
        {
          name: 'CSS',
          experience: 2,
        },
        {
          name: 'JavaScript',
          experience: 2,
        },
        {
          name: 'Vue.js',
          experience: 1.5,
        },
        {
          name: 'C#/.NET',
          experience: 1,
        },
        {
          name: 'ASP.NET Web API',
          experience: 1,
        },
        {
          name: 'Visual Studio',
          experience: 1,
        },
        {
          name: 'SQL',
          experience: 1.5,
        },
        {
          name: 'Unit Testing',
          experience: 1,
        },
        {
          name: 'Git Version Control',
          experience: 1.5,
        },
        {
          name: 'Integration Testing',
          experience: 1,
        },
      ],
    }
  }


}
</script>


<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>