<template>
  <div
    class="relative min-w-44 h-fullflex items-center justify-center rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-sm px-3 py-2 gap-4 border dark:border-gray-700 h-full"
  >
    <button
      class="w-full h-full text-sm font-semibold"
      @click="calenderShow = !calenderShow"
    >
      16 Apr 2024
    </button>
    <!-- Calendar -->
    <div
      v-if="calenderShow"
      class="space-y-0.5 absolute top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 z-50 shadow-xl dark:shadow-2xl rounded-lg p-3"
    >
      <!-- Months -->
      <div class="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
        <!-- Prev Button -->
        <div class="col-span-1">
          <button>
            <Icon
              name="heroicons:chevron-left"
              class="w-6 h-6 hover:text-blue-700 duration-200"
            />
          </button>
        </div>
        <!-- End Prev Button -->

        <!-- Month / Year -->
        <div class="col-span-3 flex justify-center items-center gap-x-1">
          <Listbox v-model="selectedMonth" class="h-full">
            <div class="relative h-full">
              <ListboxButton
                class="relative w-full h-full cursor-default rounded-md text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-white text-left px-3 py-2 pr-10 focus:outline-none border dark:border-gray-700"
              >
                <span class="block truncate">{{ selectedMonth.name }}</span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <Icon
                    name="heroicons:chevron-down"
                    class="w-5 h-5 hover:text-blue-700"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full shadow-md overflow-auto rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none text-sm font-medium z-40 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="month in months"
                    :key="month.id"
                    :value="month"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-blue-700 text-white ' : '',
                        'relative cursor-default select-none py-2 px-2',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ month.name }}</span
                      >
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>

          <span class="text-gray-800 dark:text-neutral-200">/</span>

          <Listbox v-model="selectedYear" class="h-full">
            <div class="relative h-full">
              <ListboxButton
                class="relative w-full h-full cursor-default rounded-md text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-white text-left px-3 py-2 pr-10 focus:outline-none border dark:border-gray-700"
              >
                <span class="block truncate">{{ selectedYear }}</span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <Icon
                    name="heroicons:chevron-down"
                    class="w-5 h-5 hover:text-blue-700"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full shadow-md overflow-auto rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none text-sm font-medium z-40 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="year in years"
                    :key="year"
                    :value="year"
                    as="template"
                  >
                    <li
                      :class="[
                        active ? 'bg-blue-700 text-white ' : '',
                        'relative cursor-default select-none py-2 px-2',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ year }}</span
                      >
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <!-- End Month / Year -->

        <!-- Next Button -->
        <div class="col-span-1 flex justify-end">
          <button>
            <Icon
              name="heroicons:chevron-right"
              class="w-6 h-6 hover:text-blue-700 duration-200"
            />
          </button>
        </div>
        <!-- End Next Button -->
      </div>
      <!-- Months -->

      <!-- Weeks -->
      <div class="flex pb-1.5">
        <span
          class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          Mo
        </span>
        <span
          class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          Tu
        </span>
        <span
          class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          We
        </span>
        <span
          class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          Th
        </span>
        <span
          class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          Fr
        </span>
        <span
          class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          Sa
        </span>
        <span
          class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          Su
        </span>
      </div>
      <!-- Weeks -->

      <!-- Days -->
      <div class="flex">
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            26
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            27
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            28
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            29
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            30
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            1
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            2
          </button>
        </div>
      </div>
      <!-- Days -->

      <!-- Days -->
      <div class="flex">
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            3
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            4
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            5
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            6
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            7
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            8
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            9
          </button>
        </div>
      </div>
      <!-- Days -->

      <!-- Days -->
      <div class="flex">
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            10
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            11
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            12
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            13
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            14
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            15
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            16
          </button>
        </div>
      </div>
      <!-- Days -->

      <!-- Days -->
      <div class="flex">
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            17
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            18
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            19
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:text-gray-300 disabled:pointer-events-none dark:hover:border-blue-500"
          >
            20
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            21
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            22
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            23
          </button>
        </div>
      </div>
      <!-- Days -->

      <!-- Days -->
      <div class="flex">
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            24
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            25
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            26
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            27
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            28
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            29
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            30
          </button>
        </div>
      </div>
      <!-- Days -->

      <!-- Days -->
      <div class="flex">
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
          >
            31
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            1
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            2
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            3
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            4
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            5
          </button>
        </div>
        <div>
          <button
            type="button"
            class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600"
            disabled=""
          >
            6
          </button>
        </div>
      </div>
      <!-- Days -->
    </div>
    <!-- End Calendar -->
  </div>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { type Ref, ref } from "vue";
import type { Month } from "~/types/intefaces/Calendar.inteface";

const calenderShow = ref(false);
const months: Ref<Month[]> = ref([
  {
    id: 0,
    name: "January",
  },
  {
    id: 1,
    name: "February",
  },
  {
    id: 2,
    name: "March",
  },
  {
    id: 3,
    name: "April",
  },
  {
    id: 4,
    name: "May",
  },
  {
    id: 5,
    name: "June",
  },
  {
    id: 6,
    name: "July",
  },
  {
    id: 7,
    name: "August",
  },
  {
    id: 8,
    name: "September",
  },
  {
    id: 9,
    name: "October",
  },
  {
    id: 10,
    name: "November",
  },
  {
    id: 11,
    name: "December",
  },
]);
const selectedMonth: Ref<Month> = ref(months.value[0]);
const years: Ref<Number[]> = ref([2024, 2025, 2026, 2027]);
const selectedYear: Ref<Number> = ref(years.value[0]);
</script>

<style scoped></style>
