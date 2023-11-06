<template>
  <header>
    <div class="header">
      <router-link to="/" class="links"> [ HOME ] </router-link>
      <nav class="nav">
        <router-link to="/" class="links"> [ PROJECTS ] </router-link>
        <router-link to="/" class="links"> [ ABOUT ] </router-link>
        <router-link to="/" class="links"> [ CONTACT ] </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  width: 100%;
  padding: var(--l-sizing);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  font-family: "Handjet", sans-serif;
  font-size: 16px;
  z-index: 2;
}
.nav {
  display: flex;
  gap: var(--xl-sizing);
}

.links {
  position: relative;
  text-decoration: none;
  font-weight: 400;
  color: var(--whiteColor);
  transition: all 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: 0;
    left: 25%;
    background-color: var(--secondaryColor);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    font-size: larger;
    color: var(--secondaryColor);
    cursor: pointer;

    &::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}
</style>
