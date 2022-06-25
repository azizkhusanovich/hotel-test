<template>
  <section class="services" id="services">
    <div class="container">
      <title-text :title="title"></title-text>
      <div class="wrapper">
        <services-card
          v-for="card in servicesInfo"
          :key="card.id"
          :title="card.title"
          :text="card.text"
          :source="card.img"
        ></services-card>
      </div>
    </div>
  </section>
</template>

<script>
import TitleText from "../components/TitleText.vue";
import ServicesCard from "./Services/ServicesCard.vue";
import ServicesInfo from "../services";
export default {
  data() {
    return {
      title: "What Services , We Give You !",
      servicesInfo: ServicesInfo,
    };
  },
  components: {
    TitleText,
    ServicesCard,
  },
};
</script>

<style>
</style>