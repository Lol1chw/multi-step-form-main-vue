<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import MyLabel from '@/components/label/ui/MyLabel.vue'

</script>

<template>
  <div>
    <MyLabel
      for="name"
      label="Name"
    />
    <FormKit
      id="name"
      type="text"
      name="name"
      placeholder="e.g. Stephen King"
      validation="required"
    />
  </div>
</template>

<style>
.formkit-input {
    border: 1px solid var(--Lightgray);
    border-radius: 4px;

    padding: 12px 14px;
    width: 100%;
}

.formkit-input::placeholder {
    color: var(--Cool-gray);

    font-size: 15px;
    font-family: Ubuntu;
    font-weight: 700;
}
</style>