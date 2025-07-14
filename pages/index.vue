<script setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger, SplitText } from 'gsap/all';
    import { forgroundScheme, backgroundScheme } from '@/composables/useScheme';
    import { Scheme } from '~/types/scheme';
    import Typewriter from 'typewriter-effect/dist/core';

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const colorBlock = useTemplateRef('color-block');
    const heroContent = useTemplateRef('hero-content');
    
    const showMarkers = false;

    onMounted(() => {
        // Timeline 1: Block fills screen + About animates in
        const timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                markers: showMarkers,
                start: 'top top+=80%',
                end: '+=80%',
                scrub: 1,
                onEnter: () => {
                    forgroundScheme.value = Scheme.Dark;
                },
                onLeaveBack: () => {
                    forgroundScheme.value = Scheme.Mixed;
                },
            }
        });

        timeline1
            .to(colorBlock.value, {
                width: '100%',
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                    backgroundScheme.value = Scheme.Dark;
                },
                onReverseComplete: () => {
                    backgroundScheme.value = Scheme.Mixed;
                },
            })
            .from("#about h5, #about p", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.in",
            }, "-=0.3");


        // Timeline 2: Block moves up + Experience animates in
        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#experience',
                markers: showMarkers,
                start: 'top top+=80%',
                end: '+=80%',
                scrub: 1,
                onEnter: () => {
                    forgroundScheme.value = Scheme.Light;
                },
                onLeaveBack: () => {
                    forgroundScheme.value = Scheme.Dark;
                },
            }
        });

        timeline2
            .to(colorBlock.value, {
                y: '-100vh',
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                    backgroundScheme.value = Scheme.Light;
                },
                onReverseComplete: () => {
                    backgroundScheme.value = Scheme.Dark;
                },
            })
            .from("#experience h5, #experience p", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.in"
            }, "-=0.3");


        // Hero content animation
        gsap.to(heroContent.value.children, {
            y: '-15dvh',
            opacity: 0,
            duration: 0.8,
            ease: "linear",
            stagger: window.innerHeight * 0.0001,
            scrollTrigger: {
                trigger: '#hero',
                markers: showMarkers,
                start: 'bottom bottom',
                end: 'bottom bottom-=100%',
                scrub: 1,
                pin: heroContent.value
            }
        });

        new Typewriter('#subtitle', {
            strings: [
                'I build things.',
                'I design electronics.',
                'I develop websites.',
                'I make video games.', 
            ],
            autoStart: true,
            loop: true,
        });
    }); 
</script>

