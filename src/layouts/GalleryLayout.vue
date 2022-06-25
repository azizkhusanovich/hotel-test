<template>
  <section class="gallery" id="product">
    <div class="container">
      <title-text :title="title" :text="text"></title-text>
      <div class="my-swiper">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          :breakpoints="{
            '525': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 3,
            },
            '1024': {
              slidesPerView: 4,
            },
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="img in roomsInfo" :key="img.id">
            <img :src="img.img" :alt="img.name" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import TitleText from "../components/TitleText.vue";
import Rooms from "../roomsData";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
export default {
  data() {
    return {
      title: "Choose your Luxurious room",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie  ",
      roomsInfo: Rooms,
      modules: [Pagination],
    };
  },
  components: {
    TitleText,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
}

.mySwiper {
  padding: 40px 0;
}
</style>