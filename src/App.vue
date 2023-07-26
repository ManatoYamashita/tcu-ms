<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="navtext-container">
        <div class="navtext"><img href="#" class="logo" alt="tcu-ms logo" src="./assets/logo.svg" style="width:50%;"/></div>
        <menu>
        <input type="checkbox" class="menu-btn" id="menu-btn">
        <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
        <ul class="menu">
          <li><RouterLink to="/">Works</RouterLink></li>
          <li><RouterLink to="/members">Members</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </menu>
      </div>
    </header>
      <HelloWorld msg="About" />
  </div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 2px;
  width: 100%;
  max-width: 200px;
}

menu {
  position: absolute;
  right: 0%;
  top: 0;
}

.menu {
  list-style: none;
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 0 0 0;
  clear: both;
  background: rgb(48, 48, 48);
  border-radius: 15px;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  transform: scale(1, 0);
  transform-origin: top;
}

/* Hamburger menu button */
.menu-btn:checked ~ .menu {
  transform: scale(1, 1);
  transform-origin: top;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}

/* Hamburger menbu text */
.menu a {
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 16px;
  text-transform: capitalize;
  color: #ddd;
  opacity: 0;
  transition: 0.5s;
}

.menu li {
  border-top: 1px solid rgb(75, 75, 75);
  padding: 15px 0;
  margin: 0 54px;
  opacity: 0;
  transition: 0.5s;
}

.menu-btn:checked ~ .menu a,
.menu-btn:checked ~ .menu li {
  opacity: 1;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.2s;
}

.menu-btn {
  display: none;
}

.menu-icon {
  display: inline-block;
  position: relative;
  cursor: pointer;
  float: right;
  padding: 24px 14px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.navicon {
  float: right;
  background: #ddd;
  display: block;
  height: 3px;
  width: 26px;
  position: relative;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}

.navicon:before,
.navicon:after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  background: #ddd;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}

.navicon:before {
  top: 9px;
}

.navicon:after {
  bottom: 9px;
}

/* Hamburger Menu Animation Start */
.menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before {
  top: 0;
}
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  bottom: 0;
}

.menu-btn:checked ~ .menu-icon .navicon {
  background: rgba(0, 0, 0, 0);
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}

/* Navbar Container */
.navtext-container {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-around;}

@media (min-width: 1024px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
