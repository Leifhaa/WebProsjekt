/* DRAG EVENTS */
var cnter = 0;

function dragOver(dragEv) {

    dragEv.preventDefault();
    if (dragEv.target.getAttribute("draggable") == "true")
        dragEv.dataTransfer.dropEffect = "none";
    else
        dragEv.dataTransfer.dropEffect = "all";

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
    var targetId = dragEv.target.id;
    console.log(dragEv.target.id);
    var targetClass = dragEv.target.className;
    var dropElementId = ($(ui.draggable).attr("id"));
    var dropElement = document.getElementById(dropElementId);
    var dropColumnQueryRes = $("#" + targetId).closest('div[class*=columnBase]')


 	if (targetId.includes("trash")) {
    	
    	//Save the setting of revert option (for sortable columns)
    	
    }

}


var trashcanButton = document.getElementById("trashcanButton");


$(trashcanButton).droppable( {
    drop: drop,
    hoverClass: 'trashHovered',
    activate: startDrag,
    over: function(event, ui) {
               //ui.helper.css("border", "2px solid green")
           },
    out: function(event, ui) {
                     // ui.helper.css("border", "2px solid red")
                  }
} );

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
