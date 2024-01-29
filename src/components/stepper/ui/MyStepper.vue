<script setup lang="ts">
import { UUID } from 'crypto';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
type StepsItems = {
    title: string
    description: string
    key: UUID
}[]

const items: StepsItems = [
    {
        title: 'Step 1',
        description: 'Step 1 description',
        key: self.crypto.randomUUID()
    },
    {
        title: 'Step 2',
        description: 'Step 2 description',
        key: self.crypto.randomUUID()
    },
    {
        title: 'Step 3',
        description: 'Step 3 description',
        key: self.crypto.randomUUID()
    },
    {
        title: 'Step 4',
        description: 'Step 4 description',
        key: self.crypto.randomUUID()
    }
]

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')

defineProps<{
    currentStep: number
}>()
</script>

<template>
  <div :class="$style.stepper">
    <div
      v-for="(item, index) in items"
      :key="item.key"
    >
      <div :class="[$style.step, index + 1 === currentStep && $style['step--active']]">
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<style module>

.stepper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.step {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--White);

    border: 1px solid var(--White);
    border-radius: 50%;

    min-width: 32px;
    min-height: 32px;
}

.step--active {
    color: var(--Maribe-blue);
    background-color: var(--Light-blue);
    border: none;
}
</style>