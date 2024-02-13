<template>
  <div :class="$style.layout">
    <slot />
  </div>
</template>

<style module>
@media screen and (max-width: 768px) {
  .layout {
    background-image: url('@/assets/images/bg-sidebar-mobile.svg');
    background-size: contain;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    height: 100%;
  }
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

    height: 100%;
    width: 100%;

    max-width: 938px;
    max-height: 603px;

    border-radius: 12px;
  }
}
</style>

