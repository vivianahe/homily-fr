<script setup>
import Header from "../components/Header.vue";
import Carousel from "../components/Carousel.vue";
import HomilyDay from "../components/HomilyDay.vue";
import Priest from "../components/Priest.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <Header />
  <carousel />
  <HomilyDay/>
  <Priest />
  <Contact id="contacto"/>
  <Footer />
</template>
