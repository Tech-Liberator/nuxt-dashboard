<template>
  <div id="authentication-layout">
    <div class="flex gap-2 items-center absolute top-6 right-5 z-[100]">
      <Icon name="heroicons:sun" class="w-5 h-5" />
      <Switch
        id="login-switch"
        v-model="enabled"
        :class="enabled ? 'bg-blue-600' : 'bg-gray-400'"
        class="relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-6' : 'translate-x-0'"
          class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
      <Icon name="heroicons:moon" class="w-5 h-5" />
    </div>
    <div class="flex gap-2 items-center absolute top-6 left-5 z-[100]">
      <NuxtLink to="/dashboard">
        <Icon name="logos:nuxt-icon" class="w-8 h-8" />
      </NuxtLink>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";
import { onMounted, ref, watch } from "vue";
const enabled = ref();
onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    document.documentElement.classList.add("dark");
    enabled.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    enabled.value = false;
  }
});

watch(enabled, async (newEnabled: boolean, oldEnabled: boolean) => {
  if (newEnabled) {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
});
</script>

<style scoped></style>
