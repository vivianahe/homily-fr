<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="pb-10">
      <div class="grid grid-cols-2">
        <div>
          <p class="font-bold text-lg text-gray-900">
            Fecha homilía: <span class="font-normal">{{ data.date }}</span>
          </p>
        </div>
        <div>
          <p class="font-bold text-lg text-gray-900">
            Cita bíblica: <span class="font-normal">{{ data.citation }}</span>
          </p>
        </div>
      </div>
      <p class="font-bold text-lg text-gray-900 mt-3">
        Título: <span class="font-normal">{{ data.title }}</span>
      </p>
      <p class="font-bold text-lg text-gray-900 mt-3">
        Lectura: <span class="font-normal">{{ data.reading }}</span>
      </p>
      <p class="font-bold text-lg text-gray-900 mt-3">
        Evangelio: 
      </p>
      <p class="text-gray-900" v-html="data.gospel"></p>
      <p class="font-bold text-lg text-gray-900 mt-3">
        Imagen: <img :src="'http://homily-ba.test/support/imgHomily/' +
          data.img
          " />
      </p>
      <p class="font-bold text-lg text-gray-900 mt-3">
        Audio:
        <audio controls>
          <source :src="'http://homily-ba.test/support/audioHomily/' +
            data.audio
            " type="audio/mp4" />
          Tu navegador no admite el elemento de audio.
        </audio>
      </p>
    </div>
    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
      <button data-modal-hide="defaultModal" type="button" @click="$emit('closeMod')"
        class="uppercase text-gray-800 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
        Cancelar
      </button>
    </div>
  </section>
</template>

<script setup>
const user_id = localStorage.getItem("user_id");

const emit = defineEmits(["closeMod"]);
const { data } = defineProps({
  data: {
    Object: true,
  },
});

</script>
