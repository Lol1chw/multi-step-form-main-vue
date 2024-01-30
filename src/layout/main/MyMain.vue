<template>
  <main :class="$style.main">
    <slot />
  </main>
</template>

<style module>
.main {
    max-width: 1110px;
    max-height: 377px;
    height: 100%;

    background-color: var(--White);

    margin: -80px 17px 0px 17px;
    padding-inline: 23px;
    padding-top: 28px;

    border-radius: 12px;
}

@media screen and (min-width: 768px) {
    .main {
        display: flex;
        flex-direction: column;

        max-height: none;

        margin: 0;
        padding: 32px 85px 18px 92px
    }
}
</style>