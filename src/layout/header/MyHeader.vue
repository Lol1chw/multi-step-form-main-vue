<template>
  <header :class="$style.header">
    <slot />
  </header>
</template>

<style module>
.header {
    background-image: url('@/assets/images/bg-sidebar-mobile.svg');
    background-size: cover;

    min-height: 170px;

    padding-inline: 98px;
    padding-top: 32px;
}
</style>