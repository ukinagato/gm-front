<template>
  <div class="app">
    <SvgIcon icon="phone" color="red" />
    <el-button type="primary" size="small" width="100" height="40" :icon="Plus">
      Primary Button
    </el-button>
    <Page></Page>
  </div>

  <div>
    <h1>test text</h1>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
console.log(import.meta.env)
</script>

<style lang="scss">
div {
  h1 {
    color: red;
  }
}
.app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 400px;
  height: 400px;
}
</style>
