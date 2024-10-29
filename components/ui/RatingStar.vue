<script setup lang="ts">
interface RatingStar {
  star: number;
  orderCount: number;
}

defineProps<RatingStar>();
</script>

<template>
  <div class="flex py-2 items-center">
    <ul class="flex">
      <li v-for="index in 5" :key="index" class="text-yellow-500">
        <NuxtImg src="/svg/star.svg" width="16" height="16" />
      </li>
    </ul>
    <span class="ml-3 text-gray-600 text-sm">({{ orderCount }})</span>
  </div>
</template>
