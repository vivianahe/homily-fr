<template>
  <form class="" @submit.prevent="submitForm">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900">Fecha oración</label>
        <input type="date" id="date"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="prayer.date" />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label for="citation" class="block mb-2 text-sm font-medium text-gray-900">Link</label>
        <input type="text" id="citation"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="prayer.link" />
      </div>
    </div>
    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
      <button v-if="loader" type="submit"
        class="uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
        Agregar
      </button>
      <button v-else disabled type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
        <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor" />
        </svg>
        Guardando...
      </button>
      <button data-modal-hide="defaultModal" type="button" @click="$emit('closeMod'), clearFrm()"
        class="uppercase text-gray-800 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
        Cancelar
      </button>
    </div>
  </form>
</template>

<script setup>
import axios from "axios";
import { dataApi } from "@/config/api";
import { ref } from "vue";
const user_id = localStorage.getItem("user_id");
const loader = ref(true);
const emit = defineEmits(["closeMod", "getData"]);
const { data } = defineProps({
  data: {
    Object: true,
  },
});

const prayer = ref({
  id: null,
  date: "",
  link: "",
  user_id: user_id ? user_id : null,
});

const submitForm = () => {
  const authToken = localStorage.getItem("api_token");

  // Verificar si se ha encontrado el token
  if (!authToken) {
    console.error("Token de autorización no encontrado");
    return;
  }

  // Configurar las cabeceras de la solicitud
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  loader.value = false;
  axios
    .post(`${dataApi}/prayers`, prayer.value, config)
    .then((response) => {
      if (response.data.message === "Oración guardada exitosamente!") {
        clearFrm();
        Swal.fire("Correcto!", response.data.message, "success");
        emit("closeMod"); // Cerrar el modal
        emit("getData");
        loader.value = true;
      } else {
        loader.value = true;
        Swal.fire(
          "Atención!",
          response.data.message + prayer.value.date,
          "warning"
        );
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
const clearFrm = () => {
  prayer.value.id = "";
  prayer.value.date = "";
  prayer.value.link = "";
};
</script>
