<script setup lang="ts">
import { ref } from 'vue';

import type { FormKitFrameworkContext } from '@formkit/core';
import type { MyInputRadioProps } from '@/types/inputRadio';

const props = defineProps<{
  context: FormKitFrameworkContext & MyInputRadioProps
}>()

const currentValue = ref<string>('')

const click = (newValue: string): void => {
  currentValue.value = newValue
  props.context.node.input(newValue)
}

const options = props.context.myOptions

</script>

<template>
  <template
    v-for="option in options"
    :key="option.title"
  >
    <div
      role="radio"
      :class="[$style.radio, {[$style['radio--active']]: option.title === currentValue}]"
      @click="click(option.title)"
    >
      <component
        :is="option.icon"
        :class="$style.icon"
      />

      <div :class="$style.info">
        <label
          :class="$style['subscription-name']"
          :for="option.title"
        >
          {{ option.title }}
        </label>
        <p :class="$style.price">
          {{ `$${option.price}/mo` }}
        </p>
      </div>

      <input
        :id="option.title"
        type="radio"
        name="group"
        :value="option.title"
        :class="$style.input"
      >
    </div>
  </template>
</template>



<style module>
.radio {
  display: flex;

  gap: 15px;

  padding: 14px;


  border: 1px solid var(--Cool-gray);
  border-radius: 8px;
}

.icon {
  grid-area: icon;
}

.info {
  display: flex;
  flex-direction: column;
}

.subscription-name {
  color: var(--Maribe-blue);

  font-size: 16px;
  font-weight: 500;
}

.input {
  opacity: 0;
}

.price {
  color: var(--Cool-gray);

  font-size: 14px;
  font-weight: 500;
}

.radio--active {
  background-color: var(--Alabaster);
  border-color: var(--Purplish-blue);
}
</style>