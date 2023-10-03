
<script setup>
import Editor from './Editor.vue';
</script>

<template>
  <form class="">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900"
          >Fecha Homilia</label
        >
        <input
          type="date"
          id="date"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          for="citation"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Cita</label
        >
        <input
          type="text"
          id="citation"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900"
          >Título</label
        >
        <input
          type="text"
          id="title"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          for="reading"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Lectura</label
        >
        <input
          type="text"
          id="reading"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
    </div>
    <div class="mb-6">
      <label for="gospel" class="block mb-2 text-sm font-medium text-gray-900"
        >Evangelio</label
      >
      <Editor/>
    </div>
    <div class="mb-6">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
    <div class="mb-6">
      <label for="audio" class="block mb-2 text-sm font-medium text-gray-900"
        >Audio</label
      >
      <div class="relative">
        <label title="Click to upload" for="button2" class="cursor-pointer flex items-center gap-4 px-6 py-4 
        before:border-gray-400/60 hover:before:border-gray-300 group  
         before:bg-gray-100  before:absolute 
        before:inset-0 before:rounded-3xl before:border before:border-dashed">
          <div class="w-max relative">
              <img class="w-12" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon" width="512" height="512">
          </div>
          <div class="relative">
              <span class="block text-base font-semibold relative text-gray-700">
                  Subir audio
              </span>
          </div>
         </label>
        <input hidden="" type="file" name="button2" id="button2">
    </div>
    </div>
    <div
    class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b "
  >
        <button
        type="submit"
        class="uppercase  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Agregar
      </button>
      <button
      data-modal-hide="defaultModal"
      type="button"
      class="uppercase text-gray-800 bg-gray-100  hover:bg-gray-200  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Cancelar
    </button>
    </div>

  </form>
</template>

