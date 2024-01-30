<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
}>()
</script>

<template>
    <h1 :class="$style.title">{{ props.title }}</h1>
    <p :class="$style.description">{{ props.description }}</p>
</template>

<style module>
.title {
    color: var(--Maribe-blue);

    font-size: 24px;
    font-weight: 700;

    margin-bottom: 4px;
}

.description {
    color: var(--Cool-gray);

    font-size: 16px;
}

@media screen and (min-width: 768px) {
    .title {
        font-size: 32px;

        margin-bottom: 3px;
    }
}
</style>