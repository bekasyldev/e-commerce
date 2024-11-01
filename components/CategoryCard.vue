<script setup lang="ts">
interface CategoryCard {
  name: string;
}

defineProps<CategoryCard>();
</script>

<template>
  <div
    class="border border-gray-700 flex flex-col justify-center items-center w-[170px] h-[145px]"
  >
    <NuxtImg
      :src="`/svg/56x56/${name}.svg`"
      :alt="name"
      width="56"
      height="56"
    />
    <span>{{ name }}</span>
  </div>
</template>
