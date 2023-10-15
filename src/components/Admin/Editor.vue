<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @input="mostrarContenidoEditor"></ckeditor>
  </div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ref, onMounted } from 'vue';

const props = defineProps({
  dataUpdate: {
    type: String
  }
})
const editorData = ref('');
onMounted(() => {
  if (props.dataUpdate) {
    editorData.value = props.dataUpdate;
  }
})

const editor = ClassicEditor;
const editorConfig = {};
const emit = defineEmits(['editor-data']);
const mostrarContenidoEditor = () => {
  emit('editor-data', editorData.value);
}

</script>
