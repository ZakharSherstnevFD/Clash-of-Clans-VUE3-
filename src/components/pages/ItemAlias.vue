<template>
  <div class="wrapper__item__alias">
    <div class="item__alias" v-if="item">
      <img :src="item.img" :alt="item.desc" />
      <h1>{{ item.title }}</h1>
      <p>{{ item.desc }}</p>
      <CardStats :item="item" />
      <div class="">
        <router-link to="/">
          <button class="button__home" to="/">Back to home</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import CardStats from "../UI/CardStats.vue";
export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);
    this.item = item;
  },
  components: { CardStats },
};
</script>
