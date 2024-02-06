<script setup lang="ts">
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';
import MyRadioGroup from '@/components/inputGroup/radio/ui/MyRadioGroup.vue';
import { ref, watch } from 'vue';

const value = ref<boolean>(false)

watch(value, (value) => {
  console.log(value)
})
</script>

<template>
  <MyCardInfo
    title="Select your plan"
    description="You have the option of monthly or yearly billing."
  />
  <MyRadioGroup />
  <FormKit
    v-model="value"
    type="switcher"
    :outer-class="$style.outer"
  />
</template>

<style module>
.outer {
  flex-grow: 2;
}
</style>