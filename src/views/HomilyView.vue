<script setup>
import { onMounted, ref} from 'vue';
import Header from '../components/Header.vue';
import Carousel from '../components/Carousel.vue';
import HomilyDay from '../components/HomilyDay.vue';
import Priest from '../components/Priest.vue';
import Footer from '../components/Footer.vue';
import Contact from '../components/Contact.vue';
import axios from 'axios';
import { dataApi } from "../config/api";

const dataHomilies=ref([]);

const getDataHomilies = async ()=>{
    const {data} = await axios.get(`${dataApi}/homilies`);
    dataHomilies.value=data
}
onMounted(() => {
    getDataHomilies()
});


</script>


<template>
    <Header/>
    <carousel/>
    <HomilyDay/>
    <Priest/>
    <Contact/>
    <Footer/>
    <!--div v-for="homi in dataHomilies" :key="homi.id" class="container mx-auto">
        <p>{{ homi.date }}</p>
    </div>-->
</template>
