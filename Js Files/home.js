
  var slider = document.querySelector(".slider");
  var slides = slider.querySelectorAll(".slide");
  
  // Set the current slide index to 0
  var currentSlide = 0;
  
  // Define the functions to show the previous and next slide
  function prevSlide() {
    // Decrement the current slide index
    currentSlide--;
  
    // If the current slide index is less than 0, wrap around to the last slide
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
  
    // Show the current slide
    showSlide(currentSlide);
  }
  
  function nextSlide() {
    // Increment the current slide index
    currentSlide++;
  
    // If the current slide index is greater than the number of slides, wrap around to the first slide
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
  
    // Show the current slide
    showSlide(currentSlide);
  }
  
  // Define a function to show a slide
  function showSlide(index) {
    // Hide all the slides
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    // Show the slide with the given index
    slides[index].style.display = "block";
  }
  
  // Add a click handler for the "View Creator" button
  var viewCreatorButton = document.querySelector(".view-creator");
  viewCreatorButton.addEventListener("click", function() {
    // Get the creator name or ID of the current slide
    var currentSlideCreator = slides[currentSlide].getAttribute("data-creator");
  });  
   
  

function search() {
  var input, filter, ul, li, a, i;
  input = document.querySelector(".search");
  filter = input.value.toUpperCase();
  ul = document.querySelector('.myMenu');
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

const back = document.querySelector(".back");
const menu = document.querySelector('.menu');
const menudiv = document.querySelector(".menu-div");

back.addEventListener('click',function(){
  gsap.to(".menu-div",{
    x : '40%',
    duration : 1,
    delay : 0
  });
});

menu.addEventListener('click',function(){
  gsap.to(".menu-div",{
    x : '-40%',
    duration : 1,
    delay : 0,
  })
})