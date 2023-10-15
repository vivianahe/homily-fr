<script setup>
import Editor from "../Editor.vue";
import { ref, reactive, computed, onMounted } from "vue";
import Alerta from "../Alerta.vue";
import axios from "axios";
import { dataApi } from "@/config/api";

const user_id = localStorage.getItem("user_id");
const emit = defineEmits(["closeMod"]);
const selectedImage = ref(null)
const audioFile = ref(null);
const audioPlayer = ref(null);

const { data } = defineProps({
  data: {
    Object: true,
  },
});
const homilia = ref({
  id: data ? (data.id || null) : null,
  date: data ? (data.date || "") : "",
  citation: data ? (data.citation || "") : "",
  title: data ? (data.title || "") : "",
  reading: data ? (data.reading || "") : "",
  gospel: data ? (data.gospel || "") : "",
  img: data ? (data.img || "") : "",
  audio: data ? (data.audio || "") : "",
  user_id: user_id
});

const alerta = reactive({
  tipo: "",
  mensaje: "",
});
const handleFileChange = (event) => {
  // Cuando se selecciona un archivo, actualiza la propiedad 'img' con el objeto File
  homilia.value.img = event.target.files[0];
  const file = event.target.files[0];
  if (file) {
    // Crear una URL temporal para la imagen seleccionada
    selectedImage.value = URL.createObjectURL(file);
  }
};
const handleAudioChange = (event) => {
  homilia.value.audio = event.target.files[0];
  audioFile.value = event.target.files[0];
  playAudio();
};

const playAudio = () => {
  if (audioFile.value && audioPlayer.value) {
    audioPlayer.value.src = URL.createObjectURL(audioFile.value);
    audioPlayer.value.play(); // Iniciar la reproducción
  }
};
const shouldShowAudio = computed(() => !!audioFile.value);


const editorData = (text = "") => {
  //Texto del editor
  homilia.value.gospel = text;
}

const submit = () => {
  // Crear un objeto FormData para manejar la solicitud
  const formData = new FormData();
  formData.append("date", homilia.value.date);
  formData.append("citation", homilia.value.citation);
  formData.append("title", homilia.value.title);
  formData.append("reading", homilia.value.reading);
  formData.append("gospel", homilia.value.gospel);
  formData.append("img", homilia.value.img);
  formData.append("audio", homilia.value.audio);
  formData.append("user_id", homilia.value.user_id);

  // Obtener el token de autorización del almacenamiento local
  const authToken = localStorage.getItem("api_token");

  // Verificar si se ha encontrado el token
  if (!authToken) {
    console.error("Token de autorización no encontrado");
    return;
  }

  // Configurar las cabeceras de la solicitud
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${authToken}`,
    },
  };

  axios
    .post(`${dataApi}/addHomilies`, formData, config)
    .then((response) => {
      Swal.fire("Correcto!", response.data.message, "success");
      emit("closeMod");
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  if (data.img) {
    homilia.value.img = data.img
    selectedImage.value = 'http://127.0.0.1:8000/support/imgHomily/'+data.img;
  }
  if(data.audio){
    console.log("audio");
  }
})
</script>

<template>
  <form class="" @submit.prevent="submit">
    <Alerta v-if="alerta.mensaje" :alerta="alerta" />
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900">Fecha Homilia</label>
        <input type="date" id="date"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="homilia.date" />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label for="citation" class="block mb-2 text-sm font-medium text-gray-900">Cita Bíblica</label>
        <input type="text" id="citation"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="homilia.citation" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Título</label>
        <input type="text" id="title"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="homilia.title" />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label for="reading" class="block mb-2 text-sm font-medium text-gray-900">Lectura</label>
        <input type="text" id="reading"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required v-model="homilia.reading" />
      </div>
    </div>
    <div class="mb-6">
      <label for="gospel" class="block mb-2 text-sm font-medium text-gray-900">Evangelio</label>
      <Editor @editor-data="editorData" :dataUpdate="data.gospel" />
    </div>
    <div class="mb-6">
      <label for="gospel" class="block mb-2 text-sm font-medium text-gray-900">Imagen</label>
      <div v-if="selectedImage" class="flex justify-center">
        <img :src="selectedImage" alt="Imagen seleccionada"
          class="max-w-full h-auto rounded border bg-white p-1 object-cover" />
      </div>

      <label v-else for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p class="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" v-on:change="handleFileChange" />
      </label>
    </div>
    <div class="mb-6">
      <label for="audio" class="block mb-2 text-sm font-medium text-gray-900">Audio</label>
      <div v-if="shouldShowAudio">
        <audio ref="audioPlayer" controls>
          Tu navegador no soporta la reproducción de audio.
        </audio>
      </div>
      <div v-else class="relative">
        <label title="Click to upload" for="button2"
          class="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed">
          <div class="w-max relative">
            <img class="w-12" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon"
              width="300" height="300" />
          </div>
          <div class="relative">
            <span class="block text-base font-semibold relative text-gray-700">
              Subir audio
            </span>
          </div>
        </label>
        <input hidden="" type="file" name="button2" id="button2" v-on:change="handleAudioChange" />
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
