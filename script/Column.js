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

function startDrag(){
            $("").css('min-height', '300px');

}

function addColumn() {
    var testColName = prompt("Type the name of your column!");
    var div = document.createElement('div');
    div.setAttribute("class", "columnBase column droptarget colStyle");
    div.setAttribute("id", "col_" + columnID);


    
    $(div).disableSelection();

    $(div).droppable( {
        drop: drop,
        hoverClass: 'colHovered',
        activate: startDrag,
        over: function(event, ui) {
                   //ui.helper.css("border", "2px solid green")
               },
        out: function(event, ui) {
                         // ui.helper.css("border", "2px solid red")
                      }
    } );
/*
    $(div).animate( {
        start: function(event, ui) {
            $(ui.droppable).css('height', '300px');
        },
        stop: function(event, ui) {
            $(ui.droppable).css('height', '100px');
        }
    });
    */





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


    //Add a orderList
    var orderList = document.createElement("ol");
    orderList.setAttribute("id","colOl" + columnID);
    orderList.setAttribute("class","sortOl");


    $(orderList).sortable({

        placeholder: 'sortableStyle'
        // SLIDE ANIMATION
        /*    start: function (e,ui){
        $(ui.placeholder).slideUp(200);
    },
    change: function (e,ui){
    $(ui.placeholder).hide().slideDown(200);
    }*/

    });

    div.appendChild(orderList);


    //Add a orderList which only contains newlyCreatedCards.
    var orderListNewCard = document.createElement("ol");
    orderListNewCard.setAttribute("id","colOl" + columnID + "NewCard");
    orderListNewCard.setAttribute("class","sortOlNewCard");
    div.appendChild(orderListNewCard);


    // DELETE COL BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del_col_" + columnID);
    div1.setAttribute("class", "column delColIcon");
    div1.setAttribute("onclick", "delCol(this.id)");
    div1.innerHTML = "<i id = 'delColIcon_" + columnID + "' class='column colDelete fas fa-times'></i>";


    document.getElementById("container").appendChild(div);
    document.getElementById("col_" + columnID).appendChild(div1);

    if (colArr.length == 1){
     createAddCardButton(div);
    }

    columnID += 1;


}

// DELETE COL FUNCTION
function delCol(delID) {
    delID = delID.replace("del_",'');
    var deleteColumn = document.getElementById(delID);
    var indexOfColumn = colArr.findIndex(i => i.id === delID);
    if (indexOfColumn == 0 && colArr.length > 1){
        colArr.splice(indexOfColumn, 1);
        createAddCardButton(colArr[1]);
    }
    else if (colArr.length > 1) {
        colArr.splice(indexOfColumn, 1);
    }
    deleteColumn.remove();
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

function createAddCardButton(ColumnId){
    //Add card button (Always set column array index 0 as the column where we can add new card)
	if (colArr.length > 0){
	    var columnToAddBtn = document.getElementById(colArr[0].id);
    }
    else{
        return ; //Means there's no columns.
    }
    //Find the Ol of the column

    var ColumnOlId = $(columnToAddBtn).find('ol')[0];

    btnElem = document.createElement("button")
    btnElem.setAttribute("id","addCardBtn");
    btnElem.setAttribute("class","btnStyle");
    btnElem.innerHTML = ("<i class='fas fa-plus'></i>")
    columnToAddBtn.appendChild(btnElem);

    btnElem.addEventListener("click",function(){
       addCard(columnToAddBtn)
    });

}
