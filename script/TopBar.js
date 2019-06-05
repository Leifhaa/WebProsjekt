var addColBtn1 = document.createElement("button");
addColBtn1.setAttribute("id", "addColumnBtn");
addColBtn1.setAttribute("class", "btnPlus");
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



// NEW Board

function newBoard() {

    //darkBg while new board question is open
    var qBg = document.createElement("div");
    qBg.setAttribute("id","cardEditBg");

    // APPENDS THE DARK BG TO body
    test2 = document.body;


    //new question container
	var qCont = document.createElement("div");
	qCont.setAttribute("id","dialogueBox");
	qCont.setAttribute("class","bounceIn");

    var qIcon = document.createElement("div");
    qIcon.setAttribute("id", "qIcon");
    qIcon.innerHTML = "<i class='fas fa-exclamation'></i>"

    var qText = document.createElement("div");
    qText.setAttribute("id","qMessage");
    qText.innerHTML = "Do you really want to create a new board?"

    var qBtnCont = document.createElement("div");
    qBtnCont.setAttribute("id","qBtnCont");

    var qButtonOk = document.createElement("button");
    qButtonOk.setAttribute("id","qButtonOk");
    qButtonOk.setAttribute("class", "btn");
    qButtonOk.setAttribute("onclick", "window.location.href = 'board.html'");

    qButtonOk.innerHTML = "Confirm";

    var qButtonCancel = document.createElement("button");
    qButtonCancel.setAttribute("id","qButtonCancel");
    qButtonCancel.setAttribute("class", "btn");
    qButtonCancel.setAttribute("onclick", "qClose()");
    qButtonCancel.innerHTML = "Cancel";

    test2.appendChild(qBg);
    test2.appendChild(qCont);
    qCont.appendChild(qIcon);
    qCont.appendChild(qText);
    qCont.appendChild(qBtnCont);
    qBtnCont.appendChild(qButtonOk);
    qBtnCont.appendChild(qButtonCancel);

}

    function qClose() {
        var elem = document.querySelector('#cardEditBg');
        var elem1 = document.querySelector('#dialogueBox');
        elem.parentNode.removeChild(elem);
        elem1.parentNode.removeChild(elem1);
    }


function endSession() {
  document.getElementById("dropDown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
