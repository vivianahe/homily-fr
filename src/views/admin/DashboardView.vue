<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import { RouterView,useRouter } from "vue-router";

const router = useRouter();

const confirmarLogOut = () => {
  Swal.fire({
    title: '¿Estás seguro de cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, salir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      LogOut();
    }
  })
}

const LogOut = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("api_token");
  localStorage.removeItem("nameUser");
  localStorage.removeItem("emailUser");
  localStorage.removeItem("user_id");
  router.push({ name: 'login' });
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
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <a href="https://flowbite.com" class="flex ml-2 md:mr-24">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">Homilías Uriel</span>
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <p class="text-md text-white font-bold px-2" role="none">
              {{ nameUser }}
            </p>
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-700"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-10 h-10 rounded-full" src="/img/user.png" />
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-gray-800 divide-y divide-gray-100 rounded shadow"
              id="dropdown-user">
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
                  <RouterLink :to="{ name: 'homilyAllAdm' }"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700" role="menuitem">
                    Homilías
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'prayerView' }"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700" role="menuitem">
                    Oración de la mañana
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'userView' }"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700" role="menuitem">
                    Usuarios
                  </RouterLink>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700"
                    role="menuitem" @click="confirmarLogOut">Cerrar Sesión</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 
    h-screen pt-20 transition-transform -translate-x-full 
    border-r sm:translate-x-0 bg-gray-800 border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li class="hover:text-gray-900">
          <RouterLink :to="{ name: 'homilyAllAdm' }"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
            <i class="fas fa-bible text-gray-500 group-hover:text-white"></i>
            <span class="ml-3">Homilías</span>
          </RouterLink>
        </li>
        <li class="text-white hover:text-gray-900">
          <RouterLink :to="{ name: 'prayerView' }"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
            <i class="fas fa-praying-hands text-gray-500 group-hover:text-white"></i>
            <span class="ml-3">Oración de la mañana</span>
          </RouterLink>
        </li>
        <li class="text-white hover:text-gray-900">
          <RouterLink :to="{ name: 'userView' }"
            class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
            <i class="fas fa-user-friends text-gray-500 group-hover:text-white"></i>
            <span class="ml-3">Usuarios</span>
          </RouterLink>
        </li>
        <li @click="confirmarLogOut">
          <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
            <i class="fa-solid fa-arrow-right-from-bracket text-gray-500 group-hover:text-white"></i>
            <span class="ml-3">Cerrar Sesión</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64 mt-16">
    <RouterView />
  </div>
</template>
