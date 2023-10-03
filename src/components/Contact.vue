<template>
  <section class="bg-custom-blue-li">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div
          class="bg-custom-blue-li border-gray-200 rounded-lg p-8 md:p-12 justify-center"
        >
          <figure class="max-w-sm">
            <img
              class="h-auto max-w-full rounded-lg"
              src="/img/fotourl.jpg"
              alt="image description"
            />
          </figure>
        </div>
        <div class="bg-custom-blue-li border-gray-200 rounded-lg p-8 md:p-12">
          <h2 class="text-3xl font-bold mb-2 text-custom-text">Contáctanos</h2>

          <form @submit.prevent="submitForm">
            <div class="mb-6">
              <input
                type="text"
                id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nombre completo"
                v-model="formData.name"
                required
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Correo electrónico"
                v-model="formData.email"
                required
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Teléfono"
                v-model="formData.phone"
                required
              />
            </div>
            <div class="flex items-start mb-6">
              <input
                type="text"
                id="large-input"
                placeholder="Mensaje"
                v-model="formData.message"
                required
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Enviar
            </button>
            <div
              v-if="showAlert"
              class="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0"
            >
              <p>¡La información se ha enviado correctamente! Pronto nos contactaremos</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { dataApi } from "../config/api";
const showAlert = ref(false);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const submitForm = () => {
  axios
    .post(`${dataApi}/contact`, formData.value)
    .then((response) => {
      formData.value.name = "";
      formData.value.email = "";
      formData.value.phone = "";
      formData.value.message = "";
      showAlert.value = true;

      // Oculta automáticamente la alerta después de 5 segundos
      setTimeout(() => {
        showAlert.value = false;
      }, 5000);
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>
