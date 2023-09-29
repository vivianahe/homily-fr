
<script setup>

</script>

<template>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-6">
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 ">Fecha Homilia</label>
            <input type="date" id="date"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required>
        </div>
        <div class="mb-6">
            <label for="citation" class="block mb-2 text-sm font-medium text-gray-900 ">Cita</label>
            <input type="text" id="citation"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required>
        </div>
        <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Título</label>
            <input type="text" id="title"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required>
        </div>
        <div class="mb-6">
            <label for="reading" class="block mb-2 text-sm font-medium text-gray-900 ">Lectura</label>
            <input type="text" id="reading"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required>
        </div>
        <div class="mb-6">
            <label for="gospel" class="block mb-2 text-sm font-medium text-gray-900 ">Evangelio</label>
            <input type="text" id="gospel"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required>
        </div>
        <div class="mb-6">
            <label for="img" class="block mb-2 text-sm font-medium text-gray-900 ">Imagen</label>
            <input type="text" id="img"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required>
        </div>
        <div class="mb-6">
            <label for="audio" class="block mb-2 text-sm font-medium text-gray-900 ">Audio</label>
            <input type="text" id="audio"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required>
        </div>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Agrear</button>
    </form>
</template>

