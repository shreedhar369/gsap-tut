// gsap.to(".box",{

//     x:900,
//     duration:7

// })
// gsap.to(".box",{
//     y:500,
//     duration:5,
//     delay:2

// })
// gsap.to(".box",{
//     x:0,
//     duration:5,
//     delay:10

// })

gsap.registerPlugin(ScrollTrigger);
const tl=gsap.timeline({



    scrollTrigger:{
        trigger:".box",
        markers:true,
        // start:"top 80%",
        // end:"top 50%",
        scrub:2
    }
    });
    
    tl.to(".box",{x:500,duration:3})
    tl.to(".box",{y:500,duration:3})
    tl.to(".box",{x:0,duration:3})