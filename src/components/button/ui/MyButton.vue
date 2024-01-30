<script setup lang="ts">
import { computed } from 'vue';

type ButtonProps = {
  currentStep: number
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary'
})

const buttonTitle = computed(() => {
    return props.currentStep === 4 ? 'Confirm' : 'Next Step'
})

const buttonClass = computed(() => {
    return props.currentStep === 4 && 'button--background-color-purplish' || ''
})

defineEmits<{
    (e: 'click'): void
}>()
</script>

<template>
  <button
    v-if="props.variant === 'primary'"
    :class="[$style.button, $style.primary, $style[buttonClass]]"
    @click="$emit('click')"
  >
    {{ buttonTitle }}
  </button>

  <button
    v-else
    :class="[$style.button, $style.secondary]"
    @click="$emit('click')"
  >
    Go Back
  </button>
</template>

<style module>
.button {
  all: unset;

  font-size: 14px;
  font-family: Ubuntu;
}
.primary {

  background-color: var(--Maribe-blue);

  color: var(--White);

  border-radius: 6px;

  padding: 10px 18px;
}

.secondary {
  background-color: transparent;

  color: var(--Cool-gray);

  padding: 0;

  font-weight: 500;
}

.button--background-color-purplish {
    background-color: var(--Purplish-blue);
}

@media screen and (min-width: 768px) {
  .button {
    font-size: 16px;
  }

  .primary {
    padding: 10px 25px;
  }
}
</style>