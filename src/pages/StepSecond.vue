<script setup lang="ts">
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';
import MyRadioGroup from '@/components/inputGroup/radio/ui/MyRadioGroup.vue';
</script>

<template>
  <MyCardInfo
    title="Select your plan"
    description="You have the option of monthly or yearly billing."
  />
  <MyRadioGroup />
</template>