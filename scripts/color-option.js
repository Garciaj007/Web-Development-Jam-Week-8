/** LAB 6-1 IMAGE MOUSEOVER GALLERY*/
//CREATE AN ONLOAD LISTENER
window.onload = pageReady;

//CREATE AN ONLOAD FUNCTION TO HOLD OUR CODE THAT NEEDS THE document OBJECT.
function pageReady(){

	//CREATE A HANDLE FOR THE MAIN IMAGE
	var bigImage = document.getElementById("mainImg");

	//GET THE GALLERY IMAGES
	var image1 = document.getElementById("pic1");
	var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");
    var image4 = document.getElementById("pic4");
	var image5 = document.getElementById("pic5");
	var image6 = document.getElementById("pic6");
    
    var color1 = document.getElementById("col1");
    var color2 = document.getElementById("col2");
    var color3 = document.getElementById("col3");
    var color4 = document.getElementById("col4");
    var color5 = document.getElementById("col5");
    var color6 = document.getElementById("col6");
    
	var descrip = document.getElementById("decrip");
	
	let hello = {
		name: "hello"
	}
    
    
	//image4
	//image5
	//image6

	//SETUP LISTENERS FOR THE GALLERY IMAGES
	color1.onclick = switchPic1;
	color2.onclick = switchPic2;
	color3.onclick = switchPic3;
    color4.onclick = switchPic4;
	color5.onclick = switchPic5;
	color6.onclick = switchPic6;

	//CREATE FUNCTIONS TO CHANGE PICTURES
	function switchPic1(){
		bigImage.src = image1.src;
        document.getElementById("decription-color").innerHTML = "White";
	}

	function switchPic2(){
		bigImage.src = image2.src;
        document.getElementById("decription-color").innerHTML = "Black";
	}

	function switchPic3(){
		bigImage.src = image3.src;
        document.getElementById("decription-color").innerHTML = "Red";
	}
    function switchPic4(){
		bigImage.src = image4.src;
        document.getElementById("decription-color").innerHTML = "Green";
	}

	function switchPic5(){
		bigImage.src = image5.src;
        document.getElementById("decription-color").innerHTML = "Purple";
	}

	function switchPic6(){
		bigImage.src = image6.src;
        document.getElementById("decription-color").innerHTML = "Blue";
	}
    
    //size
    var size = document.getElementById("size");
    var style = document.getElementById("style");
    
    size.onchange = displaysize;
    style.onchange = displaystyle;
    
    function displaysize()
{
    document.getElementById("decription-size").innerHTML = //size.options[size.selectedIndex].value;
    //console.log(size.value);
    size.value;
}
    
    function displaystyle()
{
    document.getElementById("decription-style").innerHTML = //size.options[size.selectedIndex].value;
    //console.log(size.value);
    style.value;
}


	//CREATE FUNCTION TO RESET IMAGE
	// function resetPic(){
	//		bigImage.src = "images/tshirt-white.png";
	//}

	//RESET THE IMAGE WHEN MOUSE LEAVES
	//SETUP LISTENERS
	//image1.onmouseout = resetPic;
	//image2.onmouseout = resetPic;
	//image3.onmouseout = resetPic;
	//
	//
	//
}//END onload FUNCTION