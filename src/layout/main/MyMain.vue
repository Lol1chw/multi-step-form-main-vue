<template>
  <main :class="$style.main">
    <slot />
  </main>
</template>

<style module>
.main {
  max-width: 1100px;

  background-color: white;

  margin-left: 17px;
  margin-right: 17px;
  padding: 27px 23px;

  border-radius: 12px;
}

@media screen and (min-width: 768px) {
  .main {
    display: flex;
    flex-direction: column;

    height: 100%;

    margin: 0;

    padding: 32px 85px 18px 92px;
  }
}
</style>