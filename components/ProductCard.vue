<script setup lang="ts">
import CardLikeBtn from "~/components/CardLikeBtn.vue";
import RatingStar from "~/components/ui/RatingStar.vue";
import { useUserStore } from "~/store/user";

interface ProductCard {
  id: string;
  name: string;
  imgSrc: string;
  imgAlt?: string;
  inCart: boolean;
  isLiked?: boolean;
  star: number;
  orderCount?: number;
  tags?: "discount" | "new";
  price: number;
  originalPrice?: number;
  discount?: number;
}

const props = defineProps<ProductCard>();
const userStore = useUserStore();

const handleAddToCart = () => {
  userStore.toggleCartItem(props.id);
};
</script>

<template>
  <div class="relative w-[270px] h-[350px] group">
    <!-- Image Container -->
    <div class="relative w-full h-[250px] bg-gray-100 overflow-hidden">
      <NuxtImg
        :src="imgSrc"
        :alt="imgAlt"
        width="180"
        height="133"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <!-- Discount Tag -->
      <div
        v-if="discount"
        class="absolute top-2 left-2 bg-[#DB4444] text-white text-sm px-3 py-1 rounded"
      >
        -{{ discount }}%
      </div>

      <!-- Like Button - Now static -->
      <div class="absolute top-2 right-2">
        <CardLikeBtn
          :id="id"
          :initial="isLiked || false"
          class="w-8 h-8 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
        />
      </div>

      <!-- Add to Cart Button Overlay - Modified height -->
      <div
        class="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center bg-black/20 opacity-0 transform transition-all duration-300 group-hover:opacity-100"
      >
        <button
          @click="handleAddToCart"
          class="w-full h-full bg-white text-black font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Product Info -->
    <div class="mt-4 space-y-2">
      <h3 class="font-medium uppercase truncate">{{ name }}</h3>
      <div class="flex items-center space-x-3">
        <span class="text-[#DB4444] font-semibold">$ {{ price }}</span>
        <span v-if="originalPrice" class="text-gray-400 line-through">
          ${{ originalPrice }}
        </span>
      </div>
      <RatingStar :star="star" :orderCount="90" class="mt-1" />
    </div>
  </div>
</template>
