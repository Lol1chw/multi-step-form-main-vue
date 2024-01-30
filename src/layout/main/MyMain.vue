<template>
    <main :class="$style.main">
        <slot />
    </main>
</template>

<style module>
.main {
    max-width: 1110px;
}
</style>