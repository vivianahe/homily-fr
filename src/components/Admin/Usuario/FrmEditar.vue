<template>
  <form class="" @submit.prevent="submitForm">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900">Nombre:</label>
        <input type="text"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="user.name" />
      </div>
      <div class="w-full mt-3 px-3">
        <label class="block mb-2 text-sm font-medium text-gray-900">Correo electrónico:</label>
        <input type="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="user.email" />
      </div>
      <div class="w-full mt-3 px-3">
        <label class="block mb-2 text-sm font-medium text-gray-900">Contraseña:{{ data }}</label>
        <input type="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="user.password" />
      </div>
    </div>

    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
      <button type="submit"
        class="uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
        Agregar
      </button>
      <button data-modal-hide="defaultModal" type="button" @click="$emit('closeMod')"
        class="uppercase text-gray-800 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">
        Cancelar
      </button>
    </div>
  </form>
</template>

<script setup>
import axios from "axios";
import { dataApi } from "@/config/api";
import { ref, watch, defineProps } from "vue";
const user_id = localStorage.getItem("user_id");

const emit = defineEmits(["closeMod"]);
const { data } = defineProps({
  data: {
    type: Object, // Cambia "Object" por "type: Object"
  },
});

const id = ref(null);
const user = ref([]);

const getUserId = async () => {
  id.value = data;
  const response = await axios.get(`${dataApi}/users/${id.value}`); // Utiliza id.value en lugar de id
  user.value = response.data; // Almacena los datos en user.value
};

// Llama a getUserId cuando el componente se monta
getUserId();

const submitForm = () => {
  const id = user.value.id;
  axios
    .put(`${dataApi}/users/${id}`, user.value)
    .then((response) => {
      if (response.data.message === "Usuario actualizado exitosamente!") {
        user.value.id = "";
        user.value.name = "";
        user.value.email = "";
        user.value.password = "";
        Swal.fire("Correcto!", response.data.message, "success");
        emit("closeMod");
        emit("getUsers");
      } else {
        Swal.fire("Atención!", response.data.message, "warning");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
// Observa cambios en la propiedad "data" y llama a getUserId cuando cambia
watch(data, (newData) => {
  getUserId();
});

// Llama a getUserId cuando el componente se monta
onMounted(() => {
  getUserId();
});

</script>
