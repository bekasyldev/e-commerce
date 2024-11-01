<script setup lang="ts"></script>

<template>
  <Header />
  <div class="my-8 px-6">
    <ProductCard
      id="first thing first"
      name="Kids Electric Car"
      imgSrc="/images/kids-car.jpg"
      :price="99"
      :star="4"
      :orderCount="150"
      :inCart="true"
      :isLiked="true"
    />
  </div>
  <Features />
  <Footer />
</template>
