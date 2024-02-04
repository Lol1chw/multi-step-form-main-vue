<script setup lang="ts">
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';
import MyInputGroup from '@/components/inputGroup/input/ui/MyInputGroup.vue'
</script>

<template>
  <MyCardInfo
    title="Personal info"
    description="Please provide your name, email address, and phone number."
  />
  <MyInputGroup />
</template>