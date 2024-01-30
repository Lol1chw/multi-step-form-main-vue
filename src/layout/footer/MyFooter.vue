<template>
  <footer :class="$style.footer">
    <slot />
  </footer>
</template>

<style module>
.footer {
    display: flex;
    justify-content: flex-end;

    background-color: var(--White);

    padding: 15px;
}
</style>