<template>
    <div id="color-block" ref="color-block"></div>
    <section id="hero">
        <div class="content" ref="hero-content">
            <p id="intro">Hi, my name is</p>
            <h1 id="name">Jacob Wigent.</h1>
            <h1 id="subtitle">I build things.</h1>
            <p id="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates dolores similique ea! Ea aliquam quisquam quibusdam exercitationem! Accusamus aliquam porro ex facere illum temporibus enim nihil officiis quia suscipit!</p>
            <div class="buttons">
                <Button>View Projects</Button>
                <Button>Contact Me</Button>
            </div>
        </div>
    </section>
    <section id="about">
        <h5>About</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo et qui magnam provident. Deserunt minus earum, iusto, cum dicta ab iste dignissimos, officia ea magnam aliquid laborum nihil provident!
        Quam doloremque excepturi ducimus necessitatibus fugiat dolor sint similique, adipisci at nostrum, ab sunt perspiciatis. Tenetur obcaecati ipsa, voluptas ex veritatis, deleniti, ipsum consequatur suscipit laborum recusandae ea voluptates excepturi.
        Illo, vero laudantium! Repellat maxime, excepturi in quod assumenda, incidunt tenetur fugit ad, aspernatur nemo quis earum amet quasi saepe doloribus fuga quidem repellendus vero magnam. Incidunt magni nisi aliquam?
        Voluptates libero, delectus aspernatur ex fugiat placeat consequuntur quia dolores expedita, vero perferendis velit adipisci sint. Aliquid commodi dolore neque, nam necessitatibus, porro facilis, culpa amet expedita soluta saepe at?
        Corporis error et amet vitae cum facere quae molestias necessitatibus ea sed labore sapiente iure veritatis voluptatum sit, laudantium repellendus id possimus corrupti quidem cumque nihil? Dolor molestiae ullam voluptatum!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo et qui magnam provident. Deserunt minus earum, iusto, cum dicta ab iste dignissimos, officia ea magnam aliquid laborum nihil provident!
        Quam doloremque excepturi ducimus necessitatibus fugiat dolor sint similique, adipisci at nostrum, ab sunt perspiciatis. Tenetur obcaecati ipsa, voluptas ex veritatis, deleniti, ipsum consequatur suscipit laborum recusandae ea voluptates excepturi.
        Illo, vero laudantium! Repellat maxime, excepturi in quod assumenda, incidunt tenetur fugit ad, aspernatur nemo quis earum amet quasi saepe doloribus fuga quidem repellendus vero magnam. Incidunt magni nisi aliquam?
        Voluptates libero, delectus aspernatur ex fugiat placeat consequuntur quia dolores expedita, vero perferendis velit adipisci sint. Aliquid commodi dolore neque, nam necessitatibus, porro facilis, culpa amet expedita soluta saepe at?
        Corporis error et amet vitae cum facere quae molestias necessitatibus ea sed labore sapiente iure veritatis voluptatum sit, laudantium repellendus id possimus corrupti quidem cumque nihil? Dolor molestiae ullam voluptatum!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo et qui magnam provident. Deserunt minus earum, iusto, cum dicta ab iste dignissimos, officia ea magnam aliquid laborum nihil provident!
        Quam doloremque excepturi ducimus necessitatibus fugiat dolor sint similique, adipisci at nostrum, ab sunt perspiciatis. Tenetur obcaecati ipsa, voluptas ex veritatis, deleniti, ipsum consequatur suscipit laborum recusandae ea voluptates excepturi.
        Illo, vero laudantium! Repellat maxime, excepturi in quod assumenda, incidunt tenetur fugit ad, aspernatur nemo quis earum amet quasi saepe doloribus fuga quidem repellendus vero magnam. Incidunt magni nisi aliquam?
        Voluptates libero, delectus aspernatur ex fugiat placeat consequuntur quia dolores expedita, vero perferendis velit adipisci sint. Aliquid commodi dolore neque, nam necessitatibus, porro facilis, culpa amet expedita soluta saepe at?
        Corporis error et amet vitae cum facere quae molestias necessitatibus ea sed labore sapiente iure veritatis voluptatum sit, laudantium repellendus id possimus corrupti quidem cumque nihil? Dolor molestiae ullam voluptatum!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo et qui magnam provident. Deserunt minus earum, iusto, cum dicta ab iste dignissimos, officia ea magnam aliquid laborum nihil provident!
        Quam doloremque excepturi ducimus necessitatibus fugiat dolor sint similique, adipisci at nostrum, ab sunt perspiciatis. Tenetur obcaecati ipsa, voluptas ex veritatis, deleniti, ipsum consequatur suscipit laborum recusandae ea voluptates excepturi.
        Illo, vero laudantium! Repellat maxime, excepturi in quod assumenda, incidunt tenetur fugit ad, aspernatur nemo quis earum amet quasi saepe doloribus fuga quidem repellendus vero magnam. Incidunt magni nisi aliquam?
        Voluptates libero, delectus aspernatur ex fugiat placeat consequuntur quia dolores expedita, vero perferendis velit adipisci sint. Aliquid commodi dolore neque, nam necessitatibus, porro facilis, culpa amet expedita soluta saepe at?
        Corporis error et amet vitae cum facere quae molestias necessitatibus ea sed labore sapiente iure veritatis voluptatum sit, laudantium repellendus id possimus corrupti quidem cumque nihil? Dolor molestiae ullam voluptatum!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo et qui magnam provident. Deserunt minus earum, iusto, cum dicta ab iste dignissimos, officia ea magnam aliquid laborum nihil provident!
        Quam doloremque excepturi ducimus necessitatibus fugiat dolor sint similique, adipisci at nostrum, ab sunt perspiciatis. Tenetur obcaecati ipsa, voluptas ex veritatis, deleniti, ipsum consequatur suscipit laborum recusandae ea voluptates excepturi.
        Illo, vero laudantium! Repellat maxime, excepturi in quod assumenda, incidunt tenetur fugit ad, aspernatur nemo quis earum amet quasi saepe doloribus fuga quidem repellendus vero magnam. Incidunt magni nisi aliquam?
        Voluptates libero, delectus aspernatur ex fugiat placeat consequuntur quia dolores expedita, vero perferendis velit adipisci sint. Aliquid commodi dolore neque, nam necessitatibus, porro facilis, culpa amet expedita soluta saepe at?
        Corporis error et amet vitae cum facere quae molestias necessitatibus ea sed labore sapiente iure veritatis voluptatum sit, laudantium repellendus id possimus corrupti quidem cumque nihil? Dolor molestiae ullam voluptatum!
        </p>

    </section>
    <section id="experience">
        <h5>Experience</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quo et qui magnam provident. Deserunt minus earum, iusto, cum dicta ab iste dignissimos, officia ea magnam aliquid laborum nihil provident!
        Quam doloremque excepturi ducimus necessitatibus fugiat dolor sint similique, adipisci at nostrum, ab sunt perspiciatis. Tenetur obcaecati ipsa, voluptas ex veritatis, deleniti, ipsum consequatur suscipit laborum recusandae ea voluptates excepturi.
        Illo, vero laudantium! Repellat maxime, excepturi in quod assumenda, incidunt tenetur fugit ad, aspernatur nemo quis earum amet quasi saepe doloribus fuga quidem repellendus vero magnam. Incidunt magni nisi aliquam?
        Voluptates libero, delectus aspernatur ex fugiat placeat consequuntur quia dolores expedita, vero perferendis velit adipisci sint. Aliquid commodi dolore neque, nam necessitatibus, porro facilis, culpa amet expedita soluta saepe at?
        Corporis error et amet vitae cum facere quae molestias necessitatibus ea sed labore sapiente iure veritatis voluptatum sit, laudantium repellendus id possimus corrupti quidem cumque nihil? Dolor molestiae ullam voluptatum!
        </p>
    </section>
</template>

<style scoped lang="scss">

// section {
//     outline: red 2px dotted;
// }

#color-block {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100px;
    background-color: $dark;
    z-index: 1;
}

#hero {
    display: flex;
    align-items: center;
    height: 100dvh;

    .content {
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
            width: max-content;
        }

        .buttons {
            margin-top: 26px;
            display: flex;
            gap: 16px;
        }
    }
}

#about, #experience {
    margin-top: 50dvh;
    margin-bottom: 50dvh;
    padding-top: 128px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 128px;
}

#about {
    color: $light-gray;
    z-index: 10;
    position: relative;
}

</style>
