<script setup lang="ts">
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';
import MyCheckboxGroup from '@/components/inputGroup/checkbox/ui/MyCheckboxGroup.vue';
</script>

<template>
  <MyCardInfo
    title="Pick add-ons"
    description="Add-ons help enhance your gaming experience."
  />
  <MyCheckboxGroup />
</template>

<style module>
.inner {
    display: flex;
    flex-direction: column;
    gap: 11px;
}
</style>
