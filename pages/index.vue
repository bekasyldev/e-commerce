<script setup lang="ts">
const router = useRouter();

const handleCartToggle = () => {
  // Handle cart toggle logic
};

const handleLikeToggle = () => {
  // Handle like toggle logic
};
</script>

<template>
  <Header />
  <div class="my-8 px-6">
    <ProductCard
      name="Kids Electric Car"
      imgSrc="/images/kids-car.jpg"
      price="99"
      star="4"
      orderCount="150"
      colors='["#FF0000", "#00FF00", "#0000FF"]'
      :inCart="true"
      :isLiked="true"
      @toggleCart="handleCartToggle"
      @toggleLike="handleLikeToggle"
    />
  </div>
  <Footer />
</template>
