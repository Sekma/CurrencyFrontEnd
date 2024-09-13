<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
     <!-- Required Stylesheets -->
     <link
     type="text/css"
     rel="stylesheet"
     href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"/>
   <link
     type="text/css"
     rel="stylesheet"
     href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/>

  <div class="view">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>
    <main>
      <RouterView class="m-auto"/>
    </main>
  </div>
   
</template>

<style>
.view{
  height: 100vh;
}
nav {
  width: 100vh;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
