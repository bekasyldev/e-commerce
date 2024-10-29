<script setup lang="ts">
interface {
    width?: string;
    disabled?: boolean;
}

const substrings = ['http', 'tel', '#'];

const isTagA = computed(() => {
  return props.href && substrings.some((substring) => (props.href as string).includes(substring));
});

const emit = defineEmits(['click']);
</script>

<template>
  <button class="w-full bg-black text white px-3 py-2">
    <slot />
  </button>
</template>
