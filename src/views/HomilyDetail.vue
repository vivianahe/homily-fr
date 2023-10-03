<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
import { dataApi } from "../config/api";
import { initFlowbite } from 'flowbite';

const route = useRoute();
const HomilyId = route.params.id;
const dataHomilyId = ref([]);
const getHomilyId = async () => {
  const { data } = await axios.get(`${dataApi}/homilies/${HomilyId}`);
  dataHomilyId.value = data;
};
const convertirFecha = (fecha) => {
  const fechaParts = fecha.split("-");
  const year = parseInt(fechaParts[0]);
  const month = parseInt(fechaParts[1]);
  const day = parseInt(fechaParts[2]);

  const meses = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];

  return `${day} ${meses[month - 1]}`;
};

onMounted(() => {
  getHomilyId();
  initFlowbite();
});
</script>

<template>
  <Header />
  <div class="flex items-center justify-center p-4">
    <div class="bg-gray-600 rounded-full w-32 h-32">
      <p class="text-3xl text-white font-semibold text-center mt-11">
        {{ dataHomilyId.date ? convertirFecha(dataHomilyId.date) : "" }}
        
      </p>
    </div>
    <blockquote class="text-lg italic font-semibold text-gray-900 ml-4">
      <p>
        {{ dataHomilyId.title }}
      </p>
    </blockquote>
  </div>

  <div class="flex justify-center items-center relative">
    <div class="relative z-10 mt-10 mb-10">
      <img
        class="rounded-sm w-[800px] h-[300px] object-cover"
        src="/img/cruz.jpg"
        alt="Imagen"
      />
    </div>

    <div
      class="absolute top-0 left-0 w-1/2 h-[400px] bg-gray-200 opacity-75"
    ></div>
  </div>

  <div
    class="flex flex-col md:flex-row md:items-center md:justify-center mt-8 mb-4"
  >
    <p class="text-2xl font-semibold">Homilía</p>
    <div class="my-2 md:my-0 md:mx-2"></div>
    <!-- Espacio vertical en pantallas pequeñas, espacio horizontal en pantallas medianas y grandes -->
    <audio controls>
      <source src="" type="audio/mpeg" />
      Tu navegador no admite el elemento de audio.
    </audio>
  </div>
  <hr />
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
    <p class="mb-3 text-lg text-black md:text-xl font-semibold">
      <i class="fa-solid fa-file-lines mr-3"></i> Evangelio
    </p>
    <p class="mb-3 text-lg text-black-50 md:text-xl">
      {{ dataHomilyId.reading }}
    </p>

    <p
      class="text-gray-500"
      v-html="dataHomilyId.gospel"
    ></p>
  </div>
  <hr />
  <br />
  <Footer />
</template>
