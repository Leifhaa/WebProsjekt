/* DRAG EVENTS */


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
        dragEv.target.style.border = "3px solid #4caf50";
        dragEv.target.style.backgroundColor = "#f2f2f2";
    }
}

// WHEN CARD LEAVES COL DO THIS
function dragLeave(dragEv) {
    var targetClass = dragEv.target.className;


    if (targetClass.includes("droptarget")) {
        dragEv.target.style.border = "";
        dragEv.target.style.backgroundColor = "";
    }

}

// WHEN DRAG ENDS
function dragEnd(dragEv) {
    cardTrash.removeAttribute("class", "dragging");
}

function drag(dragEv) {

    //dragEv.dataTransfer.setData("text", dragEv.target.id);
}


function RevertDrag(event) {
	if (event == false){
		//No event
		return true;
	}
	var targetClass = event[0].className;
	if (targetClass.includes("Column")){
		return true;
	}
	else{
		return false;
	}
}

function drop(dragEv, ui )  {
    console.log("Dropped")
    console.log(dragEv.target.className);
    var targetId = dragEv.target.id;
    var targetClass = dragEv.target.className;
    var dropElementId = ($(ui.draggable).attr("id"));
    var dropElement = document.getElementById(dropElementId);
    dragEv.target.style.border = "";
    dragEv.target.style.backgroundColor = "";



    if (targetClass.includes("droptarget")) {
        dragEv.target.style.border = "";
        dragEv.target.style.backgroundColor = "";
    }

    //Always append the card to column, not to another card.
    if (targetClass.includes("column")) {
        var div = $("#" + targetId).closest('div[class*=columnBase]')[0];
        var childOlList = $(div).find('ol')[0];
        childOlList.append(dropElement);
    } else if (targetClass.includes("trash")) {
        dropElement.remove();

    } else if (targetClass.includes("card")) {
        //Card has nested div's.. Append card to the closest 'column' class
        var div = $("#" + targetId).closest('div[class*=column]');
        div.append(dropElement);
    }

    $(this).append(ui.draggable);
    $(ui.draggable).css({"left": "0", "top": "0"});





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
