<script setup lang="ts">
import MyLayout from '@/layout/MyLayout.vue'
import MyHeader from '@/layout/header/MyHeader.vue';
import MySidebar from '@/layout/sidebar/MySidebar.vue';
import MyStepper from '@/components/stepper/ui/MyStepper.vue'
import { ref } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
const currentStep = ref<number>(1)

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')
</script>

<template>
  <MyLayout>
    <MyHeader v-if="!mdAndLarger">
      <MyStepper :current-step="currentStep" :md-and-larger="mdAndLarger"/>
      <button @click="currentStep++">increment</button>
    </MyHeader>

    <MySidebar v-else>
      <MyStepper :current-step="currentStep" :md-and-larger="mdAndLarger"/>
    </MySidebar>
  </MyLayout>
</template>
