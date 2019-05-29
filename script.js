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
    div.innerHTML = "<div class='column colTitle'>" + testColName + "</div>";
    var div = document.createElement('div');
    div.setAttribute("class", "column colStyle");
    div.setAttribute("ondrop", "drop(event)");
    div.setAttribute("ondragover", "dropItem(event)");




    colArr.push({
        id: "col_" + columnID,
        name: testColName
    });
    console.log(colArr);

    div.setAttribute("id", "col_" + columnID);

    // DELETE COL BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del_col" + columnID);
    div1.setAttribute("class", "column delColStyle");
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
    //var testCardName = prompt("Type the name of your card!");
    var div = document.createElement("div");
    div.setAttribute("class", "cardStyle");
    div.setAttribute("draggable", true);
    div.setAttribute("ondragstart", "drag(event)");


    // CARD TITLE
    var addCardTitle = document.createElement('input');
    addCardTitle.type = "text";
    addCardTitle.setAttribute("class", "editCardTitle");
    addCardTitle.setAttribute("id", "cardTitleTest");

    var cardTitleBtn = document.createElement('button');
    cardTitleBtn.addEventListener("click", addTitle);
    cardTitleBtn.innerHTML ="OK";





    // CREATES ID AND NAME IN cardArr
    cardArr.push({
        id: "card_" + cardID,
        name: testCardName
    });

    div.setAttribute("id", "card_" + cardID);
    // PRINTS THE ARRAY
    console.log(cardArr);



    // DELETE CARD BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del-card_" + cardID);
    div1.setAttribute("class", "delCardStyle");
    div1.setAttribute("onclick", "delCard(this.id)");
    div1.innerHTML = "<i class='fas fa-times'></i>";

    document.getElementById("col_0").appendChild(div);

    document.getElementById("card_" + cardID).appendChild(div1);
    document.getElementById("card_" + cardID).appendChild(addCardTitle);
    document.getElementById("card_" + cardID).appendChild(cardTitleBtn);

    cardID += 1;

}

function addTitle() {
    var titleValue = document.getElementById("cardTitleTest");
    var titleName = document.createElement("div");
    titleName.innerHTML = titleValue.value;


    /*var div = document.createElement("div");
    div.setAttribute("id", "lolid");
    div.innerHTML = "TEST TEST TEST TEST";*/

    document.getElementById("card_0").appendChild(titleName);



}

/*
    document.getElementById("card_" + cardID).appendChild(div);



    var titleValue = document.getElementById("editColTitle");
    var titlePlacement = document.getElementById("card_" + cardId);
    titlePlacement.innerHTML = titleValue.value;

    */

// DELETE CARD FUNCTION
function delCard(cardID) {
    var deleteCard = document.getElementById(cardID);
    deleteCard.parentNode.remove();
    cardArr.pop(delId);

}

/* DRAG EVENTS */

var tc = document.getElementById("col_0");
tc.setAttribute("ondrop", "drop(event)");
tc.setAttribute("ondragover", "dropItem(event)");

function dropItem(userInt) {
    userInt.preventDefault();
    if (userInt.target.getAttribute("draggable") == "true")
        userInt.dataTransfer.dropEffect = "none";
    else
        userInt.dataTransfer.dropEffect = "all";
}

function drag(userInt) {
    userInt.dataTransfer.setData("text", userInt.target.id);
}

function drop(userInt) {
	console.log("Dropped")
	console.log(userInt.target.className);
    userInt.preventDefault();
    var targetClass = userInt.target.className;
    var dropElement = userInt.dataTransfer.getData("text");

    //Always append the card to column, not to another card.
    if (targetClass.includes ("column")) {
    	userInt.target.append(document.getElementById(dropElement));
    }
    else{
    	//Duplicate parentNodes due to div 'deleteCard' causing multiple childs.
    	userInt.target.parentNode.parentNode.append(document.getElementById(dropElement));
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
