<template>
  <footer class="footer" id="contact">
    <div class="container">
      <div class="top">
        <div class="main">
          <h2 class="title">Hotel</h2>
          <p class="text">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            concectetur.
          </p>

          <div class="links">
            <a href="#" class="link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="link">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div class="little" v-for="list in footerList" :key="list">
          <h2 class="title">{{ list.title }}</h2>
          <ul class="menu">
            <li class="list" v-for="item in list.menu" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <p class="copy">CopyRight@Besnik. All Rigt Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        {
          title: "About Us",
          menu: ["About Us", "careers", "Blog", "Press Room"],
        },
        {
          title: "Resources",
          menu: ["Our Work", "Services", "FAQ"],
        },
        {
          title: "Contact Us",
          menu: ["About Us", "Menu", "Contact"],
        },
      ],
    };
  },
};
</script>

<style>
</style>