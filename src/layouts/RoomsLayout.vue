<template>
  <section class="rooms">
    <div class="container">
      <title-text :title="title" :text="text"></title-text>
      <div class="cards">
        <rooms-card
          v-for="card in roomsInfo"
          :key="card.id"
          :title="card.name"
          :text="card.text"
          :source="card.img"
        ></rooms-card>
      </div>
    </div>
  </section>
</template>

<script>
import TitleText from "../components/TitleText.vue";
import RoomsInfo from "../roomsData";
import RoomsCard from "./Rooms/RoomCard.vue";
export default {
  data() {
    return {
      title: "Our Popular Rooms",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie odio egestas elementum gravida. Turpis et ",
      roomsInfo: RoomsInfo,
    };
  },
  components: {
    TitleText,
    RoomsCard,
  },
};
</script>

<style>
</style>