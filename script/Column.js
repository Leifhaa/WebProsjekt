// GENERATING ID FOR COLS
var colArr = [];
var columnID = 0;
var testColName = "Test Col";

// Test card
var Card1 = {
    ID: "1",
    Title: "TitleCard1",
    Text: "TextCard1"
};

// COLUMN SILHOUETTE CONTAINER
var colSilhouetteC = document.createElement("div");
    colSilhouetteC.setAttribute("id", "newColCont");
    colSilhouetteC.setAttribute("onclick", "addColumn()");
    document.getElementById("newColContainer").appendChild(colSilhouetteC);
    colSilhouetteC.setAttribute("class","newcol animated fadeInUp");

var colSilhouette = document.createElement("div");
    colSilhouette.setAttribute("id", "newCol");
    colSilhouetteC.appendChild(colSilhouette);

var colSilText = document.createElement("div");
    colSilText.setAttribute("id", "newColText");
    colSilText.innerHTML = "Add new column";
    colSilhouette.appendChild(colSilText);

var colSilButton = document.createElement("button");
    colSilButton.setAttribute("id", "newColButton");
    colSilButton.setAttribute("class", "btnPlus")
    colSilButton.innerHTML = "<i class='fas fa-plus'></i>";
    colSilhouette.appendChild(colSilButton);

// ADD COLUMN
var addCol = document.getElementById("addColumnBtn");
addCol.addEventListener("click", newBoard);

function startDrag(){
            $("").css('min-height', '300px');
}

function addColumn() {
    var div = document.createElement('div');
    div.setAttribute("class", "columnBase column droptarget columnBox");
    div.setAttribute("id", "col_" + columnID);

    $(div).disableSelection();

    $(div).droppable( {
        drop: drop,
        classes: {
            "ui-droppable-hover": "highlight"
          },
        //hoverClass: 'colHovered',
        activate: startDrag,
        over: function(event, ui) {
                   //ui.helper.css("border", "2px solid green")
               },
        out: function(event, ui) {
                         // ui.helper.css("border", "2px solid red")
                      }
    });

    //COL TITLE INPUT
    var addColTitle = document.createElement('input');
    addColTitle.type = "text";
    addColTitle.setAttribute("class", "column colID" + columnID);
    addColTitle.setAttribute("id", "colTitleInput_" + columnID);
    addColTitle.setAttribute("onfocus", "this.value=''");
    addColTitle.setAttribute("placeholder", "Name column");

    //COL TITLE INPUT OK BUTTON
    var colTitleBtn = document.createElement('button');
    colTitleBtn.setAttribute("class", "column btn colID" + columnID);
    colTitleBtn.setAttribute("id", "colTitleBtn_" + columnID)
    colTitleBtn.setAttribute("onclick", "addColTitle(this)");
    colTitleBtn.innerHTML = "Ok";

    //COL TITLE INPUT CANCEL BUTTON
    var colTitleBtnCancel = document.createElement('button');
    colTitleBtnCancel.setAttribute("class", "column btn cancel cardID" + columnID);
    colTitleBtnCancel.setAttribute("id", "colTitleBtnCancel_" + columnID)
    colTitleBtnCancel.setAttribute("onclick", "delCol(this)");
    colTitleBtnCancel.innerHTML = "Cancel";

    // TEST TITLE Col
    colTitleCont = document.createElement("div");
    colTitleCont.setAttribute("id", "colTilte_" + columnID);
    colTitleCont.setAttribute("class", "column colTitle");
    colTitleCont.classList.add("hidden");

    div.appendChild(colTitleCont);

    //    div.innerHTML = "<div id = 'colTitle_" + columnID +"' class='column colTitle hidden'></div>";

    colArr.push({
        id: "col_" + columnID,
        name: testColName
    });
    console.log(colArr);


    // DELETE COL BUTTON
    var div1 = document.createElement("div");
    div1.setAttribute("id", "del_col_" + columnID);
    div1.setAttribute("class", "column crossIcon crossCol");
    div1.classList.add("hidden");
    div1.setAttribute("onclick", "delDialogue(this)");
    div1.innerHTML = "<i id = 'delColIcon_" + columnID + "' class='column fas fa-times'></i>";


    document.getElementById("colContainer").appendChild(div);
    document.getElementById("col_" + columnID).appendChild(div1);

    document.getElementById("col_" + columnID).appendChild(addColTitle);
    document.getElementById("col_" + columnID).appendChild(colTitleBtn);
    document.getElementById("col_" + columnID).appendChild(colTitleBtnCancel);

    if (colArr.length == 1){
     createAddCardButton(div);
    }

    columnID += 1;

    $(".columnBase").sortable({
        containment: "document",
        //helper: 'clone',
        //connectToSortable: "li"
        items: "> li",
        revert:200,
        cursor:'grab',
        connectWith: '.columnBase',
        over : function(){
            $(this).addClass('colHovered');
         },
         out : function(){
              $(this).removeClass('colHovered');
         }
    });

}

