<template>
  <div class="header">
    <div class="_container">
      <div class="header__flex">
        <div class="logo">
          <router-link to="/"
            ><h2>{{ title }}</h2></router-link
          >
        </div>
        <div class="link__box">
          <div v-for="link in links" :key="link" class="link">
            <router-link :to="link.url">{{ link.value }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { app, links } from "../_config";
export default {
  data() {
    return {
      title: app.title,
      links: links,
    };
  },
};
</script>
