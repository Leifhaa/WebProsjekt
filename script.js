
// GENERATING ID FOR CARDS
var cardArr = [];
var testId = 0;
var testCardName = "Test Card";
var delId = 0;

// GENERATING ID FOR COLS
var colArr = [];
var testColId = 0;
var testColName = "Test Col";


/* ADD COLUMN */

var addCol = document.getElementById("addColumn");
addCol.addEventListener("click", addColumn);

function addColumn() {
    var div = document.createElement('div');

    div.setAttribute("class", "column");
    div.setAttribute("ondrop", "drop(event)");
    div.setAttribute("ondragover", "dropItem(event)");

    testColId += 1;
    colArr.push({id : testColId, name : testColName });
    for (var i = 0; i < colArr.length; i++) {
        testCol = i;
    }
    console.log(colArr);
    console.log(testCol);

    div.setAttribute("id", "test-column_" + testCol);

    // DELETE COL BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del-col");
    div1.setAttribute("onclick", "delCol()");
    div1.innerHTML = "x";


    document.getElementById("container").appendChild(div);
    document.getElementById("test-column_" + testCol).appendChild(div1);

}

    // DELETE COL FUNCTION
    function delCol() {
        var deleteColumn = document.getElementById("test-column_" + testCol);
        deleteColumn.parentNode.removeChild(deleteColumn);
        colArr.pop(testCol);
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
    cardArr.push({id : testId, name : testCardName });

    for (var i = 0; i < cardArr.length; i++) {
        delId = i;
    }
    console.log(delId);

    div.setAttribute("id", "test-card_" + delId);
    // PRINTS THE ARRAY
    console.log(cardArr);

    // DELETE CARD BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del-card");
    div1.setAttribute("onclick", "delCard()");
    div1.innerHTML = "x";

    document.getElementById("test-column_0").appendChild(div);
    document.getElementById("test-card_" + delId).appendChild(div1);


}

    // DELETE CARD FUNCTION
    function delCard() {
    var deleteCard = document.getElementById("test-card_" + delId);
    deleteCard.parentNode.removeChild(deleteCard);
    cardArr.pop(delId);


}

/* DRAG EVENTS */

var tc = document.getElementById("test-column_" + testCol);
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
