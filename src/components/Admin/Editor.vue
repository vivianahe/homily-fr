<template>
  <div>
    <ckeditor :editor="editor" :data="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editor = ClassicEditor;
const editorData = '<p>Content of the editor.</p>';
const editorConfig = {
  // La configuración del editor.
};
</script>