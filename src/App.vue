<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <h2>{{ msg1 }}</h2>
    <el-button type="primary" size="small" width="100" height="40" :icon="Plus">
      Primary Button
    </el-button>
    <HelloWorld />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
const msg = 'ssssff'
const msg1 = 'sssff'
import { Plus } from '@element-plus/icons-vue'
console.log(import.meta.env)
</script>

<style>
.app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 400px;
  height: 400px;
}
</style>
