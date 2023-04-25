gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('.life');
const textElements = container.querySelectorAll('h2, .life-para, .explore2');

// Create a timeline that targets the container and its text elements
const tl = gsap.timeline({paused: true});

// Fade in the container with a delay of 0.5 seconds
tl.fromTo(container, { opacity: 0 }, { opacity: 1, delay: 0.5 });

// Fade in each text element with a stagger of 0.2 seconds
tl.staggerFromTo(textElements, 0.5, { opacity: 0, x: -20 }, { opacity: 1, x: 0 }, 0.2);

// Add a scroll trigger to the container that plays the timeline when it enters the viewport
ScrollTrigger.create({
  trigger: container,
  start: 'top 80%',
  end : 'bottom 50%',
  onEnter: () => tl.play(),
  toggleActions : 'play none none reverse',
});


gsap.fromTo(".life-img",{
    opacity : 0,
    y : 30,
 },{
    opacity : 1,
    y : 0,
    duration : 0.5,
    ease : Power2.easeInOut,
    scrollTrigger : {
     trigger : ".life-img",
     start : 'top 50%',
     toggleActions : 'play none none reverse',
     end : 'bottom 50%',

    }
 });

 const plover = document.querySelectorAll('h3, .plover-para');

 plover.forEach(function(plover) {
    gsap.fromTo(plover,{
       opacity : 0,
       y : 30,
    },{
       opacity : 1,
       y : 0,
       duration : 0.5,
       stagger : 0.1,
       ease : Power2.easeInOut,
       scrollTrigger: {
        trigger: plover,
        start: 'top 50%', // adjust this value as needed
        end: 'bottom 50%',
        toggleActions : 'play none none reverse',
      }
    });
});

const vid = document.querySelectorAll('video');

vid.forEach(function(vid) {
    gsap.fromTo(vid,{
       opacity : 0,
       y : 30,
    },{
       opacity : 1,
       y : 0,
       duration : 0.5,
       stagger : 0.3,
       ease : Power2.easeInOut,
       scrollTrigger : {
        trigger : vid,
        start : 'top 50%',
        end : 'bottom 50%',
    
        toggleActions : 'play none none reverse',
       }
    });
});

const container2 = document.querySelector('.no-text');
const textElements2 = container2.querySelectorAll('.no-div');

// Create a timeline that targets the container2 and its text elements
const tl2 = gsap.timeline({paused: true});

// Fade in the container2 with a delay of 0.5 seconds
tl2.fromTo(container2, { opacity: 0 }, { opacity: 1, delay: 0.5 });

// Fade in each text element with a stagger of 0.2 seconds
tl2.staggerFromTo(textElements2, 0.5, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0.2);

// Add a scroll trigger to the container2 that plays the timeline when it enters the viewport
ScrollTrigger.create({
  trigger: container2,
  start: 'top 50%',
  end : 'bottom 60%',
  toggleActions : 'play none none reverse',
  onEnter: () => tl2.play(),
});

gsap.fromTo("h4",{
    opacity : 0,
    y : 30,
 },{
    opacity : 1,
    y : 0,
    duration : 0.5,
    stagger : 0.1,
    ease : Power2.easeInOut,
    scrollTrigger : {
     trigger : "h4",
     start : 'top 50%',
     end : 'bottom 50%',
     toggleActions : 'play none none reverse',

    }
 });

    gsap.fromTo(".no-img",{
       opacity : 0,
       x : -30,
    },{
       opacity : 1,
       x : 0,
       duration : 0.5,
       stagger : 0.1,
       ease : Power2.easeInOut,
       scrollTrigger : {
        trigger : ".no-img",
        start : 'top 50%',
        end : 'bottom 50%',
        toggleActions : 'play none none reverse',
    
       }
    });