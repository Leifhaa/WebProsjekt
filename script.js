// GENERATING ID FOR CARDS
var cardArr = [];
var testId = 0;
var testCardName = "Test Card";
var delId = 0;

// GENERATING ID FOR COLS
var colArr = [];
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
	columnID = colArr.length;
    div.setAttribute("class", "column");
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
    div1.setAttribute("onclick", "delCol(this.id)");
    div1.innerHTML = "x";

    document.getElementById("container").appendChild(div);
    document.getElementById("col_" + columnID).appendChild(div1);

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
    testId += 1;
    cardArr.push({
        id: testId,
        name: testCardName
    });

    for (var i = 0; i < cardArr.length; i++) {
        delId = i;
    }
    console.log(delId);

    div.setAttribute("id", "test-card_" + testCol);
    // PRINTS THE ARRAY
    console.log(cardArr);

    // DELETE CARD BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del-card");
    div1.setAttribute("onclick", "delCard()");
    div1.innerHTML = "x";

    document.getElementById("test-column").appendChild(div);
    document.getElementById("test-card").appendChild(div1);

}

// DELETE CARD FUNCTION
function delCard() {
    var deleteCard = document.getElementById("test-card_" + delId);
    deleteCard.parentNode.removeChild(deleteCard);
    cardArr.pop(delId);

}

/* DRAG EVENTS */

var tc = document.getElementById("test-column");
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
    userInt.preventDefault();
    var data = userInt.dataTransfer.getData("text");
    userInt.target.appendChild(document.getElementById(data));
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
