<script setup lang="ts">
import MyButton from '@/components/button/ui/MyButton.vue';
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';

import { useSubscriptionCostDisplay } from '@/components/inputs/inputRadio/model/subscription';

import type { MultiStepForm } from '@/types/form';

const props = defineProps<{
    form: MultiStepForm
    periodDisplay: string
    sum: string
}>()

defineEmits<{
    (e: 'change'): void
}>()

const subscriptionCostDisplay = useSubscriptionCostDisplay(props.form)
</script>

<template>
  <MyCardInfo
    title="Finishing up"
    description="Double-check everything looks OK before confirming."
  />

  <div :class="$style.summary">
    <div :class="$style.subscription">
      <div>
        <p :class="$style['subscription-name']">
          {{ form.subscription }} ({{ !form.period ? 'Monthly' : 'Yearly' }})
        </p>

        <MyButton
          variant="secondary"
          @click="$emit('change')"
        >
          <span :class="$style['change-button-text']">Change</span>
        </MyButton>
      </div>

      <span :class="$style['subscription-price']">
        {{ subscriptionCostDisplay }}/{{ periodDisplay }}
      </span>
    </div>


    <hr
      v-if="form.addons.find(addon => addon.selected)"
      :class="$style.divider"
    >

    <div :class="$style.addons">
      <template
        v-for="addon in form.addons.filter(addon => addon.selected)"
        :key="addon.name"
      >
        <div :class="$style.addon">
          <p :class="$style['addon-name']">
            {{ addon.name }}
          </p>
          <span :class="$style['addon-price']">+${{ form.period ? addon.price * 10 : addon.price }}/{{ periodDisplay }}</span>
        </div>
      </template>
    </div>
  </div>

  <div :class="$style.sum">
    <p :class="$style['sum-text']">
      Total (per {{ form.period ? 'year' : 'month' }})
    </p>
    <span :class="$style['sum-price']">+{{ sum }}/{{ periodDisplay }}</span>
  </div>
</template>

<style module>
.summary {
  display: flex;
  flex-direction: column;

  background-color: var(--Alabaster);

  border-radius: 12px;

  padding: 15px;
}

.change-button-text {
  text-decoration: underline;
  text-decoration-thickness: 2px;

  cursor: pointer;
}

.change-button-text:hover {
  color: var(--Purplish-blue);
}

.subscription {
  display: flex;
  justify-content: space-between;

  align-items: center;
}

.subscription-name {
  color: var(--Maribe-blue);

  font-weight: 500;
}

.subscription-price {
  color: var(--Maribe-blue);

  font-size: 16px;
  font-weight: 700;
}

.divider {
  border-top: 0px solid var(--Cool-gray);

  margin: 10px 0px;
}

.addons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.addon {
  display: flex;
  justify-content: space-between;
}

.addon-name {
  color: var(--Cool-gray);
}

.addon-price {
  color: var(--Maribe-blue);

  font-size: 16px;
}

.sum {
  display: flex;
  justify-content: space-between;

  padding: 15px;
}

.sum-text {
  color: var(--Cool-gray);
}

.sum-price {
  color: var(--Purplish-blue);

  font-size: 18px;
  font-weight: 700;
}
</style>