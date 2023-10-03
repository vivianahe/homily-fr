<template>
  <Header />
  <Calendar />
  <div
    class="flex justify-center items-center"
    v-for="homilies in dataHomilies"
    :key="homilies.id"
  >
    <a
      href="#"
      class="flex flex-col items-center bg-white border-gray-200 rounded-lg md:flex-row md:max-w-4xl"
    >
      <img
        class="object-cover w-full rounded h-96 md:h-auto md:w-48 md:rounded"
        src="/img/cruz.jpg"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {{ homilies.date ? convertirFecha(homilies.date) : "" }}
        </h5>
        <p class="mb-3 font-normal text-custom-text">{{ homilies.citation }}</p>
        <p class="mb-3 font-semibold italic text-gray-700">
          {{ homilies.title }}
        </p>
        <p class="mb-3 font-normal text-gray-700">
          {{ homilies.reading }}
        </p>
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <audio controls>
          <source src="" type="audio/mpeg" />
          Tu navegador no admite el elemento de audio.
        </audio>
        <RouterLink
          :to="{ name: 'homilyDetail', params: { id: homilies.id } }"
          type="button"
          class="mt-3 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          Ver 
        </RouterLink>
      </div>
    </a>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { dataApi } from "../config/api";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Calendar from "../components/Calendar.vue";
import { initFlowbite } from "flowbite";

const dataHomilies = ref([]);

const convertirFecha = (fecha) => {
  const fechaParts = fecha.split("-");
  const year = parseInt(fechaParts[0]);
  const month = parseInt(fechaParts[1]);
  const day = parseInt(fechaParts[2]);

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  return `${day} de ${meses[month - 1]} de ${year}`;
};

const getDataHomilies = async () => {
  const { data } = await axios.get(`${dataApi}/homilies`);
  dataHomilies.value = data;
};

onMounted(() => {
  getDataHomilies();
  initFlowbite();
});
</script>
