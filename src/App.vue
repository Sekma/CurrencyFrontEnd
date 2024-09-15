<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div>
    <nav class="border-bottom">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>
    <main>
      <RouterView class="view"/>
    </main>
  </div>
   
</template>

<style>

nav {
  width: 80vh;
  font-size: 12px;
  text-align: start;
  margin-top: 0.5rem;
  padding: 1rem 0;
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
    width: 120vh;
    font-size: 1rem;
    padding: 0.5rem 0;
    margin-top: 1rem;
  }
}
</style>
