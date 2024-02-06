<script setup lang="ts">
import { ref } from 'vue';

import type { FormKitFrameworkContext } from '@formkit/core';
import type { MyInputCheckboxProps } from '@/types/inputCheckbox';

const props = defineProps<{
    context: FormKitFrameworkContext & MyInputCheckboxProps
}>()

const data = ref<Data[]>([])
const checked = ref<string[]>([])

const click = (titleValue: string, priceValue: number): void => {
    const filledCheckbox = {
        title: titleValue,
        price: priceValue
    }

    if (checked.value.includes(titleValue)) {
        const index = checked.value.indexOf(titleValue)
        checked.value.splice(index, 1)
        data.value.splice(index, 1)
    }
    else {
        checked.value.push(titleValue)
        data.value.push(filledCheckbox)
    }

    props.context.node.input(data.value)
}

const options = props.context.myOptions

function formatPrice (price: number): string {
  return props.context.period ? `+$${price}/yr` : `+$${price}/mo`
}

type Data = {
    title: string
    price: number
}

</script>

<template>
  <template
    v-for="option in options"
    :key="option.title"
  >
    <div
      :class="[$style.checkbox, {[$style['checkbox--active']]: checked.includes(option.title)}]"
      @click="click(option.title, option.price)"
    >
      <input
        :id="option.title"
        v-model="checked"
        type="checkbox"
        name="group"
        :value="option.title"
        :class="$style.input"
      >

      <span :class="$style.checkmark" />

      <div :class="$style.info">
        <label
          :for="option.title"
          :class="$style.title"
        >
          {{ option.title }}
        </label>

        <span :class="$style.description">{{ option.description }}</span>
      </div>
      <span :class="$style.price">{{ formatPrice(option.price) }}</span>
    </div>
  </template>
</template>

<style module>
.checkbox {
    display: flex;
    align-items: center;

    gap: 15px;

    padding: 9px 15px;


    border: 1px solid var(--Cool-gray);
    border-radius: 8px;

    cursor: pointer;
}

.checkbox--active {
    border-color: var(--Purplish-blue);
}

.info {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.title {
    color: var(--Maribe-blue);

    font-size: 14px;
    font-weight: 500;

    pointer-events:none;
}

.description {
    color: var(--Cool-gray);

    font-size: 12px;
}

.price {
    color: var(--Purplish-blue);

    font-size: 12px;
}

.input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: relative;

    height: 20px;
    width: 20px;

    border: 1px solid var(--Cool-gray);
    border-radius: 4px;
}

.checkbox input:checked ~ .checkmark {
    background-color: var(--Purplish-blue);
}

.checkmark:after {
    content: url('@/assets/images/icon-checkmark.svg');

    position: absolute;

    display: none;

    height: 24px;
    width: 10px;
}

.checkbox input:checked ~ .checkmark:after {
    display: block;
}

.checkbox .checkmark:after {
    top: 50%;
    transform: translate(4px,-50%);
}

@media screen and (min-width: 768px) {
    .checkbox {
        padding: 13px 22px;
        gap: 24px;
    }

    .title {
        font-size: 16px;
    }

    .description {
        font-size: 15px;
    }

    .price {
        font-size: 16px;
    }
}
</style>