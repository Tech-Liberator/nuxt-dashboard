<template>
  <div
    class="bg-white dark:bg-gray-800 text-gray-700 dark:text-white border-r dark:border-gray-700"
  >
    <div
      id="dashboard-side-nav"
      :class="isSideBarOpen ? 'max-w-80' : 'max-w-16'"
      class="w-full max-h-screen h-screen duration-500"
    >
      <div class="h-full w-full flex flex-col">
        <div
          class="min-h-16 max-h-16 w-full flex flex-col px-2 gap-2 justify-center items-center"
        >
          <div class="w-full overflow-hidden rounded-md">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-3"
            >
              <Icon name="logos:nuxt-icon" class="w-6 h-6" />
              <span class="text-xl font-bold uppercase">Nuxt Dashboard</span>
            </div>
          </div>
        </div>
        <div class="h-full flex-grow w-full flex flex-col px-2 gap-2 pt-10">
          <NuxtLink to="/dashboard" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:squares-2x2" class="w-5 h-5" />
              <span class="text-md font-medium">Dashboard</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/dashboard/users" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:user" class="w-5 h-5" />
              <span class="text-md font-medium">Users</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/dashboard/charts" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:chart-pie" class="w-5 h-5" />
              <span class="text-md font-medium">Charts</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/dashboard/calendar" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:calendar-days" class="w-5 h-5" />
              <span class="text-md font-medium">Calendar</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/login" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:star" class="w-5 h-5" />
              <span class="text-md font-medium">Login</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/signup" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:user-plus" class="w-5 h-5" />
              <span class="text-md font-medium">Signup</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/forgotpassword" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:sparkles" class="w-5 h-5" />
              <span class="text-md font-medium">Forgot Password</span>
            </div>
          </NuxtLink>
        </div>
        <div class="min-h-32 max-h-32 w-full flex flex-col px-2 gap-2">
          <NuxtLink to="/dashboard/settings" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:cog" class="w-5 h-5" />
              <span class="text-md font-medium">Settings</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/dashboard/help" class="w-full overflow-hidden">
            <div
              class="flex min-w-80 justify-start gap-6 h-12 items-center p-[0.85rem]"
            >
              <Icon name="heroicons:information-circle" class="w-5 h-5" />
              <span class="text-md font-medium">Help</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isSideBarOpen: {
    type: Boolean,
    default: () => true,
  },
});
</script>

<style scoped>
.router-link-active {
  @apply bg-gray-100 dark:bg-gray-700;
}
.router-link-exact-active {
  @apply bg-gray-100 dark:bg-gray-700;
}

a {
  @apply hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full;
}
</style>
