<template>
  <div class="home__block">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide v-for="item in items" :key="item.id" class="wrapper__home">
        <TheCard
          :imgUrl="item.img"
          :lvl="item.lvl"
          :title="item.title"
          :link="`/${item.alias}`"
        >
          <template v-slot:body>
            <p>{{ item.desc }}</p>
          </template>
          <template v-slot:footer>
            <CardStats :item="item" />
          </template>
        </TheCard>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import items from "../../seeders/items.js";

import TheCard from "../UI/TheCard.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import CardStats from "../UI/CardStats.vue";

export default {
  components: {
    TheCard,
    Carousel,
    Slide,
    Navigation,
    CardStats,
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 1.5,
        wrapAround: true,
        snapAlign: "center",
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 1.5,
        },
      },
    };
  },
};
</script>
