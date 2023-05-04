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
  });