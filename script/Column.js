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

// COLUMN SILHOUETTE CONTAINER
var colSilhouetteC = document.createElement("div");
    colSilhouetteC.setAttribute("id", "colSilhouetteCont");
    colSilhouetteC.setAttribute("onclick", "addColumn()");
    document.getElementById("newColContainer").appendChild(colSilhouetteC);
    colSilhouetteC.setAttribute("class","newcol animated fadeInUp");

var colSilhouette = document.createElement("div");
    colSilhouette.setAttribute("id", "colSilhouette");
    colSilhouetteC.appendChild(colSilhouette);

var colSilText = document.createElement("div");
    colSilText.setAttribute("id", "colSilText");
    colSilText.innerHTML = "Add new column"
    colSilhouette.appendChild(colSilText);

var colSilButton = document.createElement("button");
    colSilButton.setAttribute("id", "colSilButton");
    colSilButton.setAttribute("class", "btnStyle")
    colSilButton.innerHTML = "<i class='fas fa-plus'></i>";
    colSilhouette.appendChild(colSilButton);




/* ADD COLUMN */


var addCol = document.getElementById("addColumnBtn");
addCol.addEventListener("click", newBoard);

function startDrag(){
            $("").css('min-height', '300px');

}

function addColumn() {
    var div = document.createElement('div');
    div.setAttribute("class", "columnBase column droptarget colStyle animated fadeInUp");
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
    // CARD TITLE INPUT
    var addColTitle = document.createElement('input');
    addColTitle.type = "text";
    addColTitle.setAttribute("class", "column colID" + columnID);
    addColTitle.setAttribute("id", "colTitleInput_" + columnID);
    addColTitle.setAttribute("onfocus", "this.value=''");
    addColTitle.setAttribute("placeholder", "Name column");

    //CARD TITLE INPUT OK BUTTON
    var colTitleBtn = document.createElement('button');
    colTitleBtn.setAttribute("class", "column colOkBtn colID" + columnID);
    colTitleBtn.setAttribute("id", "colTitleBtn_" + columnID)
    colTitleBtn.setAttribute("onclick", "addColTitle(this)");
    colTitleBtn.innerHTML = "Ok";

    //CARD TITLE INPUT CANCEL BUTTON
    var colTitleBtnCancel = document.createElement('button');
    colTitleBtnCancel.setAttribute("class", "column colCancelBtn cardID" + columnID);
    colTitleBtnCancel.setAttribute("id", "colTitleBtnCancel_" + columnID)
    colTitleBtnCancel.setAttribute("onclick", "delCard(this.id)");
    colTitleBtnCancel.innerHTML = "Cancel";




    //div.setAttribute("ondrop", "drop(event)");
    //div.setAttribute("ondragover", "dragOver(event)");
    //div.setAttribute("ondragenter", "dragEnter(event)");
    //div.setAttribute("ondragleave", "dragLeave(event)");
        div.innerHTML = "<div id = 'colTitle_" + columnID +"' class='column colTitle'></div>";


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


    document.getElementById("colContainer").appendChild(div);
    document.getElementById("col_" + columnID).appendChild(div1);

    document.getElementById("col_" + columnID).appendChild(addColTitle);
    document.getElementById("col_" + columnID).appendChild(colTitleBtn);
    document.getElementById("col_" + columnID).appendChild(colTitleBtnCancel);

    if (colArr.length == 1){
     createAddCardButton(div);
    }

    columnID += 1;


}

function addColTitle(csName) {
    var columnToAddTitle =  $(csName).closest('div[class*=columnBase]')[0];
    var columnToAddTitle2 = $(columnToAddTitle).find('input[id^=colTitleInput_]')[0];
    var colTitleValue = columnToAddTitle2.value;

    var columnToAddCancel3 = $(columnToAddTitle).find('button[id^=colTitleBtnCancel_]')[0];
    var test = $(columnToAddTitle).children('div[class*=colTitle]')[0];
    test.innerHTML = colTitleValue;

    csName.remove();
    columnToAddTitle2.remove();
    columnToAddCancel3.remove();

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
    else if (indexOfColumn == 0 && colArr.length == 1){
        colArr.splice(indexOfColumn, 1);
    }
    else if (colArr.length > 1) {
        colArr.splice(indexOfColumn, 1);
    }
    deleteColumn.remove();
    console.log(colArr)
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
