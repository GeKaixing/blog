<script setup>
import {useRoute} from 'vue-router';
import {marked} from 'marked';
import { onMounted,ref } from 'vue';
const route =useRoute()
const htmlContent =ref(null)
marked.setOptions({
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
})
onMounted( async()=>{
    const response = await fetch(`/${route.params.id}.md`);
    const markdown = await response.text();
     const htmlContents= marked(markdown);
     htmlContent.value.innerHTML=htmlContents
})  


</script>
<template>
    <div ref="htmlContent"></div>
</template>
<style></style>