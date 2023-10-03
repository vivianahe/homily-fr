<template>
  <Header />
  <Calendar />
  <div
    class="flex justify-center items-center"
    v-for="homilies in dataHomilies"
    :key="homilies.id"
  >
    <a
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
  <nav aria-label="Page navigation example" >
    <ul class="flex items-center justify-center -space-x-px h-8 text-sm mb-4">
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >1</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >2</a
        >
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >3</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >4</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >5</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Next</span>
          <svg
            class="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
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
