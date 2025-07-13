<script setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/all';

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        gsap.to('.square', {
            rotation: 720,
            scale: 1,
            x: 1000,
            scrollTrigger: {
                trigger: ".square",
                markers: true,
                scrub: true,
            }
        })
        gsap.to('.text *', {
            y: -250,
            rotation: 45,
            scrollTrigger: {
                trigger: ".square",
                scrub: true,
            },
            stagger: {
                amount: 0.15,
                from: 'random',
            }
        })
    });
</script>

<template>
    <div id="color-block"></div>
    <section id="hero">
        <div class="text">
            <p id="intro">Hi, my name is</p>
            <h1 id="name">Jacob Wigent.</h1>
            <h1 id="subtitle">I make video games.</h1>
            <p id="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates dolores similique ea! Ea aliquam quisquam quibusdam exercitationem! Accusamus aliquam porro ex facere illum temporibus enim nihil officiis quia suscipit!</p>
            <div class="buttons">
                <Button>View Projects</Button>
                <Button>Contact Me</Button>
            </div>
        </div>
    </section>
    <div class="square"></div>
</template>

<style scoped lang="scss">

#color-block {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100px;
    background-color: $dark;
    z-index: 0;
    transition: width 0.4s cubic-bezier(1,0.2,0.5,1);//cubic-bezier(.3,.76,.75,.23);
}

.square {
    width: 128px;
    height: 128px;
    background-color: green;
    margin-top: 10dvh;
}

#hero {
    display: flex;
    align-items: center;
    height: 80dvh;
    max-height: 1000px;

    .text {
        #description {
            font-size: 1.125rem;
            line-height: 1.4;
            margin-top: 18px;
            max-width: 600px;
            color: $dark;
            font-size: 16px;
        }

        #intro {
            font-size: 17px;
            font-family: $font-mono;
            color: $accent;
        }

        #subtitle {
            margin-top: -12px;
            color: $gray;
        }

        .buttons {
            margin-top: 26px;
            display: flex;
            gap: 16px;
        }
    }
}
</style>
