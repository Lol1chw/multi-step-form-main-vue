<script setup lang="ts">
import MyHeader from '@/layout/header/MyHeader.vue';
import MyStepper from '@/components/stepper/ui/MyStepper.vue'
import { ref } from 'vue';
const currentStep = ref<number>(1)
</script>

<template>
  <MyHeader>
    <MyStepper :current-step="currentStep"/>
    <button @click="currentStep++">increment</button>
  </MyHeader>
</template>
