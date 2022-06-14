$(function(){
    window.addEventListener('scroll', reveal);
  
    function reveal(){
      var reveals = document.querySelectorAll('.animate-text');
  
      for(var i = 0; i < reveals.length; i++){
  
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 125;
  
        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
      }
    }
  })