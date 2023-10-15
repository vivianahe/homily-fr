<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="pb-10">
        <p class="font-bold text-lg text-gray-900 py-4">Fecha: <span class="font-normal">{{ prayer.date }}</span> </p>
        <div class="flex justify-center flex-col align-items-center">
          <p class="font-bold text-lg text-gray-900 py-4">Video</p>
          <iframe
          width="260"
          height="315"
          :src="
                  'https://www.youtube.com/embed/' +
                  prayer.link
                "
          frameborder="0"
          allowfullscreen
        ></iframe>
        </div>
    </div>
    <div
    class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b"
  >
    <button
      data-modal-hide="defaultModal"
      type="button"
      @click="$emit('closeMod')"
      class="uppercase text-gray-800 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Cancelar
    </button>
  </div>
</section>
</template>

<script setup>
import { ref  } from "vue";
const user_id = localStorage.getItem("user_id");

const emit = defineEmits(["closeMod"]);
const { data } = defineProps({
  data: {
    Object: true,
  },
});

const prayer = ref({
  id: data ? (data.id || null) : null,
  date: data ? (data.date || "") : "",
  link: data ? (data.link || "") : "",
  user_id: user_id
});

</script>
