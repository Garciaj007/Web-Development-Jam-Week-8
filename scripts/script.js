window.addEventListener("DOMContentLoaded", (e) => entryPoint(e));

let filter = "";

function onFilterClick(elem) {  
    filter = elem.id.split("-")[1];
    //console.log(filter);   
}

function onHeaderClick(elem) {
    var style = elem.parentElement.querySelector("ul").style.display;
    style = style == "none" ? "flex" : "none";
}

function entryPoint(e) {

    let filters = document.querySelectorAll("ul.links li a");
    let sidebars = document.querySelectorAll("a.section-btn");

    sidebars.forEach((elem) => {
        console.log(elem);
        document.addEventListener("click", onHeaderClick(elem));
        elem.parentElement.querySelector("ul").style.display = "none";
    });

    filters.forEach((elem) => {
        document.addEventListener("click", onFilterClick(elem));
    });

}