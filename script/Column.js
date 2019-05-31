//Adds a start column to the board


// GENERATING ID FOR COLS
var colArr = [];
var columnID = 0;
var testColName = "Test Col";

//Test card
var Card1 = {
    ID: "1",
    Title: "TitleCard1",
    Text: "TextCard1"
};

/* ADD COLUMN */
addColumn()

var addCol = document.getElementById("addColumnBtn");
addCol.addEventListener("click", addColumn);

function addColumn() {
    var testColName = prompt("Type the name of your column!");
    var div = document.createElement('div');
    div.setAttribute("class", "columnBase column droptarget colStyle");


    $(div).droppable( {
        drop: drop
    } );
    //div.setAttribute("ondrop", "drop(event)");
    //div.setAttribute("ondragover", "dragOver(event)");
    //div.setAttribute("ondragenter", "dragEnter(event)");
    //div.setAttribute("ondragleave", "dragLeave(event)");
    div.innerHTML = "<div id = 'colTitle_" + columnID +"' class='column colTitle'>" + testColName + "</div>";

    colArr.push({
        id: "col_" + columnID,
        name: testColName
    });
    console.log(colArr);

	if (columnID == 0){
	   div.innerHTML = "<div id='colName' class='column colTitle'>" + testColName + "</div><button id='addCardBtn' class='btnStyle'><i class='fas fa-plus'></i></button>";
    }
    div.setAttribute("id", "col_" + columnID);

    // DELETE COL BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del_col" + columnID);
    div1.setAttribute("class", "column delColIcon");
    div1.setAttribute("onclick", "delCol(this.id)");
    div1.innerHTML = "<i id = 'delColIcon_" + columnID + "' class='column colDelete fas fa-times'></i>";


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
