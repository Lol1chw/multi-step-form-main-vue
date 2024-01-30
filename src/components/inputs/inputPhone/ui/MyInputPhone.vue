<script setup lang="ts">
import { FormKit } from '@formkit/vue'
import MyLabel from '@/components/label/ui/MyLabel.vue';
</script>

<template>
  <MyLabel
    label="Phone Number"
    for="phone"
  />
  <FormKit
    id="phone"
    type="text"
    name="phone"
    placeholder="e.g. +1 234 567 890"
    validation="required"
  />
</template>