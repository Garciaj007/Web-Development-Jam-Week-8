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

    let jsonData = JSON.parse(store-data);

    console.log(jsonData);

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

function loadJSON(callback) {
    let XMLJSON = new XMLHttpRequest();
    XMLJSON.overrideMimeType("../scripts");
    XMLJSON.open('GET', 'data-store.json', true);
    XMLJSON.onreadystatechange = () => {
        if(XMLJSON.readyState == 4 && XMLJSON.status == "200") {
            return new Promise(() => XMLJSON.responseText);
        }
    }
    XMLJSON.send(null);
}