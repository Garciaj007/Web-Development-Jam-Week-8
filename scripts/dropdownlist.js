window.onload = pageReady;
function pageReady(){

var footerlist = document.getElementsByClassName("footer-links links");
var footerclothing = document.getElementById("footer-clothing");  
var clickvalue = false;

footerclothing.onclick = listshowup;
    
function listshowup() {
    if(clickvalue===false){
        console.log(footerlist[0]);
        footerlist[0].style.display = "block";
        clickvalue = true;
        }
    if(clickvalue===true){
        footerlist[0].style.display = "none";
        clickvalue = false;
    }
    
}   

    
    
    
}