/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/* function myFunction() {
  document.getElementById("footer-links links").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("footer-links links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */


/* var footerlinkslinks = document.getElementById("footer-links links");

function $(x) {return document.getElementById(x);} 

$(document).ready(function (footerlinkslinks) {
    $("li").click(function () {
        $('li > ul').hide();
        $(this).children("ul").toggle();
    });
}); */


function myFunction() {
  document.getElementById("footer-links links").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.footer-clothing')) {
  var myDropdown = document.getElementById("footer-links links");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}