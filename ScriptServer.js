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


var Card1 = {ID:"1", 
			Title:"TitleCard1", 
			Text:"TextCard1"
};



function sendAjax(){
                var xhr = new XMLHttpRequest;
				console.log('UNSENT: ', xhr.status);

				xhr.open('POST', '/',true);
				console.log('OPENED: ', xhr.status);

				xhr.onprogress = function () {
				  console.log('LOADING: ', xhr.status);
				};

				xhr.onload = function () {
				  console.log('DONE: ', xhr.status);
				};

				/*xhr.send();
				*/
				xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
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
 
 sendAjax()
 