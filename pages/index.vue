<template>
  <div class="h-full w-full bg-indigo-950">
    <div class="max-w-[80rem] flex flex-col mx-auto size-full h-screen">
      <!-- ========== HEADER ========== -->
      <header
        class="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4"
      >
        <nav
          class="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex items-center justify-between w-full">
            <NuxtLink
              to="/"
              class="flex text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600 gap-2 h-10 items-center"
              aria-label="Brand"
            >
              <Icon name="logos:nuxt-icon" class="w-6 h-6" />
              <span>Nuxt Dashboard</span>
            </NuxtLink>
            <div class="sm:hidden">
              <button
                type="button"
                class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-600 transition-all text-sm dark:border-neutral-700 dark:hover:border-neutral-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div
              class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
            >
              <NuxtLink
                class="font-medium text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
                to="/dashboard"
                aria-current="page"
              >
                Demo
              </NuxtLink>
            </div>
          </div>
        </nav>
      </header>
      <!-- ========== END HEADER ========== -->

      <!-- ========== MAIN CONTENT ========== -->
      <main id="content">
        <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 class="block text-2xl font-bold text-white sm:text-4xl">
            Welcome to Nuxt Dashboard: Empowering Nuxt Developers
          </h1>
          <p class="mt-3 text-lg text-gray-300 dark:text-neutral-400">
            Unlock the potential of your projects with Nuxt Dashboard. This
            open-source solution offers a comprehensive toolkit, including a
            fully functional calendar, custom alerts, loading screens, and
            authentication components like login, signup, and forget password.
            Built with Tailwind, Vite, Pinia, and more, it's designed to
            streamline development and elevate your dashboard experience.
          </p>
          <div
            class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
          >
            <a
              class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              target="parent"
              href="https://github.com/Tech-Liberator/nuxt-dashboard"
            >
              Download from
              <Icon name="devicon:github" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
      <!-- ========== END MAIN CONTENT ========== -->

      <!-- ========== FOOTER ========== -->
      <footer class="mt-auto text-center py-5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p class="text-sm text-gray-400 dark:text-neutral-400">
            Project by
            <a
              class="text-white decoration-2 underline underline-offset-2 font-medium hover:text-gray-200 hover:decoration-gray-400"
              href="https://github.com/Tech-Liberator"
              >Tech Liberator</a
            >
          </p>
        </div>
      </footer>
      <!-- ========== END FOOTER ========== -->
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "index-layout",
});
</script>

<style scoped></style>
