<template>
  <div class="s-card">
    <div class="img-block">
      <img :src="source" :alt="title + 'img'" />
    </div>
    <h2 class="title">{{ title }}</h2>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
import propsMixin from "../propsMixin";
export default {
  mixins: [propsMixin],
};
</script>

<style>
</style>