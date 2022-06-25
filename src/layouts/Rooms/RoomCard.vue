<template>
  <div class="card">
    <div class="img-block">
      <img :src="source" :alt="title" class="img" />
    </div>
    <div class="info">
      <h2 class="title">{{ title }}</h2>
      <p class="price">${{ text }}/ Per Night</p>
    </div>
  </div>
</template>

<script>
import propsMixin from "../propsMixin";
export default {
  mixins: [propsMixin],
};
</script>


<style lang="scss" scoped>
</style>