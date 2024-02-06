<script setup lang="ts">
import { ref, toRaw } from 'vue';

import type { FormKitFrameworkContext } from '@formkit/core';
import type { MyInputRadioProps } from '@/types/inputRadio';
import type { ComputedRef } from 'vue';

const props = defineProps<{
  context: FormKitFrameworkContext & MyInputRadioProps
}>()

const currentValue = ref<string>('')

const click = (titleValue: string, priceValue: ComputedRef<number>): void => {
  const data = {
    title: titleValue,
    price: priceValue
  }
  currentValue.value = titleValue
  props.context.node.input(data)
}

const options = props.context.myOptions

function formatPrice (price: ComputedRef<number>): string {
  return props.context.period ? `$${price}/yr` : `$${price}/mo`
}
</script>

<template>
  <template
    v-for="option in options"
    :key="option.title"
  >
    <div
      role="radio"
      :class="[$style.radio, {[$style['radio--active']]: option.title === currentValue}]"
      @click="click(option.title, option.price)"
    >
      <component
        :is="toRaw(option.icon)"
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
          {{ formatPrice(option.price) }}
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

@media screen and (min-width: 768px){
  .radio {
    flex-direction: column;
    flex: 1;
  }

  .icon {
  order: 1;
}

  .info {
    order: 3;
  }

  .input {
    order: 2;
  }
}
</style>