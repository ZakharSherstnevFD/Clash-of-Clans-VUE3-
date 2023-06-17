<template>
  <footer class="footer">
    <div class="_container">
      <div class="footer__flex">
        <div class="link__box">
          <div v-for="link in links" :key="link" class="link">
            <router-link :to="link.url">{{ link.value }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { links } from "../_config";

export default {
  data() {
    return {
      links: links,
    };
  },
};
</script>
