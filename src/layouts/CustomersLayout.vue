<template>
  <section class="blog" id="blog">
    <div class="container">
      <title-text :title="title" :text="text"></title-text>
      <div class="wrapper">
        <customers-card
          v-for="card in customersInfo"
          :key="card.id"
          :source="card.img"
          :title="card.title"
          :text="card.text"
        ></customers-card>
      </div>

      <form-contact></form-contact>
    </div>
  </section>
</template>

<script>
import TitleText from "../components/TitleText.vue";
import CustomersCard from "./Customers/CustomersCard.vue";
import CustomersInfo from "../customers.js";
import FormContact from "../components/FormContact.vue";
import axios from "axios";
export default {
  data() {
    return {
      title: "What does our customer say?",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      customersInfo: CustomersInfo,
    };
  },
  components: {
    TitleText,
    CustomersCard,
    FormContact,
  },
};
</script>

<style>

</style>