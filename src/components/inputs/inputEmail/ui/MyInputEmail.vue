<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import MyLabel from '@/components/label/ui/MyLabel.vue'
</script>

<template>
  <div>
    <MyLabel
      for="email"
      label="Email Address"
    />
    <FormKit
      id="email"
      type="email"
      name="email"
      placeholder="e.g. stephenking@lorem.com"
      validation="required"
    />
  </div>
</template>