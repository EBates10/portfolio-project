<template>
  <section id="webpage-body">
    <section id="main">
      <header-component id="header-component" />
      <router-view id="router-view" />
      <footer-component id="footer-component" />
    </section>
    <navigation-bar id="nav" />
  </section>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationBar from './components/NavigationBar.vue';

export default {
  name: "App",
  components: { HeaderComponent, NavigationBar, FooterComponent },
  data() {
    return {

    }
  }
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
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  text-align: center;
  color: lightslategray;
  box-sizing: border-box;
  background-color: black;
  overflow: hidden;
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
  margin: 0;
}

.card {
  border: 1px solid lightslategray;
  border-radius: 10px;
  margin: 12px;
  max-width: 100px;
}

#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header-component"
    "nav"
    "router-view"
  ;
}

#header-component {
  grid-area: header-component;
}

#nav {
  grid-area: nav;
  position: absolute;
  bottom: 0;
  height: auto;
}

#router-view {
  grid-area: router-view;
}


/***********************************
*******NAV BAR DEFAULT(MOBILE)******
***********************************/


.navbar {
  width: 100%;
  background-color: lightslategray;
  color: black;
  overflow: hidden;
}

.nav-item {
  width: 100%;
  display: block;
  transition-duration: 0.5s;
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
  padding: 4px;
  margin: 12px 0 12px 0;
}

.nav-icon {
  display: none;
  font-size: 32px;
}

.nav-item:hover,
.nav-link:hover,
.nav-link-sub:hover>.nav-link {
  background-color: black;
  color: white;
  text-shadow: 0 0 6px white;
  cursor: pointer;
}

.nav-about:hover>ul,
.nav-about {
  transition: all 1s ease;
  visibility: visible;
  opacity: 1;
  position: sticky;
  display: block;
}

.nav-link-sub:hover,
.nav-link-sub:hover {
  font-weight: bold;
  text-shadow: 0 0 6px white;
  color: white;
}

.dropdown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 300px;
}

.nav-link-sub {
  font-size: 16px;
  font-weight: normal;
  list-style-type: none;
  background-color: black;
  padding-top: 8px;
  padding-bottom: 8px;
}

.nav-link-sub a {
  color: white;
  text-decoration: none;
}

/************************
******ANIMATIONS******
************************/

@keyframes dropdown {
  0% {
    visibility: visible;
  }

  50% {
    visibility: visible;
  }
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
  #webpage-body {
    display: grid;
    grid-template-columns: 80px 1fr;
    transition: 300ms;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "nav main"
      "nav main"
      "nav main"
    ;
  }

  #webpage-body:has(#nav:hover) {
    grid-template-columns: 200px auto;
  }


  #nav:hover,
  .navbar:hover {
    height: 100vh;
    width: 200px;
    position: fixed;
    top: 0;
    transition: width 200ms ease;
  }

  #main {
    grid-area: main;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header-component"
      "router-view"
      "footer-component"
    ;
  }


  #footer-component {
    grid-area: footer-component;
    height: 32px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    background-color: #00badc;
    color: black;
    display: flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    padding-right: 44px;
    z-index: -10;
    visibility: visible;
  }

  #nav,
  .navbar {
    height: 100vh;
    width: 80px;
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
    padding-left: 32px;
    padding-right: 32px;
  }

  .nav-icon {
    display: inline;
  }


  .link-text {
    display: none;
    margin-left: 1rem;
  }

  .dropdown {
    left: 0;
  }

  .navbar:hover .link-text {
    display: block;
  }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body {
    width: 100%;
  }
}



  /* 
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
  */
</style>


