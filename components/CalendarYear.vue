<template>
  <div class="bg-white dark:bg-gray-800 w-full">
    <div
      class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4"
    >
      <section
        v-for="(month, index) in monthsOfYear"
        :key="index"
        class="text-center"
      >
        <h2 class="text-sm font-semibold text-gray-900 dark:text-white">{{ month.name }}</h2>
        <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div
          class="isolate mt-2 grid grid-cols-7 gap-px bg-gray-200 text-sm shadow ring-1 ring-gray-200"
        >
          <button
            v-for="(date, i) in month.data"
            :key="i"
            :class="
              date.from !== 'current'
                ? 'bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10 dark:bg-gray-600 dark:text-gray-300'
                : 'bg-white dark:bg-gray-800 dark:text-white py-1.5 hover:bg-gray-100 focus:z-10'
            "
            type="button"
          >
            <time
              :datetime="date.dateStr"
              :class="
                date.isToday ? 'bg-indigo-600 font-semibold text-white' : ''
              "
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
            >
              {{ date.day }}
            </time>
          </button>
        </div>
      </section>
      <!-- More items... -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, type PropType, type Ref } from "vue";
import type {
  DateEvents,
  DateRange,
  Event,
} from "~/types/intefaces/Calendar.inteface";
import type { DateProp } from "~/types/intefaces/Props.interface";
import {
  getLocaleDateString,
  isCurrentDate,
} from "~/composables/calendar.composable";
const props = defineProps({
  date: {
    type: Object as PropType<DateProp>,
  },
});
const calendarData: Ref<DateEvents[]> = ref([]);
const monthsOfYear: Ref<any[]> = ref([]);

function getDateRange(year: number, month: number): DateRange {
  const startDate = new Date(year, month - 1, 1); // Month is zero-based
  const endDate = new Date(year, month, 0); // Get last day of current month
  const startDayOfWeek = startDate.getDay(); // Get the day of the week for the start date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const endDayOfWeek = endDate.getDay();

  const startDateOffset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; // Calculate offset for the start date
  const endDateOffset = endDayOfWeek === 0 ? 0 : 7 - endDayOfWeek; // Calculate offset for the end date

  // Adjust start date to the beginning of the week
  startDate.setDate(startDate.getDate() - startDateOffset);

  // Adjust end date to the end of the week
  endDate.setDate(endDate.getDate() + endDateOffset);
  return { startDate, endDate };
}

function getCalendarData(year: number, month: number): DateEvents[] {
  const { startDate, endDate } = getDateRange(year, month);
  const calendarData: DateEvents[] = [];

  let currentDate = new Date(startDate);

  // Loop through dates from start date to end date and push them into the calendarData array
  while (currentDate <= endDate) {
    let from = "";

    if (currentDate.getMonth() < month - 1) {
      from = "pre";
    } else if (currentDate.getMonth() > month - 1) {
      from = "next";
    } else {
      from = "current";
    }
    const date = new Date(currentDate);
    const events: Event[] = [];
    calendarData.push({
      from,
      date,
      dateStr: getLocaleDateString(date),
      dayOfWeek: date.getDay(),
      dayOfWeekStr: getLocaleDateString(date, "en-US", {
        weekday: "short",
      }),
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      events,
      isToday: isCurrentDate(date),
    });
    currentDate.setDate(currentDate.getDate() + 1); // Increment date by 1 day
  }
  new Date(currentDate);
  return calendarData;
}

function changeMonth(date: DateProp) {
  monthsOfYear.value = [];
  for (let i = 0; i < 12; i++) {
    const newDate = new Date();

    newDate.setMonth(i);
    calendarData.value = getCalendarData(date.year, i + 1);
    monthsOfYear.value.push({
      name: newDate.toLocaleString("en-US", {
        month: "long",
      }),
      data: calendarData.value,
    });
  }
}
watch(
  () => props.date,
  (newDate: any) => {
    changeMonth(newDate);
  },
  { deep: true, immediate: true }
);
</script>

<style scoped></style>
