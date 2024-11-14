<script setup lang="ts">
import { ref } from 'vue'
const markdown = import.meta.glob('../../public/markdown/*.md')
console.log(markdown)
const blog = ref<string[]>([])
Object.keys(markdown).forEach((item) => {
  blog.value.push(item.split('/')[4].split('.md')[0])
})
console.log(blog.value)
</script>
<template>
    <ul class="absolute -translate-x-1/2 left-1/2 ">
    <li class="gap-10 dark:text-white" v-for="(item, index) in blog" :key="index" >
      <router-link :to="`/blog/${item}`"> {{ item }}</router-link>
    </li>
  </ul>
</template>
<style scoped></style>
