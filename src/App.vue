<template>
  <the-header></the-header>
  <hero-layout></hero-layout>
  <gallery-layout></gallery-layout>
  <service-layout></service-layout>
  <rooms-layout></rooms-layout>
  <customers-layout></customers-layout>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import HeroLayout from "./layouts/HeroLayout.vue";
import ServiceLayout from "./layouts/ServicesLayout.vue";
import GalleryLayout from "./layouts/GalleryLayout.vue";
import RoomsLayout from "./layouts/RoomsLayout.vue";
import CustomersLayout from "./layouts/CustomersLayout.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    HeroLayout,
    TheFooter,
    GalleryLayout,
    RoomsLayout,
    CustomersLayout,
    ServiceLayout,
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>

