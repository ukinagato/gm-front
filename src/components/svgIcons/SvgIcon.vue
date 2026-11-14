<template>
  <svg style="width: 24px; height: 24px" :color="color">
    <use :href="prefix + icon"></use>
  </svg>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: '#icon-',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
</script>
