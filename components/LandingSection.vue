<script setup lang="ts">
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/all';
    
    gsap.registerPlugin(ScrollTrigger);

    const props = defineProps({
        num: Number,
        heading: String,
        scheme: String,
        animated: Boolean
    });

    const sectionRef = useTemplateRef('sectionRef');

    onMounted(() => {
        if (!props.animated && sectionRef.value) {
            gsap.from(sectionRef.value.querySelectorAll('.heading, .content'), {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.5,
                ease: "power2.in",
                scrollTrigger: {
                    trigger: sectionRef.value,
                    scrub: 1,
                    start: 'top bottom',
                    end: 'center center'
                }
            });
        } else {
            console.log("animated - skipping GSAP animation");
        }
    })

</script>

<template>
    <section ref="sectionRef" :class="props.scheme + ' ' + (props.animated ? 'animated' : '')">
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
    padding-top: 128px;
    margin-bottom: 0;
    margin-top: 128px;

    &.animated {
        margin-top: 50dvh;
    }

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