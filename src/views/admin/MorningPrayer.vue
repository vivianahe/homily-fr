<template>
    <div>
        <p>ESTE ES ROACION DE LA MAÑANA</p>
    </div>
    <div class="text-end p-5">
    <button
      class="bg-sky-500 hover:bg-sky-600 text-gray-800 py-2 px-4 rounded inline-flex items-center"
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";


onMounted(() => {
  initFlowbite();
});
</script>
