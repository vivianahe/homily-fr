<template>
    <!-- <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Acceda a su cuenta
                    </h1>
                    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span class="block sm:inline">{{ error }}</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                          <svg class="fill-current h-6 w-6 text-red-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="closeAlert">
                            <title>Cerrar</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                          </svg>
                        </span>
                    </div>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="login">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                                Correo electrónico
                            </label>
                            <input v-model="email" type="email" name="email" id="email" aria-label="Correo electrónico"
                                aria-describedby="email-help"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="name@company.com" required />
                            <div id="email-help" class="text-sm text-gray-500">
                                Ingresa tu correo electrónico
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                                Contraseña
                            </label>
                            <input v-model="password" type="password" name="password" id="password" aria-label="Contraseña"
                                aria-describedby="password-help" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required />
                            <div id="password-help" class="text-sm text-gray-500">
                                Ingresa tu contraseña.
                            </div>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section> -->
    <!-- component -->
    <div class="bg-gradient-to-b from-gray-600 to-gray-500 h-screen">
        <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
            <div class="flex flex-col sm:flex-row rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
                <div class="flex flex-col w-full md:w-1/2 p-4">
                    <div class="flex flex-col flex-1 justify-center mb-8">
                        <h1 class="text-2xl leading-tight tracking-tight text-gray-900 text-center font-thin">
                            Acceda a su cuenta
                        </h1>
    
                        <div class="w-full mt-2">
                        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span class="block sm:inline">{{ error }}</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                              <svg class="fill-current h-6 w-6 text-red-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="closeAlert">
                                <title>Cerrar</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                              </svg>
                            </span>
                        </div>
                        <form class="form-horizontal w-3/4 mx-auto" @submit.prevent="login">
                            <div class="py-4">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                                    Correo electrónico
                                </label>
                                <input v-model="email" type="email" name="email" id="email" aria-label="Correo electrónico"
                                    aria-describedby="email-help"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com" required />
                                <div id="email-help" class="text-sm text-gray-500">
                                    Ingresa tu correo electrónico
                                </div>
                            </div>
                            <div class="py-4">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                                    Contraseña
                                </label>
                                <input v-model="password" type="password" name="password" id="password" aria-label="Contraseña"
                                    aria-describedby="password-help" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required />
                                <div id="password-help" class="text-sm text-gray-500">
                                    Ingresa tu contraseña.
                                </div>
                            </div>
                            <div class="py-2">
                                <button type="submit"
                                class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Iniciar sesión
                                </button>
                            </div>
                      
                        </form>
                    </div>
                </div>
            </div>
            <div class="hidden md:block md:w-1/2 rounded-r-lg" style="background: url('/img/img_login.jpg'); background-size: cover; background-position: center center;"></div>         
        </div>
    </div>
</div>
</template>
  
<script setup>
import axios from 'axios';
import { dataApi } from "../config/api";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");
const closeAlert = () => {
  error.value = "";
};

const login = async () => {
  try {
    const formData = {
      email: email.value,
      password: password.value,
    };
    const response = await axios.post(`${dataApi}/login`, formData);

    // Si la autenticación es exitosa, almacenar el token en localStorage
    localStorage.setItem('authToken', response.data);// Supongo que response.data.token contiene el token
    localStorage.setItem('api_token', response.data.api_token);// Supongo que response.data.token contiene el token
    localStorage.setItem('nameUser',  response.data.name); 
    localStorage.setItem('emailUser', response.data.email);
    localStorage.setItem('user_id', response.data.user_id);

    // Redirigir al usuario al área de administración
    router.push({ name: 'homilyAllAdm' });
  } catch (e) {
    error.value = "Credenciales incorrectas. Por favor, inténtalo nuevamente.";
  }
};
</script>
  