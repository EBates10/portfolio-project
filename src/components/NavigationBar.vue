<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link">
          <font-awesome-icon icon="fa-brands fa-fort-awesome" class="nav-icon" />
          <span class="link-text">Home</span>
        </a>
      </li>
      <li class="nav-item nav-about">
        <a href="#" class="nav-link">
          <font-awesome-icon icon="fa-solid fa-book-open" class="nav-icon" />
          <span class="link-text">About</span>
        </a>
        <ul class="dropdown nav-item">
          <li class="nav-link-sub"><a href="#">Professional History</a></li>
          <li class="nav-link-sub"><a href="#">Technical Skills</a></li>
          <li class="nav-link-sub"><a href="#">Hobbies & Interests</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">
          <font-awesome-icon icon="fa-solid fa-address-card" class="nav-icon" />
          <span class="link-text">Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
/* FOR DESKTOP NAVBAR STYLING & ANIMATION YT@FIRESHIP https://www.youtube.com/watch?v=biOMz4puGt8&t=485s */

/* FOR MOBILE NAVBAR STYLING & ANIMATION https://css-tricks.com/solved-with-css-dropdown-menus/ */

#nav {
  font-size: 20px;
  font-weight: bold;
}
</style>