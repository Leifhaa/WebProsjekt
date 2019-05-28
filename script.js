//Adds a start column to the board

var startCol = document.createElement("div");
startCol.setAttribute("id", "col_0");
startCol.setAttribute("class", "column");
document.getElementById("1col").appendChild(startCol);
startCol.innerHTML = "<div class='colTitle'>Doing</div>";
document.getElementById("col1").appendChild(startCol);


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

var addCol = document.getElementById("addColumn");
addCol.addEventListener("click", addColumn);

function addColumn() {

    var div = document.createElement('div');
    div.setAttribute("class", "column");
    div.setAttribute("ondrop", "drop(event)");
    div.setAttribute("ondragover", "dropItem(event)");
    div.innerHTML = "<div class='colTitle'>Doing</div>";

    colArr.push({
        id: "col_" + columnID,
        name: testColName
    });
    console.log(colArr);


    div.setAttribute("id", "col_" + columnID);

    // DELETE COL BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del_col" + columnID);
    div1.setAttribute("class", "delColStyle");
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

var testBtn = document.getElementById("testBtn");
testBtn.addEventListener("click", addCard);

function addCard() {
    var divHold = document.createElement("divHold");
    var div = document.createElement("div");
    div.setAttribute("class", "cardStyle");
    div.setAttribute("draggable", true);
    div.setAttribute("ondragstart", "drag(event)");
    div.innerHTML = testCardName;

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

    cardID += 1;

}

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
    if (targetClass == "column" ) {
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
