<script setup lang="ts">
type StepsItems = {
    title: string
    description: string
    key: ReturnType<typeof self.crypto.randomUUID>
}[]

const items: StepsItems = [
    {
        title: 'Step 1',
        description: 'Your info',
        key: self.crypto.randomUUID()
    },
    {
        title: 'Step 2',
        description: 'Select plan',
        key: self.crypto.randomUUID()
    },
    {
        title: 'Step 3',
        description: 'Add-ons',
        key: self.crypto.randomUUID()
    },
    {
        title: 'Step 4',
        description: 'Summary',
        key: self.crypto.randomUUID()
    }
]

defineProps<{
    currentStep: number
    mdAndLarger: boolean
}>()
</script>

<template>
  <div :class="$style.stepper">
    <div
      v-for="(item, index) in items"
      :key="item.key"
      :class="$style.wrapper"
    >
      <div :class="[$style.step, index + 1 === currentStep && $style['step--active']]">
        {{ index + 1 }}
      </div>
      
      <div v-if="mdAndLarger">
        <p :class="$style.title">
          {{ item.title.toUpperCase() }}
        </p>

        <p :class="$style.description">
          {{ item.description.toUpperCase() }}
        </p>
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

.wrapper {
  display: flex;
  gap: 15px;
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
  max-width: 32px;
  max-height: 32px;
}

.title {
  color: var(--Cool-gray);

  font-size: 12px;
  line-height: 12px;
}

.description {
  color: var(--White);

  font-weight: 500;
  letter-spacing: 1px;
}

.step--active {
  color: var(--Maribe-blue);
  background-color: var(--Light-blue);

  border: none;

  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .stepper {
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 29px;

    height: 100%;
  }
}
</style>