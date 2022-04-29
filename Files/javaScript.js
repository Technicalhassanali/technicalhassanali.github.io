let navbar = document.querySelector('header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

// 1. get value from localStorage
let darkmode = localStorage.getItem('darkmode');

//2.get button from click
let btn = document.getElementById('btn-dark');

//3.function enable dark mode arrow function
const enabledark = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkmode', 'enable');
  btn.innerHTML = "Dark Mode ON";

  /*when dark mode is on then they should be color change */
  let c = document.querySelectorAll(".output")
  for (i = 0; i < c.length; i++) {
    c[i].style.color = 'black';
  }

  let syntax = document.querySelectorAll(".syntax");
  for (i = 0; i < syntax.length; i++) {
    syntax[i].style.color = 'black';
  }

  let messageBox = document.querySelectorAll(".size"); //color of message box
  for (i = 0; i < messageBox.length; i++) {
    messageBox[i].style.color = 'black';
  }


}

//4.diabled dark mode arrow function
const disabledark = () => {
  document.body.classList.remove('dark');
  localStorage.removeItem('darkmode');
  btn.innerHTML = "Dark Mode OFF"
}


//5.add event listener for click

btn.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  if (darkmode !== 'enable') {
    enabledark();
  } else {
    disabledark();
  }

});

// If the user already visited and enabled darkMode
// start things off with it on
if (darkmode === 'enable') {
  enabledark();
}
//  Dark Mode End






var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// prespective demo of 3D transform
function changePersp(value) {
  document.getElementById('perspective-1').style.perspective = value + "px";
  document.getElementById('perspective-1').style.webkitPerspective = value + "px";
  document.getElementById('persp').innerHTML = value;
}

function changeOrgPersp() {
  var x = document.getElementById('operspx').value;
  var y = document.getElementById('operspy').value;
  document.getElementById('perspective-1').style.perspectiveOrigin = x + '% ' + y + '%';
  document.getElementById('perspective-1').style.webkitPerspectiveOrigin = x + '% ' + y + '%';
  document.getElementById('opersp').innerHTML = x + "% " + y + "%";
}