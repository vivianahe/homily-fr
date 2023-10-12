<template>
  <form class="" @submit.prevent="submitForm">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900"
          >Fecha oración</label
        >
        <input
          type="date"
          id="date"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          v-model="prayer.date"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          for="citation"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Link</label
        >
        <input
          type="text"
          id="citation"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          v-model="prayer.link"
        />
      </div>
    </div>

    <div
      class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b"
    >
      <button
        type="submit"
        class="uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Agregar
      </button>
      <button
        data-modal-hide="defaultModal"
        type="button"
        @click="$emit('closeMod')"
        class="uppercase text-gray-800 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>

<script setup>
import axios from "axios";
import { dataApi } from "@/config/api";
import { ref, watch  } from "vue";
const user_id = localStorage.getItem("user_id");

const emit = defineEmits(["closeMod"]);
const props = defineProps({
  data: {
    Object: true,
  },
});

watch(() => props.data, (newData, oldData) => {
      if (newData) {
        console.log("if");
        prayer.value.id = newData.id;
        prayer.value.date = newData.date;
        prayer.value.link = newData.link;
      } else {
        console.log("else");
        prayer.value.id = null,
        prayer.value.date = "";
        prayer.value.link = "";
      }
    });

const prayer = ref({
  id: null,
  date: "",
  link: "",
  user_id: user_id ? user_id : null,
});
const submitForm = () => {
  axios
    .post(`${dataApi}/prayers`, prayer.value)
    .then((response) => {
      if (response.data.message === "Oración guardada exitosamente!") {
        prayer.value.id = "";
        prayer.value.date = "";
        prayer.value.link = "";
        Swal.fire("Correcto!", response.data.message, "success");
        emit("closeMod");
      } else {
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
</script>