var div1;

function addColTitle(csName) {
    var columnToAddTitle =  $(csName).closest('div[class*=columnBase]')[0];
    var columnToAddTitle2 = $(columnToAddTitle).find('input[id^=colTitleInput_]')[0];
    var colTitleValue = columnToAddTitle2.value;

    var columnToAddCancel3 = $(columnToAddTitle).find('button[id^=colTitleBtnCancel_]')[0];
    var test = $(columnToAddTitle).children('div[class*=colTitle]')[0];
    var colX = $(columnToAddTitle).children('div[class*=crossIcon]')[0];
    var colTitleHidden = $(columnToAddTitle).children('div[class*=colTitle]')[0];
    test.innerHTML = colTitleValue;

    csName.remove();
    columnToAddTitle2.remove();
    columnToAddCancel3.remove();
    colX.classList.remove("hidden");
    colTitleHidden.classList.remove("hidden");
}

// DELETE COL FUNCTION
function delCol(elementClicked) {
    //Figure which columnID we're dealing with according to arr
    var columnIdDeleted = elementClicked.id.replace(/\D/g,'');
    columnIdDeleted = 'col_' + columnIdDeleted

    //Find out which column element we're dealing with.
    var deleteColumn = $(elementClicked).closest('div[class*=columnBase]')[0];
    var indexOfColumn = colArr.findIndex(i => i.id === columnIdDeleted);
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
    btnElem.setAttribute("class","btnPlus");
    btnElem.innerHTML = ("<i class='fas fa-plus'></i>")
    columnToAddBtn.appendChild(btnElem);

    btnElem.addEventListener("click",function(){
       addCard(columnToAddBtn)
    });
}

// Delete dialogue

function delDialogue(delElement) {
    //darkBg while new board question is open
    var qBg = document.createElement("div");
    qBg.setAttribute("id","darkenPage");

    // APPENDS THE DARK BG TO body
    test2 = document.body;

    //new question container
	var qCont = document.createElement("div");
	qCont.setAttribute("id","dialogueBox");
	qCont.setAttribute("class","bounceIn");

    var qIcon = document.createElement("div");
    qIcon.setAttribute("id", "qIcon");
    qIcon.innerHTML = "<i class='fas fa-exclamation'></i>"

    var qText = document.createElement("div");
    qText.setAttribute("id","qMessage");
    qText.innerHTML = "Do you want to delete the card and its contents?"

    var qBtnCont = document.createElement("div");
    qBtnCont.setAttribute("id","qBtnCont");

    var qButtonOk = document.createElement("button");
    qButtonOk.setAttribute("id","qButtonOk");
    qButtonOk.setAttribute("class", "btn");
    if (delElement.id.includes("containerEditCard")){
            $(qButtonOk).click(function () {
            closeEditor();  
            qClose();
        });
    }
    else if (delElement.id.includes("del_col_")){
            $(qButtonOk).click(function () {
            delCol(delElement);  
            qClose();
        });
    }

    qButtonOk.innerHTML = "Confirm";

    var qButtonCancel = document.createElement("button");
    qButtonCancel.setAttribute("id","qButtonCancel");
    qButtonCancel.setAttribute("class", "btn cancel");
    qButtonCancel.setAttribute("onclick", "qClose()");
    qButtonCancel.innerHTML = "Cancel";

    test2.appendChild(qBg);
    test2.appendChild(qCont);
    qCont.appendChild(qIcon);
    qCont.appendChild(qText);
    qCont.appendChild(qBtnCont);
    qBtnCont.appendChild(qButtonOk);
    qBtnCont.appendChild(qButtonCancel);
}

function KillForm(formElement){
    $(formElement).remove();
}

