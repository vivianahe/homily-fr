<template>
  <div class="flex justify-between p-5">
    <div class="text-start">
      <p class="font-semibold text-xl">Oración de la mañana</p>
    </div>
    <div class="text-end">
      <button
        class="bg-sky-500 hover:bg-sky-600 text-gray-800 py-2 px-4 rounded inline-flex items-center"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        @click="agregar"
      >
        <i class="fa-solid fa-circle-plus text-white"></i>
        <span class="text-white"> Agregar</span>
      </button>
    </div>
  </div>

  <Table
    :dataHomilies="dataPrayerDesc"
    @editar="editar"
    :columns="columnConfig"
  />
  <ModalVue :dataForm="dataForm" />
</template>

<script setup>
import { onMounted, ref, reactive, markRaw } from "vue";
import { initFlowbite } from "flowbite";
import Table from "../../components/Admin/Table.vue";
import ModalVue from "../../components/Admin/Modal.vue";
import axios from "axios";
import { dataApi } from "../../config/api";
import FrmAgregar from "@/components/Admin/Oracion/FrmAgregar.vue";
const columnConfig = ref([
  { key: "date", label: "Fecha oración" },
  { key: "link", label: "Link" },
  { key: "options", label: "Opciones" },
]);
const dataForm = reactive({});
const agregar = () => {
  dataForm.componet = markRaw(FrmAgregar); // Marcar el nuevo componente como no reactivo
  dataForm.nameModal = "Agregar oración del día";
};
const editar = (id = null) => {
  dataForm.componet = markRaw(FrmAgregar);
  dataForm.nameModal = "Editar oración del día";
  const modal = document.getElementById("defaultModal");
  modal.style.display = "block";
};
const dataPrayerDesc = ref([]);
const getPrayerDesc = async () => {
  const { data } = await axios.get(`${dataApi}/prayers`);
  dataPrayerDesc.value = data;
};
onMounted(() => {
  initFlowbite();
  getPrayerDesc();
});
</script>
