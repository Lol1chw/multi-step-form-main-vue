<script setup lang="ts">
import { useSwitcher, symbolSwitcher } from '@/components/inputs/inputSwitcher/model/switcherContext';

import type { Options } from '@/types/inputCheckbox';

const { period } = useSwitcher(symbolSwitcher)

const options: Options[] = [
    {title: 'Online service', description: 'Access to multiplayer games', price: !period.value ? 1 : 1 * 10},
    {title: 'Larger storage', description: 'Extra 1TB of cloud save', price: !period.value ? 2 : 2 * 10 },
    {title: 'Customizable profile', description: 'Custom theme on your profile', price: !period.value ? 2 : 2 * 10}
]
</script>

<template>
  <fieldset :class="$style.list">
    <FormKit
      type="myCheckbox"
      name="add-ons"
      :my-options="options"
      :period="period"
      :inner-class="$style.inner"
    />
  </fieldset>
</template>

<style module>
.list {
    all: unset;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 11px;

    padding: 7px 0px;

    list-style: none;
}

.inner {
    display: flex;
    flex-direction: column;
    gap: 13px;
}

@media screen and (min-width: 768px) {
    .inner {
        gap: 19px;
    }
}
</style>