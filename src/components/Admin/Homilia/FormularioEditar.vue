<script setup>
import Editor from "../Editor.vue";
import { ref, reactive, computed } from "vue";
import Alerta from "../Alerta.vue";
import axios from "axios";
import { dataApi } from "@/config/api";

const user_id = localStorage.getItem("user_id");
const selectedImage = ref(null)
const audioFile = ref(null);
const audioPlayer = ref(null);

const homilia = ref({
  id: null,
  date: "",
  citation: "",
  title: "",
  reading: "",
  gospel: "",
  img: null,
  audio: null,
  user_id: user_id ? user_id : null,
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
      // Hacer algo con la respuesta si es necesario
    })
    .catch((error) => {
      console.error(error);
    });
};


// const validar = () => {
//   if (Object.values(homilia).includes("")) {
//     alerta.mensaje = "Todos los campos son obligatorios";
//     alerta.tipo = "error";
//     return;
//   }
//   // emit('guardar-paciente');
//   // alerta.mensaje="Paciente almacenado correctamente";
//   // alerta.tipo="exito";

//   // setTimeout(()=>{
//   //     Object.assign(alerta,{
//   //         tipo: '',
//   //         mensaje: ''
//   //     })
//   // },3000)
// };



// const submit = handleSubmit(async (values) => {

//   console.log(values);
//   console.log("karenn");

// // const { imagen, ...propiedad } = values;
// // const docRef = await addDoc(collection(db, "propiedades"), {
// //     ...propiedad,
// //     imagen:url.value,
// //     ubicacion:center.value
// // });
// // if (docRef.id) {
// //     router.push({ name: 'admin-propiedades' })
// // }
// })
</script>

<template>
  <form class="" @submit.prevent="submit">
    <p>holaa</p>
  </form>
</template>
