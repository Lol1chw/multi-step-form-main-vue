<template>
    <div :class="$style.sidebar">
        <slot />
    </div>
</template>

<style module>
.sidebar {
    background-image: url('@/assets/images/bg-sidebar-desktop.svg');
    background-size: cover;
    background-repeat: no-repeat;

    height: 100%;
    
    padding-top: 41px;
    padding-inline: 34px;

    border-radius: 12px;
}
</style>