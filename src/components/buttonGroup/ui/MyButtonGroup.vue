<script setup lang="ts">
import MyButton from '@/components/button/ui/MyButton.vue';

import { useStepper, symbol } from '@/components/stepper/model/stepperContext';

const { increment, decrement, confirm, currentStep } = useStepper(symbol)
</script>

<template>
  <div :class="[$style.buttonWrapper, {[$style.buttonGroup]: currentStep > 1}]">
    <MyButton
      v-if="currentStep > 1"
      variant="secondary"
      :current-step="currentStep"
      @click="decrement()"
    />
    <MyButton
      variant="primary"
      :current-step="currentStep"
      @click="currentStep === 4 ? confirm() : increment()"
    />
  </div>
</template>

<style module>
.buttonWrapper {
    display: inline-flex;
    justify-content: flex-end;

    width: 100%;
}

.buttonGroup {
    justify-content: space-between;
}
</style>