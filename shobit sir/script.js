let mosueFollow = document.querySelector("#mouse");
let heading = document.querySelector("main .slid");
let courseInfo = document.querySelector("#course-info");
let coursebtn = document.querySelector("#course-info .col button");
let slideBtn = document.querySelectorAll("#course-info li .course")
let slidePage = document.querySelectorAll("#course-info li")
let sidebar = document.querySelector("#list");
let sidebox = document.querySelector("#nav-list-link");
let callback = document.querySelector("#calling");
let callXIcon = document.querySelector(".call-x-icon")
const body = document.body;
let lastScroll = 0;
var tl = gsap.timeline();
tl.from("nav #logo", {
    y: -40,
    opacity: 0
})
tl.from("nav #list", {
    y: -40,
    opacity: 0,
    stagger: 0.2
})
tl.from("#follow-me .col span", {
    y: -40,
    opacity: 0,
    stagger: 0.2,
    scale:2,
})
tl.from("main .col h1", {
    y: 40,
    opacity: 0,
    stagger: 0.2
})
tl.from("main .side-text", {
    x: 40,
    opacity: 0,
    stagger: 0.2
})
tl.from("#calling", {
    x: -40,
    opacity: 0,
    stagger: 0.2
})

body.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    gsap.to("#mouse", {
        x: x,
        y: y,
        opacity: 1
    })
    heading.addEventListener("mouseenter", function () {
        gsap.to("#mouse", {
            x: x,
            y: y,
            clipPath:"polygon(50% 0%, 66% 27%, 98% 35%, 80% 61%, 79% 91%, 51% 75%, 21% 91%, 23% 63%, 2% 35%, 35% 28%)",
            scale: 6
        })
    })
    heading.addEventListener("mouseleave", function () {
        gsap.to("#mouse", {
            x: x,
            y: y,
            clipPath:"none",
            scale: 1
        })
    })


})


window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
    ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
});





// side nav bar code
var tl = gsap.timeline();

tl.to("#nav-list-link", {
    right:0,
    duration:0.1
})
tl.from("#nav-list-link li" , {
    x:550,
    duration:1,
    stagger:0.5,
    opacity:0
})
tl.pause()
sidebar.addEventListener("click" , function(){
  tl.play()
    
})
sidebox.children[0].addEventListener("click" , function(){
   tl.reverse()
})



var tut = gsap.timeline();
tut.from("#tutor .col-2" , {
    y:-200,
    width:"40%",
    stagger:0.2,
    duration:4,
opacity:0,
scrollTrigger: {
    trigger: "#tutor", 
    start: "top 30%", 
    end: "top 10%",
    scrub: true, 
    
  }

    })

tut.from("#tutor .col-1" , {
y:100,
scale:0,
stagger:0.2,
opacity:0,
duration:1,
scrollTrigger: {
    trigger: "#tutor", 
    start: "top 30%", 
    end: "top 10%", 
    scrub: 2,
   
  }
})


gsap.from("#Page p" , {
    opacity:0,
   x:-100,
    scrollTrigger:{
        trigger: "#Page", 
        start: "top 60%", 
        end: "top 40%", 
        scrub: 3,
       
    }
})

gsap.from("#Page .col" , {
    opacity:0,
   x:-100,
    duration:0.5,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#Page", 
        start: "top 30%", 
        end: "top 10%", 
        scrub: 3,
    }
})

gsap.to("#students" , {
    transform:" translateX(-60%)",
    duration:3,
    scrollTrigger:{
        trigger:"#student-reviews",
        start:"top 30%",
        end:"bottom -10%",
        scrub:2,
        pin:true
    }
})

var cl  = gsap.timeline();
cl.to("#calling-form" , {
  left:"0%",
  opacity:1,
  scale:1,
    duration:0.8,
})

cl.pause();

callback.addEventListener("click" , function(e){
    e.preventDefault();
    cl.play();
})

callXIcon.addEventListener("click" , function(){
    cl.reverse();
})