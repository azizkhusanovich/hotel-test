<template>
  <h2 class="gen-title">{{ title }}</h2>
  <p class="gen-subtitle">{{ text }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>