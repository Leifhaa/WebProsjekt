// GENERATING ID FOR CARDS
var cardArr = [];
var cardID = 0;
var testCardName = "Test Card";
var delId = 0;


//Test card
var Card1 = {
    ID: "1",
    Title: "TitleCard1",
    Text: "TextCard1"
};



function addCard(columnOlId) {
    //Card
    var div = document.createElement("li");
    div.setAttribute("class", "card cardContent cardID" + cardID);

    // Sortable
    $(".sortOl").sortable({
        revert: '100',
        placeholder: 'sortableStyle'
        // SLIDE ANIMATION
        /*    start: function (e,ui){
        $(ui.placeholder).slideUp(200);
    },
    change: function (e,ui){
    $(ui.placeholder).hide().slideDown(200);
    }*/

    });

    //Dragging property
        $(div).draggable( {
            connectToSortable: '.sortOl',
            zIndex: 1,
            containment: 'document',
            cursor: 'grab',
            snap: '#content',
            start: drag,
            stop: drop,
            revert: RevertDrag,
            revertDuration: 200
        });



    //div.setAttribute("ondragstart", "drag(event)");
    div.setAttribute("id", "card_" + cardID);
    //div.setAttribute("ondragover", "dragOver(event)");
    //div.setAttribute("ondragenter", "dragEnter(event)");
    //div.setAttribute("ondragleave", "dragLeave(event)");'
    div.style.backgroundColor = "#E1E1E1";

    var cardTitle = document.createElement("div");
    cardTitle.setAttribute("id", "cardTitleText_" + cardID);
    cardTitle.setAttribute("class", "card cardID" + cardID);

    // CARD TITLE INPUT
    var addCardTitle = document.createElement('input');
    addCardTitle.type = "text";
    addCardTitle.setAttribute("class", "card cardID" + cardID);
    addCardTitle.setAttribute("id", "cardTitleInput_" + cardID);
    addCardTitle.setAttribute("onfocus", "this.value=''");
    addCardTitle.setAttribute("placeholder", "Name card");

    //CARD TITLE INPUT OK BUTTON
    var cardTitleBtn = document.createElement('button');
    cardTitleBtn.setAttribute("class", "card cardOkBtn cardID" + cardID);
    cardTitleBtn.setAttribute("id", "cardTitleBtn_" + cardID)
    cardTitleBtn.setAttribute("onclick", "addCardTitle(this.className)");
    cardTitleBtn.innerHTML = "Ok";

    //CARD TITLE INPUT CANCEL BUTTON
    var cardTitleBtnCancel = document.createElement('button');
    cardTitleBtnCancel.setAttribute("class", "card cardCancelBtn cardID" + cardID);
    cardTitleBtnCancel.setAttribute("id", "cardTitleBtnCancel_" + cardID)
    cardTitleBtnCancel.setAttribute("onclick", "delCard(this.id)");
    cardTitleBtnCancel.innerHTML = "Cancel";

    // CREATES ID AND NAME IN cardArr
    cardArr.push({
        id: "card_" + cardID,
        columnID: 0,
        rowID: 0,
        name: "TitleCard" + cardID,
        description: "",
        persons: null,
        startDate: null,
        startTime: null,
        stopDate: null,
        stopTime: null,
        color: "strColor",
        budget: "",
        members: null
    });



    //Create an object which belongs to the card div.
    $(div).data("prop",cardArr[cardID]);
    var card = $(div).data("prop");
    console.dir(card);


    // PRINTS THE ARRAY
    console.log(cardArr);


    // EDIT CARD BUTTON
    var div2 = document.createElement("div");
    div2.setAttribute("id", "del-card_" + cardID);
    div2.setAttribute("class", "card editCardIcon cardID" + cardID);
    div2.setAttribute("onclick", "CreateEditCardForm(this.id)");
    div2.innerHTML = "<i id = 'editCard_" + cardID + "' class=' far fa-edit card'></i>";

    columnOlId.appendChild(div);

    document.getElementById("card_" + cardID).appendChild(cardTitle);
    document.getElementById("card_" + cardID).appendChild(div2);
    document.getElementById("card_" + cardID).appendChild(addCardTitle);
    document.getElementById("card_" + cardID).appendChild(cardTitleBtn);
    document.getElementById("card_" + cardID).appendChild(cardTitleBtnCancel);

    cardID += 1;

}

function getCardClassID(cardClasses) {
    //The classID of a cardClass where there's multiple classes.
    //E.g a class has multiple classes: 'card',cardID0'
    //We want to retrieve the class cardID of this card, which is 0.
    var res;
    var cardIDindx;
    cardIDindx = cardClasses.indexOf("cardID") + 6;
    var nextSpc = cardClasses.indexOf(' ', cardIDindx)
    if (nextSpc = -1) {
        nextSpc = cardClasses.length
        //There's no more spaces in str.
    }
    res = cardClasses.substring(cardIDindx, nextSpc);
    return res;
}

function addCardTitle(csName) {
    var cardID

    var cardIDindx;
    if (csName.includes("cardID")) {
        cardID = getCardClassID(csName)
    } else {
        return;
    }
    var cardInputElem = document.getElementById("cardTitleInput_" + cardID);

    var cardState = document.getElementById("card_" + cardID);

    if (cardInputElem.value.length == 0) {

        //alert("You must add a card name");
        cardState.setAttribute("class", "cardContent cardContentError shake-horizontal");
        return false;

    } else {
        // CHANGES STATE COLOR ON CARD
        cardState.style.backgroundColor = "#f5f5f5";
    }


    //Set the object property according to new title
    $(cardState).data("prop").title = cardInputElem.value;

    var cardBtn = document.getElementById("cardTitleBtn_" + cardID);
    var cardBtnCancel = document.getElementById("cardTitleBtnCancel_" + cardID);
    var cardTitle = document.getElementById("cardTitleText_" + cardID);

    cardTitle.innerHTML = "<div class='cardTitle'>" + cardInputElem.value + "</div>";
    cardInputElem.remove();
    cardBtn.remove();
    cardBtnCancel.remove();
    //document.getElementById("card_0").appendChild(titleName);

}

// DELETE CARD FUNCTION
function delCard(cardID) {
    var deleteCard = document.getElementById(cardID);
    deleteCard.parentNode.remove();
    cardArr.pop(delId);
}

function editCard() {

    var darkenPage = document.createElement("div");
    darkenPage.setAttribute("id", "darkenPage");

    var cardEditor = document.createElement("div");
    cardEditor.setAttribute("id", "cardEditorCont");

    var editorCloseBtn = document.createElement("div");
    editorCloseBtn.setAttribute("id", "editorCloseBtn");
    editorCloseBtn.setAttribute("class", "closeEditorIcon");
    editorCloseBtn.setAttribute("onclick", "closeEditor()");
    editorCloseBtn.innerHTML = "<i class='fas fa-times'></i>";

    document.getElementById("editorWrapper").appendChild(darkenPage);
    document.getElementById("editorWrapper").appendChild(cardEditor);
    document.getElementById("cardEditorCont").appendChild(editorCloseBtn);

}
