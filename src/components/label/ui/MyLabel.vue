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

@media screen and (min-width: 768px) {
  .label {
    display: inline-block;

    font-size: 14px;

    margin-bottom: 4px;
  }
}
</style>