<script setup>
import { onMounted, ref } from "vue";
import Table from "../../components/Admin/Table.vue";
import { initFlowbite } from "flowbite";
import ModalVue from "../../components/Admin/Modal.vue";
import MorningPrayer from "./MorningPrayer.vue";

const LogOut = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("api_token");
  localStorage.removeItem("nameUser");
  localStorage.removeItem("emailUser");
  localStorage.removeItem("user_id");
};
onMounted(() => {
  initFlowbite();
});

const nameUser = ref(localStorage.getItem("nameUser"));
const emailUser = ref(localStorage.getItem("emailUser"));
</script>
<template>
  <nav class="fixed top-0 z-50 w-full bg-gray-800 border-b border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white"
              >Homilías</span
            >
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <p class="text-md text-white font-bold px-2" role="none">
              {{ nameUser }}
            </p>
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-700"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img class="w-10 h-10 rounded-full" src="/img/user.png" />
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-gray-800 divide-y divide-gray-100 rounded shadow"
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-white" role="none">
                  {{ nameUser }}
                </p>
                <p class="text-sm font-medium text-white truncate" role="none">
                  {{ emailUser }}
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700"
                    role="menuitem"
                    >Homilías</a
                  >
                </li>
                <li>
                  <a
                    href="/prayerView"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700"
                    role="menuitem"
                    >Oración de la mañana
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700"
                    role="menuitem"
                    @click="LogOut"
                    >Cerrar Sesión</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r bg-gray-800 border-b border-gray-700 sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group hover:text-gray-900"
          >
            <svg
              class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span class="ml-3 text-white hover:text-gray-900">Homilías</span>
          </a>
        </li>
        <li>
          <a
            href="/prayerView"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group hover:text-gray-900"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
              />
            </svg>
            <span
              class="flex-1 ml-3 whitespace-nowrap text-white hover:text-gray-900"
              >Oración de la mañana</span
            >
          </a>
        </li>
        <li @click="LogOut">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group hover:text-gray-900"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
            <span
              class="flex-1 ml-3 whitespace-nowrap text-white hover:text-gray-900"
              >Cerrar Sesión</span
            >
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64 mt-16">
    <!-- <div class="text-end p-5">
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
    <Table />
    <ModalVue /> -->
    <MorningPrayer/>
  </div>
</template>
