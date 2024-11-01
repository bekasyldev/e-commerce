<script setup lang="ts">
import NewSection from "~/components/ui/NewSection.vue";
</script>

<template>
  <section class="space-y-4 my-6">
    <NewSection title="">Featured</NewSection>
    <p class="text-4xl font-semibold">New Arrival</p>
    <div class="flex gap-8 h-[600px] rounded-xl">
      <div class="flex-1 h-full relative bg-black text-white">
        <NuxtImg
          class="absolute bottom-0 right-0"
          src="/images/feature_ps5.png"
          width="511"
          height="511"
        />
        <div class="absolute bottom-8 left-4 space-y-4">
          <span class="text-3xl font-sembibold">PlayStation 5</span>
          <p class="text-sm w-60">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button class="underline">Shop now</button>
        </div>
      </div>
      <div class="grid grid-row-2 flex-1 text-white gap-4">
        <div class="bg-black relative">
          <NuxtImg
            class="h-full absolute left-0"
            src="/images/features_woman.jpg"
            alt="attractive women in black background"
            width="432"
          />
          <div class="absolute left-4 bottom-2 space-y-3">
            <span class="text-2xl font-sembibold">Women’s Collections</span>
            <p class="w-[220px] text-sm">
              Featured woman collections that give you another vibe.
            </p>
            <button class="underline">Shop now</button>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="bg-black flex-1 relative">
            <NuxtImg
              class="h-full absolute left-10"
              src="/images/feature_speakers.png"
              alt="attractive women in black background"
              width="170"
              height="190"
            />
            <div class="absolute left-4 bottom-2 space-y-3">
              <span class="text-2xl font-sembibold">Speakers</span>
              <p class="w-[220px] text-sm">Amazon wireless speakers</p>
              <button class="underline">Shop now</button>
            </div>
          </div>
          <div class="bg-black flex-1 relative">
            <NuxtImg
              class="h-full absolute left-10"
              src="/images/feature_gucci.png"
              alt="attractive women in black background"
              width="170"
              height="190"
            />
            <div class="absolute left-4 bottom-2 space-y-3">
              <span class="text-2xl font-sembibold">Perfume</span>
              <p class="w-[220px] text-sm">GUCCI INTENSE OUD EDP</p>
              <button class="underline">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
