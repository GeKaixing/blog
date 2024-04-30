<script setup>
import { useRouter } from 'vue-router';
const modules = import.meta.glob('../public/*.md', { as: 'raw' })
const router = useRouter()
modules[Symbol.iterator] = function () {
    let currentIndex = 0;
    const keys = Object.keys(this);
    return {
        next: () => {
            if (currentIndex < keys.length) {
                const key = keys[currentIndex++];
                return { value: this[key], done: false };
            } else {
                return { done: true };
            }
        }
    };
};
const jumpTo = (path) => {
    const parts = path.split("/");  // 使用 "/" 分割字符串
    const directory = parts[parts.length - 1].split(".")
    const ddd= directory[0]
    router.push(  { path: `/context/${ddd}`, query: { plan:path} }
)
};
</script>
<template>
     <div class="menu">
        <p v-for=" value of modules" @click="jumpTo(value.name)">{{ value.name }}</p>
    </div> 
</template>
<style>
.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>