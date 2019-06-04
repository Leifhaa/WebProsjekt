var addColBtn1 = document.createElement("button");
addColBtn1.setAttribute("id", "addColumnBtn");
addColBtn1.setAttribute("class", "btnStyle");
addColBtn1.innerHTML = "<i class='column fas fa-plus'></i>";
document.getElementById("head").appendChild(addColBtn1);

/*
function smallA(){
    var body = document.getElementsByTagName("BODY")[0];
    body.style.fontSize = "62.5%";

}

function largeA(){
    var body = document.getElementsByTagName("BODY")[0];
    body.style.fontSize = "82.5%";

}
*/
/*
function resizeFont(multiply) {
  var sz = document.body.style.fontSize;
  if (sz =='') sz = "65.5%"; //default font size

  var size = parseFloat(sz) + (multiply * 20) + "%";
  document.body.style.fontSize = size;
}
*/
document.body.style.fontSize = "62.5%";
function resizeText(multiply) {

    var bodyFontsize = document.body.style.fontSize;

    if(bodyFontsize === "62.5%") {
        var size = parseFloat(bodyFontsize) + (multiply * 20) + "%";
        document.body.style.fontSize = size;
    } else {
        document.body.style.fontSize = "62.5%";
    }
}


function swapStyleSheet(sheet){
       document.getElementById('pagestyle').setAttribute('href', sheet);
   }
