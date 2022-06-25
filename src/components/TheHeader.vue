<template>
  <header class="header">
    <div class="container">
      <nav class="nav" :class="isOpen ? 'open' : ''">
        <a href="#" class="logo">Hotel</a>

        <div class="info">
          <ul class="menu">
            <li v-for="list in lists" :key="list">
              <a
                :href="'#' + list.toLowerCase()"
                class="link"
                @click="toggleOpen"
                >{{ list }}
              </a>
            </li>
            <router-link to="booking"> Booking</router-link>
          </ul>

          <div class="registrate">
            <button class="log-btn">Login</button>
            <button class="sign-btn">Sign up</button>
          </div>
        </div>
        <div class="burger" @click="toggleOpen">
          <span v-for="span in 3" :key="span"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lists: ["Home", "Product", "Services", "Blog", "Contact"],
      isOpen: false,
    };
  },

  methods: {
    toggleOpen() {
      if (window.innerWidth <= 768) {
        return (this.isOpen = !this.isOpen);
      }
    },
  },
};
</script>

<style>
</style>