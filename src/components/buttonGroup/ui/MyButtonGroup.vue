<script setup lang="ts">
import MyButton from '@/components/button/ui/MyButton.vue';
defineProps<{
  currentStep: number
}>()

defineEmits<{
  (e: 'click:back'): void
  (e: 'click:submit'): void
}>()
</script>

<template>
  <div :class="[$style.buttonWrapper, {[$style.buttonGroup]: currentStep > 1}]">
    <MyButton
      v-if="currentStep > 1"
      variant="secondary"
      type="button"
      @click="$emit('click:back')"
    >
      Go back
    </MyButton>

    <MyButton
      variant="primary"
      type="button"
      @click="$emit('click:submit')"
    >
      {{ currentStep === 4 ? 'Confrim' : 'Next Step' }}
    </MyButton>
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