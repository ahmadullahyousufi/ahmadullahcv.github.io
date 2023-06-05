

  //navbar color changes on change
const homelink=document.getElementById('homelink');
homelink.addEventListener('click', function(){
    document.getElementById('homelink').style.color='white'
    document.getElementById('skillslink').style.color='#a43ab2'
    document.getElementById('contactlink').style.color='#a43ab2'
    document.getElementById('about').style.color='#a43ab2'
})
const skillslink=document.getElementById('skillslink');
skillslink.addEventListener('click', function(){
    document.getElementById('homelink').style.color='white'
    document.getElementById('skillslink').style.color='black'
    document.getElementById('contactlink').style.color='#a43ab2'
    document.getElementById('about').style.color='#a43ab2'
})
const contactlink=document.getElementById('contactlink');
contactlink.addEventListener('click', function(){
    document.getElementById('homelink').style.color='white'
    document.getElementById('skillslink').style.color='#a43ab2'
    document.getElementById('contactlink').style.color='black'
    document.getElementById('about').style.color='#a43ab2'

})
const aboutlink=document.getElementById('about');
aboutlink.addEventListener('click', function(){
  document.getElementById('homelink').style.color='white'
  document.getElementById('skillslink').style.color='#a43ab2'
  document.getElementById('contactlink').style.color='#a43ab2'
  document.getElementById('about').style.color='black'
})
  var typed = new Typed('#element', {
    strings: ['<i>Web designer.</i>', " Web developer."," Software Engineer."],
    typeSpeed: 30,
    backspeed:50,
    loop:true,
  });


// Get the button
let mybutton = document.getElementById("myBtn");
//change all navbar color to whtie
mybutton.addEventListener('click', function(){
  document.getElementById('homelink').style.color='white'
    document.getElementById('skillslink').style.color='#a43ab2'
    document.getElementById('contactlink').style.color='#a43ab2'
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


