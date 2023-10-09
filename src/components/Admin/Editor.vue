<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @input="mostrarContenidoEditor"></ckeditor>
  </div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ref } from 'vue';

const editorData = ref('');
const editor = ClassicEditor;
const editorConfig = {};
const emit = defineEmits(['editor-data']);
const mostrarContenidoEditor = () => {
  emit('editor-data', editorData.value);
}

</script>
