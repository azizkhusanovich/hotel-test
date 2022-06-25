<template>
  <div class="form-wrapper">
    <title-text :title="title"></title-text>

    <form class="form" @submit.prevent="formSubmit">
      <div class="inp" :class="validation ? 'valid' : 'invalid'">
        <input
          type="text"
          class="input"
          :placeholder="placeholder"
          v-model="email"
        />
        <i class="fas fa-envelope email-icon"></i>
      </div>

      <button class="btn" type="submit">Submit Now</button>
    </form>
  </div>
</template>

<script>
import TitleText from "../components/TitleText.vue";
import axios from "axios";
export default {
  data() {
    return {
      title: "Subscribe To Our Newsletter",
      placeholder: "Email Address Here",
      email: "",
      validation: false,
      regex: "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",
      token: "5132657120:AAE9k3ERlj7n9pCEFEYk4TbHoIEJgTfI4Ds",
      chat_id: "918664325",
    };
  },

  components: {
    TitleText,
  },

  watch: {
    email(value) {
      if (value.match(this.regex)) {
        this.validation = true;
      } else {
        this.validation = false;
      }
      return this.validation;
    },
  },

  methods: {
    async formSubmit() {
      if (this.validation) {
        // axios.get(
        //   `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&text=${this.email}&parse_mode=html`
        // );

        const response = await fetch(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&text=${this.email}&parse_mode=html`
        );
        this.email = "";
      }
    },
  },
};
</script>

<style>
</style>