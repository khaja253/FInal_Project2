<template>
  <div class="Header">
    <router-link
      style="text-decoration: none"
      :class="{ active: $route.name === 'Home' }"
      to="/"
    >
      Home
    </router-link>
    <router-link
      style="text-decoration: none"
      :class="{ active: $route.name === 'Products' }"
      to="/Products"
    >
      Products
    </router-link>
    <router-link
      style="text-decoration: none"
      :class="{ active: $route.name === 'Cart' }"
      to="/Cart"
    >
      Cart
    </router-link>

    <router-link
      style="text-decoration: none"
      :class="{ active: $route.name === 'RegisterForm' }"
      to="/RegisterForm"
    >
      Register
    </router-link>
    <!--<router-link
      style="text-decoration: none"
      :class="{ active: $route.name === 'About' }"
      to="/About"
    >
      About
    </router-link>-->
  </div>
</template>

<style scoped>
.Header {
  background-color: grey;
  text-decoration: none;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  word-spacing: 10px;
  color: violet;
  text-decoration: none;
}

.active {
  color: black;
}
</style>
