function mousemover(){
var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x +"px";
    cursor.style.top = dets.y +"px";
})
}

mousemover()

function Timelines(){
var tl = gsap.timeline()

tl.from(".navbar",{
    y:-40,
    duration:0.8,
    opacity:0,
    ease: "back.out(1.7)",
    stagger:0.8
})
tl.from(".lpage-1 h1 ",{
    x:-120,
    duration:0.5,
    opacity:0,
    ease: "back.out(1.7)",
})
tl.from(".lpage-1 h3",{
    x:-120,
    duration:0.5,
    opacity:0,
    ease: "back.out(1.7)",
})
tl.from(".lpage-1 i",{
    y:30,
    duration:0.3,
    opacity:0,
    ease: "back.out(1.7)",
    stagger:0.1,
})
tl.from("button",{
    y:20,
    duration:0.3,
    opacity:0,
    ease: "back.out(1.7)",
    stagger:0.1,
})
tl.from(".rpage-1 img",{
    opacity:0,
    duration:0.5,
})
}

Timelines()

function scrollAnimation(){
    gsap.to(".navbar",{
        height:"80px",
        duration:0.5,
        backgroundColor:"black",
        scrollTrigger:{
            trigger:".navbar",
            scroller:"body",
            start:"top -30%",
            end:"top -10%",
            scrub:3
        }
    })
    gsap.from(".leftpage-2 h4",{
        x:-100,
        duration:0.5,
        scrollTrigger:{
            trigger:".leftpage-2 h4",
            scroller:"body",
            start:"top 40%",
            end:"top 70%",
            scrub:3
        }
    })
    
    gsap.from(".leftpage-2 h1",{
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:".leftpage-2 h4",
            scroller:"body",
            start:"top 30%",
            end:"top 70%",
            scrub:3
        }
    })
    gsap.from(".mail , .location , hr",{
        opacity:0,
        duration:0.5,
        x:-20,
        scrollTrigger:{
            trigger:".leftpage-2 h4",
            scroller:"body",
            start:"top 10%",
            end:"top 50%",
            scrub:3
        }
    },"amin")
    gsap.from(".rightpage-2",{
        opacity:0,
        duration:0.5,
        x:20,
        scrollTrigger:{
            trigger:".leftpage-2 h4",
            scroller:"body",
            start:"top 10%",
            end:"top 50%",
            scrub:3
        }
    },"amin")
}

scrollAnimation()