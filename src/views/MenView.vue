<script setup lang="ts">
import { ref } from 'vue'
const markdown = import.meta.glob('/src/markdown/*.md')
const blog = ref<string[]>([])
Object.keys(markdown).forEach((item) => {
  blog.value.push(item.split('/')[3].split('.md')[0])
})
</script>
<template>
    <ul class="absolute -translate-x-1/2 left-1/2 ">
    <li class="gap-10 dark:text-white" v-for="(item, index) in blog" :key="index" >
      <router-link :to="`/blog/${item}`"> {{ item }}</router-link>
    </li>
  </ul>
</template>
<style scoped></style>
