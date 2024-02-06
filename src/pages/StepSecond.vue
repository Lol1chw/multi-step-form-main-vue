<script setup lang="ts">
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';
import MyRadioGroup from '@/components/inputGroup/radio/ui/MyRadioGroup.vue';
import { useSwitcher, symbolSwitcher } from '@/components/inputs/inputSwitcher/model/switcherContext';

const { period } = useSwitcher(symbolSwitcher)
</script>

<template>
  <MyCardInfo
    title="Select your plan"
    description="You have the option of monthly or yearly billing."
  />
  <MyRadioGroup />
  <FormKit
    v-model="period"
    type="switcher"
    name="period"
    :outer-class="$style.outer"
  />
</template>

<style module>
.outer {
  flex-grow: 2;
}
</style>