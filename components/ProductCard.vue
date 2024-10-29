<script setup lang="ts">
import RatingStar from "~/components/ui/RatingStar";
interface ProductCard {
  name: string;
  imgSrc: string;
  imgAlt?: string;
  inCart: boolean;
  isLiked?: boolean;
  star?: number;
  orderCount?: number;
  tags?: "discount" | "new";
  price: number;
  colors?: string[];
}

const props = defineProps<ProductCard>();
const emit = defineEmits(["toggleCart", "toggleLike"]);

const handleCart = () => {
  emit("toggleCart");
};

const handleLike = () => {
  emit("toggleLike");
};
</script>

<template>
  <div class="w-[270px] h-[350px]">
    <div class="relative group]">
      <!-- Image Container -->
      <div
        class="relative flex items-center justify-center bg-gray-100 w-full h-[250px]"
      >
        <NuxtImg
          class="object-cover"
          width="180"
          height="133"
          :src="imgSrc"
          :alt="imgAlt"
        />
        <!-- Tags -->
        <div class="absolute top-2 left-2 bg-[#DB4444] text-white text-sm px-1">
          -40%
        </div>
        <!-- Action Buttons -->
        <div class="absolute top-2 right-2 flex flex-col gap-2">
          <button
            @click="handleLike"
            class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <NuxtImg src="/svg/heart.svg" height="24" width="24" />
          </button>
          <button
            @click="handleCart"
            class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <NuxtImg src="/svg/cart.svg" height="24" width="24" />
          </button>
        </div>
        <!-- Add to Cart Button (shows on hover) -->
        <div
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
        >
          <BtnBase class="z-10">Add to Cart</BtnBase>
        </div>
      </div>
    </div>
    <!-- Product Info -->
    <div class="mt-2">
      <p class="uppercase font-medium">{{ name }}</p>
      <div class="space-x-4">
        <span class="text-[#DB4444]">$ {{ price }}</span>
        <span class="text-gray-400">$160</span>
      </div>
      <RatingStar :star="'4'" :orderCount="'120'" />
      <!-- <div class="flex gap-2 mt-2">
        <span
          class="rounded-full border-black border w-5 h-5"
          :style="{ backgroundColor: color }"
          v-for="color in colors"
          :key="color"
        ></span>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>
