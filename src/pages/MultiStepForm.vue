<script setup lang="ts">
import MyLayout from '@/layout/MyLayout.vue'
import MyHeader from '@/layout/header/MyHeader.vue';
import MySidebar from '@/layout/sidebar/MySidebar.vue';
import MyMain from '@/layout/main/MyMain.vue';
import MyFooter from '@/layout/footer/MyFooter.vue';
import MyStepper from '@/components/stepper/ui/MyStepper.vue';
import MyButtonGroup from '@/components/buttonGroup/ui/MyButtonGroup.vue';
import StepFirst from '@/pages/StepFirst.vue';

import { useProvide, symbol } from '@/components/stepper/model/stepperContext';
import { reactive, ref } from 'vue';
import { breakpointsTailwind, useBreakpoints, useStepper } from '@vueuse/core';

const currentStep = ref<number>(1)

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subscription: 'type' as 'Arcade' | 'Advanced' | 'Pro',
  addOns: [false, false, false]
})

const stepper = useStepper({
  'user-information': {
    title: 'Step 1',
    isValid: () => form.name && form.email && form.phone,
  },
  'choose-subscription': {
    title: 'Step 2',
    isValid: () => ['Arcade', 'Advanced', 'Pro'].includes(form.subscription),
  },
  'choose-addOns': {
    title: 'Step 3',
  }
})

const confirm = (): void => {
  console.log(currentStep.value)
}

const increment = (): void => {
  currentStep.value++
}

const decrement = (): void => {
  currentStep.value--
}

useProvide(symbol, {
  currentStep,
  confirm,
  increment,
  decrement
})

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
      <StepFirst v-if="currentStep === 1" />
    </MyMain>

    <MyFooter v-if="!mdAndLarger">
      <MyButtonGroup />
    </MyFooter>
  </MyLayout>
</template>