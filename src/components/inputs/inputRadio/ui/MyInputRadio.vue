<script setup lang="ts">
import { ref } from 'vue';

import type { MultiStepForm, Subscription } from '@/types/form';

const props = defineProps<{
  subscriptions: Subscription[]
  form: MultiStepForm
  periodDisplay: string
}>()

const emit = defineEmits<{
  (e: 'selectSubscription', name: 'Arcade' | 'Advanced' | 'Pro'): void
}>()

const currentValue = ref<string>(props.form.subscription)

const click = (name: 'Arcade' | 'Advanced' | 'Pro'): void => {
  emit('selectSubscription', name)
  currentValue.value = name
}
</script>

<template>
  <fieldset :class="$style.fieldset">
    <template
      v-for="(subscription, index) in subscriptions"
      :key="subscription.name"
    >
      <div
        :tabindex="index + 1"
        role="radio"
        :class="[$style.radio, {[$style['radio--active']]: subscription.name === currentValue}]"
        @click="click(subscription.name)"
      >
        <component
          :is="subscription.icon"
          :class="$style.icon"
        />

        <div :class="$style.info">
          <label
            :class="$style['subscription-name']"
            :for="subscription.name"
          >
            {{ subscription.name }}
          </label>

          <p :class="$style.price">
            ${{ form.period ? subscription.price * 10 : subscription.price }}/{{ periodDisplay }}
          </p>
        </div>

        <input
          :id="subscription.name"
          tabindex="-1"
          type="radio"
          name="group"
          :value="subscription.name"
          :class="$style.input"
        >
      </div>
    </template>
  </fieldset>
</template>

<style module>
.fieldset {
  display: flex;
  flex-direction: column;
  gap: 12px;

  border: none;

  padding: 0;

  margin-bottom: 27px;
}

.radio {
  display: flex;

  gap: 15px;

  padding: 14px;


  border: 1px solid var(--Cool-gray);
  border-radius: 8px;
}

.radio:hover {
  border-color: var(--Purplish-blue);

  cursor: pointer;

  transition: border-color 0.5s;
}

.radio:focus-visible {
  border: 3px solid var(--Cool-gray);
  border-radius: 6px;
}

.info {
  display: flex;
  flex-direction: column;
}

.subscription-name {
  color: var(--Maribe-blue);

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
}

.input {
  opacity: 0;

  cursor: pointer;
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
  .fieldset {
    flex-direction: row;
  }

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