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

  border-radius: 12px;

  height: 100%;

}

@media screen and (min-width: 768px) {
    .layout {
    display: grid;
    grid:
        "sidebar main" 1fr
        / 275px 1fr;
    gap: 8px;

    background-color: var(--White);

    padding: 17px 14px;
    margin: auto;

    width: 100%;
    /* height: 100%;  можно убрать, т.к. используется и в мобильной версии*/

    max-width: 938px;
    max-height: 603px;
  }
}
</style>

