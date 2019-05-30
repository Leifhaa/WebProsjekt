//Adds a start column to the board

var startCol = document.createElement("div");
startCol.setAttribute("id", "col_0");
startCol.setAttribute("class", "column colStyle");
startCol.innerHTML = "<div id='colName' class='column colTitle'>Doing</div><button id='addCardBtn' class='btnStyle'><i class='fas fa-plus'></i></button>";
document.getElementById("container").appendChild(startCol);


var addColBtn1 = document.createElement("button");
addColBtn1.setAttribute("id", "addColumnBtn");
addColBtn1.setAttribute("class", "btnStyle");
addColBtn1.innerHTML = "<i class='fas fa-plus'></i>";
document.getElementById("head").appendChild(addColBtn1);


// GENERATING ID FOR CARDS
var cardArr = [];
var cardID = 0;
var testCardName = "Test Card";
var delId = 0;

// GENERATING ID FOR COLS
var colArr = [];
var columnID = 1;
var testColName = "Test Col";

//Test card
var Card1 = {
    ID: "1",
    Title: "TitleCard1",
    Text: "TextCard1"
};

/* ADD COLUMN */

var addCol = document.getElementById("addColumnBtn");
addCol.addEventListener("click", addColumn);

function addColumn() {
    var testColName = prompt("Type the name of your column!");
    var div = document.createElement('div');
    div.setAttribute("class", "column droptarget colStyle");

    div.setAttribute("ondrop", "drop(event)");
    div.setAttribute("ondragover", "dragOver(event)");
    div.setAttribute("ondragenter", "dragEnter(event)");
    div.setAttribute("ondragleave", "dragLeave(event)");
    div.innerHTML = "<div class='column colTitle'>" + testColName + "</div>";





    colArr.push({
        id: "col_" + columnID,
        name: testColName
    });
    console.log(colArr);

    div.setAttribute("id", "col_" + columnID);

    // DELETE COL BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del_col" + columnID);
    div1.setAttribute("class", "column delColIcon");
    div1.setAttribute("onclick", "delCol(this.id)");
    div1.innerHTML = "<i class='fas fa-times'></i>";

    document.getElementById("container").appendChild(div);
    document.getElementById("col_" + columnID).appendChild(div1);

	 columnID += 1;

}

// DELETE COL FUNCTION
function delCol(delID) {
    var deleteColumn = document.getElementById(delID);
    deleteColumn.parentNode.remove();
    colArr.pop(columnID);
    console.log(colArr)
}

/* EDIT COLUMN TEXT */

function toggleEditor() {
    var colText = document.getElementById("col-txt");
    var theEditor = document.getElementById("tf");
    var editorArea = document.getElementById("editor");
    var subject = colText.innerHTML;

    theEditor.value = subject;
    colText.style.display = "none";
    editorArea.style.display = "inline";
}

function doEdit() {
    var colText = document.getElementById('col-txt');
    var theEditor = document.getElementById('tf');
    var editorArea = document.getElementById("editor");
    var subject = theEditor.value;

    colText.innerHTML = subject;
    colText.style.display = "inline";
    editorArea.style.display = "none";
}

/* ADD CARD */

var addCardBtn = document.getElementById("addCardBtn");
addCardBtn.addEventListener("click", addCard);

