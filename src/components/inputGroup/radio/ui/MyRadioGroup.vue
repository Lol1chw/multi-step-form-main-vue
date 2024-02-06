<script setup lang="ts">
import ArcadeIcon from '@/components/icons/ArcadeIcon.vue';
import AdvancedIcon from '@/components/icons/AdvancedIcon.vue';
import ProIcon from '@/components/icons/ProIcon.vue';
import { useSwitcher, symbol } from '@/components/inputs/inputSwitcher/model/switcherContext';

import { FormKit } from '@formkit/vue';
import type { Options } from '@/types/inputRadio';
import { computed } from 'vue';

const { period } = useSwitcher(symbol)

const options: Options[] = [
    { icon: ArcadeIcon, title: 'Arcade', price: computed(() => !period.value ? 9 : 9 * 10) },
    { icon: AdvancedIcon, title: 'Advanced', price: computed(() => !period.value ? 12 : 12 * 10) },
    { icon: ProIcon, title: 'Pro', price: computed(() => !period.value ? 15 : 15 * 10) }
    ]
</script>

<template>
  <fieldset :class="$style.list">
    <FormKit
      type="myRadio"
      name="plan"
      :my-options="options"
      :inner-class="$style.inner"
      :period="period"
    />
  </fieldset>
</template>

<style module>
.list {
    all: unset;

    display: flex;
    flex-direction: column;
    gap: 11px;

    padding: 7px 0px;
    margin-bottom: 23px;

    list-style: none;
}

.inner {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

@media screen and (min-width: 768px) {
      .inner {
      flex-direction: row;
      gap: 18px;
    }
}
</style>