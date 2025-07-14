<template>
    <footer>
        <p id="copyright">&copy; {{ new Date().getFullYear() }} Jacob Wigent</p>
    </footer>
</template>

<style scoped lang="scss">
    footer {
        background-color: $dark;
        height: 428px;
        margin-top: 256px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #copyright {
        font-size: 16px;
        color: $gray;
    }
</style>