<script setup lang="ts">
const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Sign Up",
    link: "/register",
  },
];

const router = useRouter();
</script>

<template>
  <header class="flex justify-between items-center py-3 px-4">
    <span class="font-bold text-xl">Exclusive</span>
    <ul class="flex gap-4">
      <li v-for="link in navLinks" :key="link.name">{{ link.name }}</li>
    </ul>
    <div class="flex gap-3">
      <div class="relative">
        <div
          class="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          class="block w-[230px] py-2 ps-4 text-sm text-gray-900 bg-gray-100"
          placeholder="What are you looking for?"
          required
        />
      </div>
      <NuxtImg
        class="cursor-pointer"
        @click="router.push('/wishlist')"
        src="/svg/heart_32.svg"
        alt="wishlist"
        height="32"
        width="32"
      />
      <NuxtImg
        class="cursor-pointer"
        @click="router.push('/cart')"
        src="/svg/cart.svg"
        alt="cart"
        height="32"
        width="32"
      />
      <NuxtImg
        class="cursor-pointer"
        @click="router.push('/profile')"
        src="/svg/user.svg"
        alt="profile"
        height="32"
        width="32"
      />
    </div>
  </header>
</template>
