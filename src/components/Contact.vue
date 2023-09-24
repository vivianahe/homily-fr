<template>
  <section class="bg-custom-blue-li">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div
          class="bg-custom-blue-li border-gray-200 rounded-lg p-8 md:p-12 justify-center"
        >
          <figure class="max-w-sm">
            <img
              class="h-auto max-w-full rounded-lg"
              src="/img/fotourl.jpg"
              alt="image description"
            />
          </figure>
        </div>
        <div
          class="bg-custom-blue-li border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
        >
          <h2 class="text-3xl font-bold mb-2 text-custom-text">Contáctanos</h2>

          <form>
            <div class="mb-6">
              <input
                type="text"
                id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Teléfono"
                required
              />
            </div>
            <div class="flex items-start mb-6">
              <input
                type="text"
                id="large-input"
                placeholder="Mensaje"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
