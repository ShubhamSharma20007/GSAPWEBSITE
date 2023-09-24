gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.defaults({
    toggleActions: 'play none none reverse'
})


gsap.to('.img-container', {
    scale: 52,
    ease: 'ease',
    scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,

        start: 'top top',
        end: 'bottom ',
        pin: true // pin a conjunction it  hold  and sticky the trigger value
    }
})

gsap.to('.right', {
    autoAlpha: 0, // 0 means visibility:hidden  and 1 means visibility:visible
    x: 500,
    ease: 'ease',
    duration: 1,
    scrollTrigger: {
        start: 1,

    },

})

gsap.to('.left', {
    x: -700,
    ease: 'ease',
    duration: 1,
    scrollTrigger: {
        start: 1
    }
})

gsap.to('.txt-bottom', {
    autoAlpha: 0,
    letterSpacing: -100,
    ease: 'ease',
    duraiton: 1,
    scrollTrigger: {
        start: 1
    }

})


const timeline = gsap.timeline()
timeline.from('.left-side', {
    y: 250,
    duration: 2,
    skewY: 7,
    opacity: 0,
    stagger: {
        amount: .4 // stargger delay between each animation 
    },
    delay: 0.4

})
ScrollTrigger.create({
    animation: timeline,
    trigger: '.wrapper',
    start: 'top top',
    end: '+=500', // += means add the height from top 
    ease: 'ease',
    markers: true,
    scrub: 1,
    pin: true

})






const tl = gsap.timeline()




tl.from(".title span", {
    y: 150,
    skewY: 27,
    duration: 2
})
tl.from('.txt-bottom', {
    letterSpacing: -0,
    opacity: 1,
    dutaion: 3,
})
timeline.to('.wrapper', {
    x: -window.innerWidth,
    ease: 'ease',
    scrub: 1,
    duration: 1,


})


// get all col values and apply gsap

gsap.utils.toArray('.col').forEach(ele => {
    gsap.fromTo(ele, {
        opacity: .3,
        x: 0
    }, {
        opacity: 1,
        x: -80,
        scrollTrigger: {
            trigger: ele,
            start: '10%',
            stargger: {
                amount: .4
            }
        }
    })
})