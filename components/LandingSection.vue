<script setup lang="ts">

    const props = defineProps({
        num: Number,
        heading: String,
        scheme: String,
    });

</script>

<template>
    <section :class="props.scheme">
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

    .heading {
        display: flex;
        align-items: center;
        gap: 42px;

        hr {
            flex: 1;
        }

        h5 {
            span {
                font-family: $font-mono;
                color: $accent;
                margin-right: 14px;
            }
        }
    }
    
    .content {
        padding: 0 67px;
        margin-top: 42px;
    }

    &.light {
        color: $dark;
        
        hr {
            border-color: $dark;
        }
    } 

    &.dark {
        color: $light-gray;
        
        hr {
            border-color: $light-gray;
        }
    }
}

</style>