function addCard() {
    //Card
    var div = document.createElement("div");
    div.setAttribute("class", "card cardContent cardID" + cardID);
    div.setAttribute("draggable", true);
    div.setAttribute("ondragstart", "drag(event)");
    div.setAttribute("id", "card_" + cardID);
    div.style.backgroundColor = "#E1E1E1";

    var cardTitle = document.createElement("div");
    cardTitle.setAttribute("id", "cardTitleText_" + cardID);
    cardTitle.setAttribute("class", "card cardID" + cardID);


    // CARD TITLE INPUT
    var addCardTitle = document.createElement('input');
    addCardTitle.type = "text";
    addCardTitle.setAttribute("class", "card cardID" + cardID);
    addCardTitle.setAttribute("id", "cardTitleInput_" + cardID);
    addCardTitle.setAttribute("onfocus", "this.value=''");
    addCardTitle.setAttribute("placeholder", "Name card");


	//CARD TITLE INPUT OK BUTTON
    var cardTitleBtn = document.createElement('button');
    cardTitleBtn.setAttribute("class","card cardOkBtn cardID" + cardID);
    cardTitleBtn.setAttribute("id","cardTitleBtn_" + cardID)
    cardTitleBtn.setAttribute("onclick", "addCardTitle(this.className)");
    cardTitleBtn.innerHTML ="Ok";

    //CARD TITLE INPUT CANCEL BUTTON
    var cardTitleBtnCancel = document.createElement('button');
    cardTitleBtnCancel.setAttribute("class","card cardCancelBtn cardID" + cardID);
    cardTitleBtnCancel.setAttribute("id","cardTitleBtnCancel_" + cardID)
    cardTitleBtnCancel.setAttribute("onclick", "delCard(this.id)");
    cardTitleBtnCancel.innerHTML ="Cancel";


    // CREATES ID AND NAME IN cardArr
    cardArr.push({
        id: "card_" + cardID,
        name: testCardName
    });

    // PRINTS THE ARRAY
    console.log(cardArr);





    // DELETE CARD BUTTON - NOT IN USE ATM
    /*
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del-card_" + cardID);
    div1.setAttribute("class", "card delCardIcon cardID" + cardID);
    div1.setAttribute("onclick", "delCard(this.id)");
    div1.innerHTML = "<i class='far fa-edit'></i>";
    */

    // EDIT CARD BUTTON
    var div2 = document.createElement("div");
    div2.setAttribute("id", "del-card_" + cardID);
    div2.setAttribute("class", "card editCardIcon cardID" + cardID);
    div2.setAttribute("onclick", "editCard()");
    div2.innerHTML = "<i class='far fa-edit'></i>";


    document.getElementById("col_0").appendChild(div);

    document.getElementById("card_" + cardID).appendChild(cardTitle);
    document.getElementById("card_" + cardID).appendChild(div2);
    document.getElementById("card_" + cardID).appendChild(addCardTitle);
    document.getElementById("card_" + cardID).appendChild(cardTitleBtn);
    document.getElementById("card_" + cardID).appendChild(cardTitleBtnCancel);

    cardID += 1;

}

function addCardTitle(csName) {
	var cardID

	var cardIDindx;
	if (csName.includes("cardID")){
		//Extract the classID of card
		cardIDindx = csName.indexOf("cardID") + 6;
		var nextSpc = csName.indexOf(' ',cardIDindx)
		if (nextSpc = -1){
			nextSpc = csName.length //There's no more spaces in str.
		}
		cardID = csName.substring(cardIDindx, nextSpc);
	}
	else{
		return;
	}
    var cardInputElem = document.getElementById("cardTitleInput_" + cardID);

    var cardState = document.getElementById("card_" + cardID);

    if (cardInputElem.value.length == 0) {

        //alert("You must add a card name");
        cardState.setAttribute("class", "cardContent cardContentError shake-horizontal");
        return false;

    } else {
        // CHANGES STATE COLOR ON CARD
        cardState.style.backgroundColor = "#f5f5f5";
    }

    var cardBtn = document.getElementById("cardTitleBtn_" + cardID);
    var cardBtnCancel = document.getElementById("cardTitleBtnCancel_" + cardID);
    var cardTitle = document.getElementById("cardTitleText_" + cardID);



    cardTitle.innerHTML = cardInputElem.value;
    cardInputElem.remove();
    cardBtn.remove();
    cardBtnCancel.remove();
   //document.getElementById("card_0").appendChild(titleName);



}

// DELETE CARD FUNCTION
function delCard(cardID) {
    var deleteCard = document.getElementById(cardID);
    deleteCard.parentNode.remove();
    cardArr.pop(delId);

}

