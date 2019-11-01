window.addEventListener("DOMContentLoaded", (e) => entryPoint(e));

let filter = "";

function onFilterClick(e) {  
    filter = elem.id.split("-")[1];
}

function onHeaderClick(e) {
    var style = e.target.parentElement.parentElement.querySelector("ul").style.display;
    e.target.parentElement.parentElement.querySelector("ul").style.display = style == "none" ? 'flex' : 'none';
}

function entryPoint(e) {

    let images = 

    let filters = document.querySelectorAll("ul.links li a");
    let sidebars = document.querySelectorAll("a.section-btn");

    sidebars.forEach((elem) => {
        elem.addEventListener("click", (e) => onHeaderClick(e));
        elem.parentElement.querySelector("ul").style.display = "none";
    });

    filters.forEach((elem) => {
        elem.addEventListener("click", (e) => onFilterClick(e));
    });

}