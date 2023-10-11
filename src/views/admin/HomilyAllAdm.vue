<template>
  <div class="text-end p-5">
    <button
      class="bg-sky-500 hover:bg-sky-600 text-gray-800 py-2 px-4 rounded inline-flex items-center"
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      @click="agregar"
    >
      <svg
        class="w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0-13.3-10.7-24-24-24s-24-10.7-24-24z"
          fill="white"
        />
      </svg>
      <span class="text-white">Agregar</span>
    </button>
    <button
      ref="openModal"
      class="hideen"
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
    ></button>
  </div>
  <Table :dataHomilies="dataHomilies" @editar="editar" />
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

onMounted(() => {
  initFlowbite();
  getDataHomilies();
});
</script>