function editCard() {

    var darkenPage = document.createElement("div");
    darkenPage.setAttribute("id", "darkenPage");

    var cardEditor = document.createElement("div");
    cardEditor.setAttribute("id", "cardEditorCont");

    var editorCloseBtn = document.createElement("div");
    editorCloseBtn.setAttribute("id", "editorCloseBtn");
    editorCloseBtn.setAttribute("class", "closeEditorIcon");
    editorCloseBtn.setAttribute("onclick", "closeEditor()");
    editorCloseBtn.innerHTML = "<i class='fas fa-times'></i>";

    document.getElementById("editorWrapper").appendChild(darkenPage);
    document.getElementById("editorWrapper").appendChild(cardEditor);
    document.getElementById("cardEditorCont").appendChild(editorCloseBtn);

}

// CLOSE EDITOR FUNCTION
function closeEditor() {
    var div = document.getElementById("darkenPage");
    var div1 = document.getElementById("cardEditorCont");

    div.parentNode.removeChild(div);
    div1.parentNode.removeChild(div1);


}

/* DRAG EVENTS */

var tc = document.getElementById("col_0");
tc.setAttribute("ondrop", "drop(event)");
tc.setAttribute("ondragover", "dragOver(event)");
tc.setAttribute("ondragenter", "dragEnter(event)");

// ADJUSTS TRASHCAN ICON
var cardTrash = document.getElementById("deleteObj");
cardTrash.setAttribute("ondrop", "drop(event)");
cardTrash.setAttribute("ondragover", "dragOver(event)");


function dragOver(dragEv) {
    cardTrash.setAttribute("class", "dragging");

    dragEv.preventDefault();
    if (dragEv.target.getAttribute("draggable") == "true")
        dragEv.dataTransfer.dropEffect = "none";
    else
        dragEv.dataTransfer.dropEffect = "all";

}

// WHEN CARD ENTERS COL DO THIS
function dragEnter(dragEv) {
    var targetClass = dragEv.target.className;

    if (targetClass.includes ("droptarget")) {
        dragEv.target.style.border = "3px dotted red";
	}
}

// WHEN CARD LEAVES COL DO THIS
function dragLeave(dragEv) {
    var targetClass = dragEv.target.className;

    if (targetClass.includes ("droptarget")) {
    dragEv.target.style.border = "";
  }

}

// WHEN DRAG ENDS
function dragEnd(dragEv) {




}

function drag(dragEv) {

    dragEv.dataTransfer.setData("text", dragEv.target.id);



}

function drop(dragEv) {
	console.log("Dropped")
	console.log(dragEv.target.className);
    dragEv.preventDefault();
    var targetId = dragEv.target.id;
    var targetClass = dragEv.target.className;
    var dropElementText = dragEv.dataTransfer.getData("text");
    var dropElement = document.getElementById(dropElementText);

    var targetClass = dragEv.target.className;

    if (targetClass.includes ("droptarget")) {
    dragEv.target.style.border = "";
  }


    //Always append the card to column, not to another card.
    if (targetClass.includes ("column")) {
    	dragEv.target.append(dropElement);
    }
    else if (targetClass.includes("trash")){
    	dropElement.remove();

    }
    else if (targetClass.includes("card")){
    	//Card has nested div's.. Append card to the closest 'column' class
    	var div = $("#" + targetId).closest('div[class*=column]');
    	div.append(dropElement);
    }
}

function sendAjax() {
    var xhr = new XMLHttpRequest;
    console.log('UNSENT: ', xhr.status);

    xhr.open('POST', '/', true);
    console.log('OPENED: ', xhr.status);

    xhr.onprogress = function() {
        console.log('LOADING: ', xhr.status);
    }
    ;

    xhr.onload = function() {
        console.log('DONE: ', xhr.status);
    }
    ;

    /*xhr.send();
				*/
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    jsonSend = JSON.stringify(Card1);
    console.log(jsonSend);
    xhr.send(jsonSend);

    /**
				 * Outputs the following:
				 *
				 * UNSENT: 0
				 * OPENED: 0
				 * LOADING: 200
				 * DONE: 200
				 */

    /*xhr.onreadystatechange = function(){
                    if(xhr.readyState==4 && xhr.status == 200){
                        console.log(xhr.responseText);
                    }
                }
				*/

}

//sendAjax()
