<script setup lang="ts">
import { Scheme } from '~/types/scheme';

const props = defineProps<{
    forgroundScheme?: Scheme;
}>();

</script>

<template>
    <div id="socials" :class="forgroundScheme">
        <nav>
            <a href="https://github.com/jacob-wigent" target="_blank"><Icon name="mynaui:brand-github" size="24px"/></a>
            <a href="https://www.linkedin.com/in/jacob-wigent/" target="_blank"><Icon name="basil:linkedin-outline" size="24px"/></a>
            <a href="https://www.youtube.com/@jacob_wigent" target="_blank"><Icon name="si:youtube-line" size="24px"/></a>
        </nav>
        <div class="bar"></div>
    </div>
</template>

<style scoped lang="scss">
@use "sass:color";

    a {
        all: unset;
        cursor: pointer;
        &::after {
            display: none;
        }
    }

    #socials {
        position: fixed;
        z-index: 2;
        left: 36px;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        color: $gray;

        nav {
            display: flex;
            flex-direction: column;
            gap: 24px;

            a * {
                transition: background-color 0.2s ease;
            }
        }

        
        &.mixed, &.dark {
            nav a:hover *{
                background-color: $light-gray;
            }
        }

        &.light {
            nav a:hover *{
                background-color: color.adjust($gray, $lightness: $darken);
            }
        }

        .bar {
            width: 1px;
            height: 128px;
            background-color: currentColor;
        }
    }

</style>