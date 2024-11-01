<script setup lang="ts">
import { useUserStore } from "~/store/user";
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
const userStore = useUserStore();
</script>

<template>
  <header class="flex justify-between items-center">
    <span class="font-bold text-xl">Exclusive</span>
    <ul class="flex gap-4">
      <li v-for="link in navLinks" :key="link.name">{{ link.name }}</li>
    </ul>
    <div class="flex gap-3 items-center">
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
        />
      </svg>
      <div class="relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="m11 21l-3.175-2.85q-1.8-1.625-3.088-2.9t-2.125-2.4t-1.225-2.175T1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.55T11 5.1q.85-1 2.025-1.55T15.5 3q2.1 0 3.825 1.475t1.725 4q0 .35-.05.738t-.15.787h-2.125q.125-.45.2-.85T19 8.4q0-1.875-1.25-2.637T15.5 5q-1.275 0-2.2.688T11.575 7.5h-1.15Q9.65 6.375 8.662 5.688T6.5 5q-1.425 0-2.463.988T3 8.474q0 .825.35 1.675t1.25 1.963t2.45 2.6T11 18.3q.65-.575 1.525-1.325t1.4-1.25l.225.225l.488.488l.487.487l.225.225q-.55.5-1.4 1.238t-1.5 1.312zm4-7v-2h8v2z"
          />
        </svg>
        <span
          class="absolute right-0 bottom-2 rounded-full bg-orange-500 text-white px-1 text-sm"
          v-if="userStore.wishlistCount !== 0"
          >{{ userStore.wishlistCount }}</span
        >
      </div>
      <div class="relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"
          />
        </svg>
        <span
          class="absolute right-0 bottom-2 rounded-full bg-orange-500 text-white px-1 text-sm"
          v-if="userStore.cartCount !== 0"
          >{{ userStore.cartCount }}</span
        >
      </div>
    </div>
  </header>
</template>
