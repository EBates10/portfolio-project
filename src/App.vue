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
#app, body, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  text-align: center;
  color: lightslategray;
  box-sizing: border-box;
  background-color: black;
}

img {
  max-width: 100px;
}

.card {
  border: 1px solid lightslategray;
  border-radius: 10px;
}



/************************
******MEDIA QUERIES******
************************/

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  body {
    width: 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  body {
    width: 100%;
  }}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  body {
    width: 100%;
  }}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  body {
    width: 100%;
  }}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body {
    width: 100%;
  }}


</style>
