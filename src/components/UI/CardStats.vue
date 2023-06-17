<template>
  <div class="card-stats">
    <div v-for="(stat, index) in item.info" :key="index" class="one-third">
      <p class="stat-value">{{ stat.value }}</p>
      <p class="stat">{{ stat.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
  },
};
</script>
