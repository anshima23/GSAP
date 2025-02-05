function page1Animation(){
    var tl = gsap.timeline();

tl.from("nav h1,nav h4, nav button",{
    y:-40,
    duration:0.5,
    delay:0.2,
    opacity:0,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-100,
    opacity:0,
    duration:0.5,
},"-=0.3")

    
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
})
   
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4,
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5
},"-=1")
}

