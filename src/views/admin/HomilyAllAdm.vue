<template>
  <div class="flex justify-between p-5">
    <div class="text-start">
      <p class="font-semibold text-xl">Homilías</p>
    </div>
    <div class="text-end">
      <RouterLink :to="{ name: 'HomilyAddView' }"
        class="bg-sky-500 hover:bg-sky-600 text-gray-800 py-2 px-4 rounded inline-flex items-center" title="Ver más">
        <i class="fa-solid fa-circle-plus text-white"></i>
        <span class="text-white">Agregar</span>
      </RouterLink>
    </div>
  </div>

  <Table :dataHomilies="dataHomilies" :columns="columnConfig" @editar="editar" @datelle="datelle" @eliminar="eliminar" />
  
</template>

<script setup>
import { onMounted, ref, reactive, markRaw } from "vue";
import Table from "../../components/Admin/Table.vue";
import { initFlowbite } from "flowbite";
import axios from "axios";
import { dataApi } from "../../config/api";
import FormularioAgregar from "@/components/Admin/Homilia/FormularioAgregar.vue";
import FormularioEditar from "@/components/Admin/Homilia/FormularioEditar.vue";
import FormularioDetalle from "@/components/Admin/Homilia/FormularioDetalle.vue";

const dataHomilies = ref([]);
const dataForm = reactive({});
const getDataHomilies = async () => {
  const authToken = localStorage.getItem("api_token");
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  try {
    const { data } = await axios.get(`${dataApi}/getHomilies`, axiosConfig);
    dataHomilies.value = data;
  } catch (error) {
    console.error("Error al obtener los datos de Homilies:", error);
  }
};
const agregar = () => {
  router.push({ name: 'addHomily' });
};
const columnConfig = [
  { key: "date", label: "Fecha de evangelio" },
  { key: "citation", label: "Cita Bíblica" },
  { key: "title", label: "Título" },
  { key: "reading", label: "Lectura" },
  { key: "options", label: "Opciones" },
];
const editar = async (id = null) => {
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
      Authorization: `Bearer ${authToken}`,
    },
  };

  axios
    .get(`${dataApi}/getHomeliasId/${id}`, config) // Utilizar GET para obtener detalles del homilía
    .then((response) => {
      dataForm.componet = markRaw(FormularioEditar);
      dataForm.nameModal = "Editar Homilía";
      dataForm.data = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const datelle = async (id = null) => {
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
      Authorization: `Bearer ${authToken}`,
    },
  };

  const { data } = await axios.get(`${dataApi}/getHomilies/${id}`, config);
  if (data) {
    dataForm.componet = markRaw(FormularioDetalle);
    dataForm.nameModal = "Detalle homilía";
    dataForm.data = data;
  }
};


const eliminar = async (id = null) => {
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
      Authorization: `Bearer ${authToken}`,
    },
  };

  const { data } = await axios.delete(`${dataApi}/getHomilies/${id}`, config);
  if (data) {
    if (data.data === "ok") {
      Swal.fire("Correcto!", data.message, "success");
      getDataHomilies();
    } else {
      Swal.fire("Atención!", response.data.message, "warning");
    }
  }
};

onMounted(() => {
  initFlowbite();
  getDataHomilies();
});
</script>
