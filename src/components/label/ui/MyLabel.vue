<script setup lang="ts">
const props = defineProps<{
    label: string
    for: string
}>()
</script>

<template>
  <label
    :class="$style.label"
    :for="props.for"
  >
    {{ props.label }}
  </label>
</template>

<style module>
.label {
  color: var(--Maribe-blue);

  font-size: 12px;
}
</style>