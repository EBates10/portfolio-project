<template>
  <header id="header-component">
    <section class="header">
      <h1 class="header-item">Emily SP Bates</h1>
      <img src="../assets/headshot.jpg" alt="photo of Emily Bates" class="header-item">
    </section>
    <section class="sub-header">
      <p>Currently seeking a position as a Junior Software Developer</p>
    </section>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
#header-component {
  display: flex;
  flex-direction: column;
  width: 100%;
}

img {
  max-width: 100px;
  border-radius: 100%;
  box-shadow: 0 0 20px white;
  border: 0.5px solid black;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-item {
  display: inline;
  margin: 12px;
}

.sub-header {
  background-color: #df49a6;
  color: black;
  padding: 4px 0 4px 0;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 0 0 6px white;
}
</style>