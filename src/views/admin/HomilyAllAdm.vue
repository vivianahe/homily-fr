<template>
  <div class="flex justify-between p-5">
    <div class="text-start">
      <p class="font-semibold text-xl">Homilías</p>
    </div>
    <div class="text-end">
      <button
        class="bg-sky-500 hover:bg-sky-600 text-gray-800 py-2 px-4 rounded inline-flex items-center"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        @click="agregar"
      >
        <i class="fa-solid fa-circle-plus text-white"></i>
        <span class="text-white">Agregar</span>
      </button>
    </div>
  </div>

  <Table
    :dataHomilies="dataHomilies"
    :columns="columnConfig"
    @editar="editar"
  />
  <ModalVue :dataForm="dataForm" />
</template>

<script setup>
import { onMounted, ref, reactive, markRaw } from "vue";
import Table from "../../components/Admin/Table.vue";
import { initFlowbite } from "flowbite";
import ModalVue from "../../components/Admin/Modal.vue";
import axios from "axios";
import { dataApi } from "../../config/api";
import FormularioAgregar from "@/components/Admin/Homilia/FormularioAgregar.vue";
import FormularioEditar from "@/components/Admin/Homilia/FormularioEditar.vue";

const openModal = ref(null);
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

const editar = (id = null) => {
  dataForm.componet = markRaw(FormularioEditar);
  dataForm.nameModal = "Editar Homilias";
  openModal.value.click();
};
const agregar = () => {
  dataForm.componet = markRaw(FormularioAgregar); // Marcar el nuevo componente como no reactivo
  dataForm.nameModal = "Agregar Homilias";
};
const columnConfig = [
  { key: "date", label: "Fecha de evangelio" },
  { key: "citation", label: "Cita Bíblica" },
  { key: "title", label: "Título" },
  { key: "reading", label: "Lectura" },
  { key: "options", label: "Opciones" },
];

onMounted(() => {
  initFlowbite();
  getDataHomilies();
});
</script>
