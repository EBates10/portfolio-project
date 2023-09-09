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
#app,
body,
html {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  width: 100%;
  text-align: center;
  color: lightslategray;
  box-sizing: border-box;
  background-color: black;
  margin: 0;
  padding: 0;
}

body::-webkit-scrollbar {
  width: 16px;
}

body::-webkit-scrollbar-track {
  background-color: black;
}

body::-webkit-scrollbar-thumb {
  background-color: lightslategray;
  border-radius: 5px;
}

h1 {
  font-size: 24px;
}

.card {
  border: 1px solid lightslategray;
  border-radius: 10px;
}


.navbar {
  width: 100%;
  background-color: lightslategray;
  color: black;
}


.nav-item {
  width: 100%;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
}

li:hover {
  cursor: pointer;
}

li {
  display: block;
  transition-duration: 0.5s;
}

ul li ul {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}

ul li:hover>ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}


/************************
******MEDIA QUERIES******
************************/

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

  body,
  html {
    width: 100%;
  }

  .nav-icon {
    display: none;
  }

  .nav-link {
    padding: 4px;
  }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  body {
    width: 100%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  body {
    width: 100%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  body {
    width: 100%;
  }

  .navbar {
    width: 80px;
    height: 100vh;
    position: fixed;
    top: 0;
    transition: width 200ms ease;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }

  .nav-link {
    height: 100px;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }


  .nav-link:hover,
  .nav-item:hover {
    filter: grayscale(0%) opacity(1);
    background-color: black;
    color: white;
  }

  .link-text {
    display: none;
    margin-left: 1rem;
  }

  .navbar:hover {
    width: 300px;
  }

  .navbar:hover .link-text {
    display: block;
  }

  .fa-primary {
    color: #ff7eee;
  }

  .fa-secondary {
    color: #df49a6;
  }

  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }


}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body {
    width: 100%;
  }
}</style>
