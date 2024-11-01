<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { computed } from "vue";
import { useUserStore } from "~/store/user";

interface CardLikeBtn {
  id: string;
  initial: boolean;
}

const props = defineProps<CardLikeBtn>();

const userStore = useUserStore();
const isLoggedIn = ref(false);

const initialLike = computed(() => {
  return userStore.wishlist.includes(props.id);
});

const [like, toggleLike] = useToggle(initialLike.value);

const toggleLikeHandler = () => {
  if (isLoggedIn.value) {
    mutation({ id: props.id, like: !like.value });
  } else {
    userStore.toggleWishlistItem(props.id);
    toggleLike(!like.value);
  }
};

const mutation = (mutationData: object) => {
  console.log("Mutation for authorized user:", mutationData);
};
</script>

<template>
  <button @click="toggleLikeHandler">
    <svg
      v-if="!like"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M17.95 16.175L15.1 13.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4zM11 21l-3.175-2.85q-1.8-1.625-3.088-2.9t-2.125-2.4t-1.225-2.175T1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.55T11 5.1q.85-1 2.025-1.55T15.5 3q2.025 0 3.4 1.138T20.775 7H18.65q-.45-1-1.325-1.5T15.5 5q-1.275 0-2.2.688T11.575 7.5h-1.15Q9.65 6.375 8.662 5.688T6.5 5q-1.425 0-2.463.988T3 8.474q0 .825.35 1.675t1.25 1.963t2.45 2.6T11 18.3q.65-.575 1.525-1.325t1.4-1.25l.225.225l.488.488l.487.487l.225.225q-.55.5-1.4 1.238t-1.5 1.312z"
      />
    </svg>
    <svg
      v-else
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="red"
        d="M22.175 10.525q.275.3.275.713t-.275.712l-3.55 3.525q-.275.3-.7.3t-.7-.3l-1.425-1.4q-.3-.3-.3-.712t.3-.713q.3-.275.713-.275t.712.275l.7.7l2.825-2.825q.3-.275.712-.275t.713.275m-11.85 9.9l-2.5-2.275q-1.8-1.625-3.087-2.9t-2.125-2.4t-1.225-2.175T1 8.475q0-2.35 1.575-3.912T6.5 3q1.3 0 2.475.538T11 5.075q.85-1 2.025-1.537T15.5 3q2.125 0 3.563 1.288T20.85 7.3q-.5-.2-1.05-.25T18.675 7q-2.125 0-3.9 1.713T13 13q0 1.2.525 2.438T15 17.45q-.475.425-1.237 1.088T12.45 19.7l-.8.725q-.275.25-.663.25t-.662-.25"
      />
    </svg>
  </button>
</template>
