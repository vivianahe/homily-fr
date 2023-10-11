<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="py-6 px-4 bg-gray-900 w-full">
      <label for="table-search" class="sr-only">Buscar</label>
      <div class="relative mt-1">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 pl-10 text-sm border rounded-lg w-80 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Buscar"
        />
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-300">
        <thead class="text-sm uppercase bg-gray-700">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              scope="col"
              class="px-6 py-3"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr
            v-for="dataHomi in dataHomilies"
            :key="dataHomi.id"
            class="bg-white hover-bg-gray-200 border border-b-gray-200"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              class="px-4 py-4"
            >
              <template v-if="column.key === 'options'">
                <td class="py-1 flex">
                  <button
                    type="button"
                    class="flex items-center focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    <i class="fa-solid fa-circle-info mr-2"></i>
                    Ver Detalle
                  </button>
                  <button
                    type="button"
                    @click="$emit('editar', dataHomi.id)"
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    class="flex items-center focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-green-600 hover:bg-green-700 focus:ring-green-800"
                  >
                    <i class="fa-solid fa-pen-to-square mr-2"></i>
                    Editar
                  </button>
                  <button
                    type="button"
                    class="flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    <i class="fa-solid fa-trash-can mr-2"></i>
                    Eliminar
                  </button>
                </td>
              </template>
              <template v-else>
                {{ dataHomi[column.key] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav
      class="flex items-center justify-between mt-5 p-4"
      aria-label="Table navigation"
    >
      <span class="text-md font-normal"
        >Mostrando <span class="font-semibold text-gray-900">1-10</span> of
        <span class="font-semibold text-gray-900">1000</span></span
      >
      <ul class="inline-flex -space-x-px text-md h-8">
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 border rounded-l-lg bg-gray-800 border-gray-700 hover:text-white"
            >Anterior</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border bg-gray-800 border-gray-700 hover:text-white"
            >1</a
          >
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border bg-gray-800 border-gray-700 hover:text-white"
            >2</a
          >
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="flex items-center justify-center px-3 h-8 border hover:bg-gray-800 hover:text-white border-gray-700 bg-gray-700 text-white"
            >3</a
          >
        </li>

        <li>
          <a
            href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border rounded-r-lg bg-gray-800 border-gray-700 hover:text-white"
            >Siguiente</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  dataHomilies: Array, // Tus datos
  columns: Array, // Configuración de columnas
});
defineEmits(["editar"]);
</script>
