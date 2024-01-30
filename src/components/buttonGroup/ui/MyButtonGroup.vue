<script setup lang="ts">
import MyButton from '@/components/button/ui/MyButton.vue';

defineProps<{
    currentStep: number
}>()

defineEmits<{
    (e: 'increment'): void
    (e: 'decrement'): void
    (e: 'confirm'): void
}>()
</script>

<template>
  <div :class="[$style.buttonWrapper, {[$style.buttonGroup]: currentStep > 1}]">
    <MyButton
      v-if="currentStep > 1"
      variant="secondary"
      :current-step="currentStep"
      @click="$emit('decrement')"
    />
    <MyButton
      variant="primary"
      :current-step="currentStep"
      @click="currentStep === 4 ? $emit('confirm') : $emit('increment')"
    />
  </div>
</template>

<style module>
.buttonWrapper {
    display: inline-flex;
    justify-content: flex-end;

    width: 100%;
}

.buttonGroup {
    justify-content: space-between;
}
</style>