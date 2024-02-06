<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core';
import { computed } from 'vue';

const props = defineProps<{
    context: FormKitFrameworkContext
}>()

const value = computed({
  get: () => {
    return props.context?._value;
  },
  set: (value) => {
    props.context?.node.input(value);
  },
});
const click = () => {
  value.value = !value.value
}
</script>

<template>
  <div :class="$style.period">
    <label
      for="switch"
      :class="[$style.label, {[$style['label--active']]: !value}]"
    >
      Monthly
    </label>

    <div
      :class="$style.switch"
      @click="click"
    >
      <input
        id="switch"
        v-model="value"
        :class="$style.input"
        type="checkbox"
        role="switch"
      >
      <div :class="[$style.slider, $style.round]" />
    </div>

    <label
      for="switch"
      :class="[$style.label, {[$style['label--active']]: value}]"
    >
      Yearly
    </label>
  </div>
</template>

<style module>
.period {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    padding: 10px;

    background-color: var(--Magnolia);

    border-radius: 12px;
}

.label {
    color: var(--Cool-gray);

    font-size: 14px;
    font-weight: 600;
}

.label--active {
    color: var(--Maribe-blue);
}


.input {
    opacity: 0;
    z-index: 99;
    width: 100%;
}

.switch {
  position: relative;
  display: inline-block;

  width: 38px;
  height: 20px;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--Maribe-blue);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>