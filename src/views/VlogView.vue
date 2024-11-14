<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { marked } from 'marked'
const html = ref<string>('')
const route = useRoute()
onMounted(async () => {
  try {
    const markdown = await import(`../markdown/${route.params.id}.md?raw`)
    if (markdown?.default) {
      html.value = marked.parse(markdown.default)as string
    } else {
      console.log('markdown not found')
    }
  } catch (error) {
    console.error('动态导入失败:', error)
  }
})
</script>
<template>
  <div class=" dark:text-white absolute -translate-x-1/2 left-1/2 w-[50%] prose lg:prose-xl" v-html="html"></div>
</template>
