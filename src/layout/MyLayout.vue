<template>
    <div :class="$style.layout">
        <slot />
    </div>
</template>

<style module>
.layout {
  display: grid;
  grid:
    "header" auto
    "main" 1fr
    / 1fr;
  gap: 8px;

  background-color: var(--White);

  border-radius: 12px;
}

@media screen and (min-width: 768px) {
    .layout {
    display: grid;
    grid:
        "sidebar main" 1fr
        / 275px 1fr;
    gap: 8px;

    /* padding: 20px; */
    padding: 17px 14px;
    margin: auto;

    width: 100%;
    height: 100%;

    /* max-width: 950px;
    max-height: 610px; */

    max-width: 938px;
    max-height: 603px;
  }
}
</style>

