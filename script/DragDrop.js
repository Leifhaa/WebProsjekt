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

    if (targetClass.includes("droptarget")) {
        dragEv.target.style.border = "3px dotted red";
    }
}

// WHEN CARD LEAVES COL DO THIS
function dragLeave(dragEv) {
    var targetClass = dragEv.target.className;

    if (targetClass.includes("droptarget")) {
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

    if (targetClass.includes("droptarget")) {
        dragEv.target.style.border = "";
    }

    //Always append the card to column, not to another card.
    if (targetClass.includes("column")) {
        var div = $("#" + targetId).closest('div[class*=columnBase]');
        div.append(dropElement);
    } else if (targetClass.includes("trash")) {
        dropElement.remove();

    } else if (targetClass.includes("card")) {
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
