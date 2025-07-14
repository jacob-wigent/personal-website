<template>
    <footer>
        <p id="copyright">&copy; {{ new Date().getFullYear() }} Jacob Wigent</p>
    </footer>
</template>

<style scoped lang="scss">
    #copyright {
        font-size: 16px;
        height: 40vh;
        color: $gray;
    }
</style>