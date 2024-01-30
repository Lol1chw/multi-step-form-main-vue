<script setup lang="ts">
import MyLayout from '@/layout/MyLayout.vue'
import MyHeader from '@/layout/header/MyHeader.vue';
import MySidebar from '@/layout/sidebar/MySidebar.vue';
import MyMain from '@/layout/main/MyMain.vue';
import MyStepper from '@/components/stepper/ui/MyStepper.vue';
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';
import MyInputGroup from '@/components/inputGroup/input/ui/MyInputGroup.vue'

import { ref } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
const currentStep = ref<number>(1)

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')
</script>

<template>
  <MyLayout>
    <component :is="mdAndLarger ? MySidebar : MyHeader">
      <MyStepper
        :current-step="currentStep"
        :md-and-larger="mdAndLarger"
      />
    </component>
    <MyMain>
      <MyCardInfo
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <MyInputGroup />
    </MyMain>
  </MyLayout>
</template>
