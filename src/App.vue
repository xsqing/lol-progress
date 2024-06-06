<script setup lang="ts">
import { ref } from 'vue'
import LolProgress from './components/LolProgress.vue'
const percentage = ref(0)
setInterval(() => {
  percentage.value = percentage.value + 1
}, 100)
</script>

<template>
  <main>
    <LolProgress
      :style="{ width: '200px' }"
      :percentage="percentage"
      :heroSize="200"
      hero="missFortune"
    />
  </main>
</template>

<style scoped></style>
