<script setup lang="ts">
import { computed } from 'vue';

type ButtonProps = {
  currentStep?: number
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  currentStep: 1
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
    <slot />
  </button>

  <button
    v-else
    :class="[$style.button, $style.secondary]"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style module>
.button {
  all: unset;

  font-size: 14px;
  font-family: Ubuntu;
}

.button:focus-visible {
  border: 3px solid var(--Cool-gray);
  border-radius: 6px;
}

.primary {
  background-color: var(--Maribe-blue);

  color: var(--White);

  border-radius: 6px;

  padding: 10px 18px;
}

.primary:hover {
  opacity: 0.9;

  background-color: var(--Maribe-light);
  cursor: pointer;
}

.secondary {
  background-color: transparent;

  color: var(--Cool-gray);

  padding: 0;

  font-weight: 500;
}

.secondary:hover {
  color: var(--Maribe-blue);

  cursor: pointer;
}

.button--background-color-purplish {
  background-color: var(--Purplish-blue);
}

.button--background-color-purplish:hover {
  background-color: var(--Purplish-blue);

  opacity: 0.5;
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