<script setup lang="ts">
import MyInputName from '@/components/inputs/inputName/ui/MyInputName.vue';
import MyInputEmail from '@/components/inputs/inputEmail/ui/MyInputEmail.vue';
import MyInputPhone from '@/components/inputs/inputPhone/ui/MyInputPhone.vue';

</script>

<template>
  <ul :class="$style.list">
    <li><MyInputName /></li>
    <li><MyInputEmail /></li>
    <li><MyInputPhone /></li>
  </ul>
</template>

<style module>
.list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 0;

    list-style: none;
}
</style>