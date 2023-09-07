<template>
  <section>
    <header-component />
    <navigation-bar />
    <home-page />
    <contact-info />
    <footer-component />
  </section>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import HomePage from "./components/HomePage.vue";
import NavigationBar from './components/NavigationBar.vue';
import ContactInfo from "./components/ContactInfo.vue";

export default {
  name: "App",
  components: { HomePage, HeaderComponent, NavigationBar, ContactInfo, FooterComponent },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 100px;
}
</style>
