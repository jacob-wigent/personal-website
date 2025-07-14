<script setup lang="ts">

    defineProps({
        num: Number,
        heading: String,
        dark: Boolean,
    });

</script>

<template>
    <section>
        <div class="heading">
            <h5><span>0{{ num }}.</span>{{ heading }}</h5>
            <hr>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped lang="scss">

section {
    margin-top: 50dvh;
    margin-bottom: 50dvh;
    padding-top: 128px;
    color: v-bind('dark ? "$light-gray" : "$dark"');

    .heading {
        display: flex;
        align-items: center;
        gap: 42px;

        hr {
            flex: 1;
            border-color: v-bind('dark ? "$light-gray" : "$dark"');
        }

        h5 span {
            font-family: $font-mono;
            color: $accent;
            margin-right: 14px;
        }
    }
    
    .content {
        padding: 0 67px;
        margin-top: 42px;
    }
}

</style>