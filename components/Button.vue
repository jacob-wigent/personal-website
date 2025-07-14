<template>
    <a href="#" class="button">
        <slot>Click Me</slot>
    </a>
</template>

<style scoped lang="scss">
.button {
    z-index: 0;
    display: block;
    width: fit-content;
    padding: 12px 24px;
    border: solid 2px $gray;
    border-radius: 4px;
    text-decoration: none;
    color: $gray;
    transition: background-color 0.2s, color 0.1s ease-in-out;

    &::after {
        display: none;
    }

    &:hover {
        background-color: $gray;
        color: white;
    }
}
</style>