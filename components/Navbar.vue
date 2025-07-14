<script setup lang="ts">
import { Scheme } from '~/types/scheme';

const props = defineProps<{
    forgroundScheme?: Scheme;
    backgroundScheme?: Scheme
}>();

</script>

<template>
    <header :class="'fg-' + forgroundScheme + ' bg-' + backgroundScheme">
        <NuxtLink class="bubble-expand" id="logo" to="/"> 
            <svg id="logo-icon" width="48" height="31" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.41189 17.9245C3.8396 17.2314 2.70477 16.7794 1.6545 17.7683C0.604226 18.7573 0.979375 20.1953 1.6545 21.0475C8.00478 29.0631 18.3549 30 24.0258 30C29.6966 30 40.0467 29.0631 46.397 21.0475C47.0721 20.1953 47.4473 18.7573 46.397 17.7683C45.3467 16.7794 44.2119 17.2314 43.6396 17.9245M4.41189 17.9245C5.48165 11.503 8.4799 7.4293 11.9037 4.89268M4.41189 17.9245C7.24504 21.3556 10.9686 23.1478 14.505 24.0838M43.6396 17.9245C37.7086 25.1073 27.8757 25.1073 24.0258 25.1073C22.0149 25.1073 18.3718 25.1073 14.505 24.0838M43.6396 17.9245C41.1944 3.24653 28.6734 0.834899 24.0258 1.0084C21.4114 0.910803 16.3058 1.63119 11.9037 4.89268M11.9037 4.89268C13.0482 7.30639 15.7536 10.8149 17.2624 11.5224M17.2624 11.5224C18.9272 12.3032 24.0258 12.3031 24.0258 12.3031C24.0258 12.3031 29.1243 12.3031 30.7892 11.5224M17.2624 11.5224C16.1698 13.1359 14.1928 19.3819 14.505 24.0838M36.1479 4.89268C35.0033 7.30639 32.2979 10.8149 30.7892 11.5224M30.7892 11.5224C31.8817 13.1359 33.8587 19.3819 33.5466 24.0838"
                stroke-width="1.75" />
        </svg>
        </NuxtLink>
        <nav>
            <ol>
                <li>
                    <NuxtLink to="/#about" class="bubble-expand"><span>01.</span>About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/#experience" class="bubble-expand"><span>02.</span>Experience</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/#projects" class="bubble-expand"><span>04.</span>Projects</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/#contact" class="bubble-expand"><span>05.</span>Contact</NuxtLink>
                </li>
            </ol>
        </nav>
    </header>
</template>

<style scoped lang="scss">

a {
    all: unset;
    cursor: pointer;

    &::after {
        display: none;
    }
}

header {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 24px;
    transition: padding 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
    transition: color 0.5s ease-in-out;
    z-index: 3;

    nav ol {
        display: flex;
        list-style: none;
        gap: 38px;
        transform: translateY(-2px);

        li a {
            font-size: 14px;
            color: inherit;
            font-family: $font-mono;
            transition: color 0.3s ease;

            &:hover {
                color: $accent;
            }
        }

        span {
            color: $accent;
            margin-right: 4px;
        }
    }

    #logo-icon {
        z-index: 3;
        transition: transform 0.2s ease;
        
        path {
            stroke: currentColor;
        }
    }

    #logo {
        &:hover {
            animation: wiggle 0.6s ease-in-out;
        }
    }

    @keyframes wiggle {
        0%, 100% { transform: rotate(0deg); }
        15% { transform: rotate(-5deg) scale(1.08); }
        30% { transform: rotate(5deg) scale(1.08); }
        45% { transform: rotate(-3deg) scale(1.04); }
        60% { transform: rotate(3deg) scale(1.04); }
        75% { transform: rotate(-1deg) scale(1.02); }
        90% { transform: rotate(1deg) scale(1.02); }
    }

    &.fg-mixed {
        color: $dark;

        #logo-icon path {
            stroke: $light-gray;
        }
    }

    &.fg-dark {
        color: $light-gray;
    }

    &.fg-light {
        color: $dark;
    }
}
</style>