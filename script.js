/* DRAG EVENTS */

var tc = document.getElementById("test-column");
tc.setAttribute("ondrop", "drop(event)");
tc.setAttribute("ondragover", "dropItem(event)");



function dropItem(userInt) {
    userInt.preventDefault();
}

function drag(userInt) {
    userInt.dataTransfer.setData("text", userInt.target.id);
}

function drop(userInt) {
    userInt.preventDefault();
    var data = userInt.dataTransfer.getData("text");
    userInt.target.appendChild(document.getElementById(data));
}

/* ADD CARD */

var testBtn = document.getElementById("testBtn");
testBtn.addEventListener("click", addCard);

function addCard() {
    var divHold = document.createElement('divHold');

    var div = document.createElement('div');
    div.setAttribute("id", "test-card")
    div.setAttribute("draggable", true);
    div.setAttribute("ondragstart", "drag(event)");
    div.innerHTML = "Test Card";
    document.getElementById("test-column").appendChild(div);



}

/* ADD COLUMN */

var addCol = document.getElementById("addColumn");
addCol.addEventListener("click", addColumn);

function addColumn() {
    var div = document.createElement('div');
    div.setAttribute("id", "test-column-2")
    div.setAttribute("ondrop", "drop(event)");
    div.setAttribute("ondragover", "dropItem(event)");
    document.getElementById("container").appendChild(div);

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
