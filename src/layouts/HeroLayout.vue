<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="wrapper">
        <div class="left">
          <h1 class="title">
            {{ heroTitle }} <span>{{ heroActive }}</span>
          </h1>
          <p class="text">{{ heroText }}</p>
          <div class="amount-rooms">
            <div class="counters">
              <number
                class="number"
                ref="number1"
                :from="0"
                :to="421"
                :duration="3"
                :delay="1"
                easing="Power1.easeOut"
              />

              <small>Hotel</small>
            </div>
            <div class="counters">
              <number
                class="number"
                ref="number1"
                :from="0"
                :to="451"
                :duration="3"
                :delay="1"
                easing="Power1.easeOut"
              />

              <small>Apartment</small>
            </div>
          </div>

          <router-link to="/booking">
            <a href="#" class="booking-btn"
              >Book Now <i class="fas fa-long-arrow-alt-right booking-icon"></i
            ></a>
          </router-link>
        </div>
        <div class="right">
          <div class="img-block">
            <img src="../assets/images/main1.png" alt="image of luxury room" />
          </div>
          <div class="img-block">
            <img src="../assets/images/main2.png" alt="image of luxury room" />
          </div>
          <div class="img-block">
            <img src="../assets/images/main3.png" alt="image of luxury room" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroTitle: "Best Apartment & Hotel ",
      heroActive: "Service",
      heroText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie odio egestas elementum gravida. Turpis et ",
    };
  },
};
</script>

<style>
</style>