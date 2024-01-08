<template>
  <div :class="{ dark: isDark }">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/store/themeStore'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
</script>

<style scoped>

</style>
