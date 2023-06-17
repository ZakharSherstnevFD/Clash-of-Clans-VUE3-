<template>
  <div class="card">
    <router-link v-if="link" :to="link">
      <p class="card__name">{{ lvl }}</p>
      <p class="card__title">{{ title }}</p>
      <div v-if="imgUrl" class="card__img__box">
        <img :src="imgUrl" alt="" />
      </div>
      <div class="card__body">
        <slot name="body"></slot>
      </div>
      <slot name="footer"></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    lvl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
