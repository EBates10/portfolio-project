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
    background-color: lightslategray;
    color: black;
    transition: width 200ms ease;
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    color: black;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }

  .nav-link:hover {
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
}


</style>
