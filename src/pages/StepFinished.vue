<script setup lang="ts">
import ThankYouIcon from '@/components/icons/ThankYouIcon.vue';
</script>

<template>
  <div :class="$style['thanks-icon']">
    <ThankYouIcon />
  </div>
  <span :class="$style.thanks">Thank you!</span>
  <p :class="$style['thanks-text']">
    Thanks for confirming your subscription! We hope you have fun using our platform.
    If you ever need support, please feel free to email us at support@loremgaming.com.
  </p>
</template>

<style module>
.thanks-icon {
  margin-bottom: 20px;
}

.thanks {
  color: var(--Maribe-blue);

  font-size: 24px;
  font-weight: 700;
}

.thanks-text {
  color: var(--Cool-gray);

  font-size: 16px;
  text-align: center;
}
</style>