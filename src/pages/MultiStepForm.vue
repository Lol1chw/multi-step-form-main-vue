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
import { ref } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { FormKit, submitForm } from '@formkit/vue';
const currentStep = ref<number>(1)

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')

const confirm = (): void => {
  console.log(currentStep.value)
  submitForm('multi-step-form')
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
const mySubmitForm = (data: MultiStepForm): void => {
  alert(JSON.stringify(data, null, 2))
}

type MultiStepForm = {
  name: string
  email: string
  phone: string
  subscription: 'Arcade' | 'Advanced' | 'Pro'
  addOns: [boolean, boolean, boolean]
}

</script>

<template>
  <MyLayout>
    <component :is="mdAndLarger ? MySidebar : MyHeader">
      <MyStepper
        :current-step="currentStep"
        :md-and-larger="mdAndLarger"
      />
    </component>

    <FormKit
      id="multi-step-form"
      type="form"
      :actions="false"
      @submit="mySubmitForm"
    >
      <MyMain>
        <StepFirst v-if="currentStep === 1" />
      </MyMain>
    </FormKit>

    <MyFooter v-if="!mdAndLarger">
      <MyButtonGroup />
    </MyFooter>
  </MyLayout>
</template>