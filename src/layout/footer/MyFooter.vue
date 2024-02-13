<template>
  <footer :class="$style.footer">
    <slot />
  </footer>
</template>

<style module>
.footer {
  display: flex;

  background-color: white;

  padding: 15px;

  margin-top: auto;
}
</style>