<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import MyLabel from '@/components/label/ui/MyLabel.vue';

import { options, PLACEHOLDER, removePlaceholder } from '../model/maskito'
import { ref } from 'vue';

const phone = ref<string>('')

const blur = (): void => {
  const cleanValue = removePlaceholder(phone.value)

  phone.value = cleanValue === '+7' ? '' : cleanValue
}

const focus = (): void => {
  const initialValue = phone.value || '+7'

  phone.value = initialValue + PLACEHOLDER.slice(initialValue.length)
}
</script>

<template>
  <MyLabel
    label="Phone Number"
    for="phone"
  />
  <FormKit
    id="phone"
    v-model="phone"
    v-maskito="options"
    type="text"
    name="phone"
    placeholder="e.g. +1 234 567 890"
    validation="required"
    @blur="blur"
    @focus="focus"
  />
</template>