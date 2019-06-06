function CreateEditCardForm(cardID) {
	//Get the object of the card.
	var cardElem = $("#" + cardID).closest('li[class*=cardContent]');
    var cardData = $(cardElem).data("prop")

	//holds darkBg and cardEdit body together
	var editCont = document.createElement("div");
	editCont.setAttribute("id", "editCont");

	//darkBg while editor is open
	var cardEditBg = document.createElement("div");
	cardEditBg.setAttribute("id","darkenPage");

	//cardEditBody
	var cardEditBody = document.createElement("div");
	cardEditBody.setAttribute("id","cardEditBody");
	cardEditBody.setAttribute("class","modal");

	//card edit form
	var infoForm = document.createElement("form");
	infoForm.setAttribute("id","infoForm");
	infoForm.setAttribute("class","modal-content animate");

	cardEditBody.appendChild(infoForm);

	//Container card edit
	var containerEditCard = document.createElement("div");
	containerEditCard.setAttribute("id","containerEditCard");
	containerEditCard.setAttribute("class","containerEditCard animated bounceInDown");
	infoForm.appendChild(containerEditCard);

	// APPENDS DARK BG AND EDITOR CONTAINER
    test2 = document.body;
    test2.appendChild(editCont);

	editCont.appendChild(cardEditBg);
	editCont.appendChild(cardEditBody);

	//Close button for editor
	var editorCloseBtn = document.createElement("div");
    editorCloseBtn.setAttribute("id", "editorCloseBtn");
    editorCloseBtn.setAttribute("class", "crossIcon crossEdit");
    editorCloseBtn.setAttribute("onclick", "closeEditor()");
    editorCloseBtn.innerHTML = "<i class='fas fa-times'></i>";

	test3 = document.getElementById("cardEditBody");
	containerEditCard.appendChild(editorCloseBtn);

	//Title div
	var cardEditorTitle = document.createElement('div');
	cardEditorTitle.setAttribute("class", "editCardItemCont");
	cardEditorTitle.innerHTML = "Title";
	containerEditCard.appendChild(cardEditorTitle);

	//Title input box
	var titleInput = document.createElement("input")
	titleInput.setAttribute("type","text");
	titleInput.setAttribute("id","editCardTitleInput");
	titleInput.setAttribute("class", "editCardInputField");
	titleInput.setAttribute("name","title");
	titleInput.setAttribute("placeholder","Enter title");
	titleInput.setAttribute("value",cardData.title);
	cardEditorTitle.appendChild(titleInput);

	//Description div
	var cardEditorDesc = document.createElement('div');
	cardEditorDesc.setAttribute("class", "editCardItemCont");
	cardEditorDesc.innerHTML = "Description";
	containerEditCard.appendChild(cardEditorDesc);

	//Description input box
	var descInput = document.createElement("textarea")
	descInput.setAttribute("type","text");
	descInput.setAttribute("id","editCardDescInput");
    descInput.setAttribute("class", "editCardTextArea");
	descInput.setAttribute("name","desc");
	descInput.setAttribute("placeholder","Enter description");
	descInput.value = cardData.description
	cardEditorDesc.appendChild(descInput);

	// users div
	var cardEditorAvatar = document.createElement('div');
	cardEditorAvatar.setAttribute("class", "editCardItemCont");
	cardEditorAvatar.innerHTML = "Users";
	containerEditCard.appendChild(cardEditorAvatar);

	var createUser = document.createElement('div');
	createUser.setAttribute("id", "addUsersField");
	cardEditorAvatar.appendChild(createUser);

	var addUsersButton = document.createElement('button');
	addUsersButton.setAttribute('id', 'addFormField')
	addUsersButton.innerHTML = 'Add Users';
	createUser.appendChild(addUsersButton);

	var addUsersInput = document.createElement('input');
	addUsersInput.setAttribute('type', 'text');
	addUsersInput.setAttribute('name', 'users[]');

	//Create add user button and append already existing users.
	for (i = 0; i < cardData.persons.length; i++){
		addExistingUser(cardData.persons[i]);
	}

	$(document).ready(function() {
		var max_fields = 6;
		var wrapper = $('#addUsersField');
		var add_button = $('#addFormField');

		var x = 1;
		$(add_button).click(function(e) {
			e.preventDefault();
			//if (x < max_fields) {
			//	x++;
				$(wrapper).append('<div class "usernameAdd"><input type="text" id = "inputUsernameText" name="users[]"/><a href="#" class="delete"><i class="fas fa-times"></i></a></div>');
			//} else {
			//	alert('User limit reached');
			//}
		});

		$(wrapper).on('click', '.delete', function(e) {
			e.preventDefault();
			$(this).parent('div').remove();
			x--;
		})
	});

	// Color div
	var cardEditorColor = document.createElement('div');
	cardEditorColor.setAttribute("class", "editCardItemCont colors");
	cardEditorColor.innerHTML = "Color";
	containerEditCard.appendChild(cardEditorColor);

	// Color container div
	var cardEditorColorC = document.createElement('div');
	cardEditorColorC.setAttribute("class", "editCardColor");
	cardEditorColor.appendChild(cardEditorColorC);

	for (i = 0; i < 5; i ++){
		var ColorLabel = document.createElement('Label');
		var Color = document.createElement('input');
		Color.setAttribute("type","radio");
		Color.setAttribute("id","radio" + i);
		Color.setAttribute("name","colorRadio");
		Color.setAttribute("value","small");
		if (i == 0){
			ColorLabel.innerHTML = "<i onclick= changeColor(\"red\") class='fas fa-square fa-2x redRadio' required'></i>";
			if (cardData.color == "red"){
				Color.checked = true;
			}
		}
		else if (i == 1){
			ColorLabel.innerHTML = "<i onclick= changeColor(\"orange\") class='fas fa-square fa-2x orangeRadio'></i>";
			if (cardData.color == "orange"){
				Color.checked = true;
			}
		}
		else if (i == 2){
			ColorLabel.innerHTML = "<i onclick= changeColor(\"green\") class='fas fa-square fa-2x greenRadio'></i>";
			if (cardData.color == "green"){
				Color.checked = true;
			}
		}
		else if (i == 3){
			ColorLabel.innerHTML = "<i onclick= changeColor(\"blue\") class='fas fa-square fa-2x blueRadio'></i>";
			if (cardData.color == "blue"){
				Color.checked = true;
			}
		}
		else if (i == 4){
			ColorLabel.innerHTML = "<i onclick= changeColor(\"pink\") class='fas fa-square fa-2x pinkRadio'></i>";
			if (cardData.color == "pink"){
				Color.checked = true;
			}
		}
		cardEditorColorC.appendChild(ColorLabel);
		ColorLabel.appendChild(Color);

		//Apply color
	}
	//Apply color
	if (cardData.color != ""){
		changeColor(cardData.color);
	}

	// Calendar container div
	var cardEditorCal = document.createElement('div');
	cardEditorCal.setAttribute("class", "editCardItemCont");
	cardEditorCal.innerHTML = "Calendar";
	containerEditCard.appendChild(cardEditorCal);

	// Cal dateinput container div
	var cardEditorDateC = document.createElement('div');
	cardEditorDateC.setAttribute("class", "editCardDate");
	cardEditorCal.appendChild(cardEditorDateC);

	//Calendar dateStart
	var calendarFromDate = document.createElement('input');
	calendarFromDate.setAttribute("type","date");
	calendarFromDate.setAttribute("name","date-start");
	calendarFromDate.setAttribute("id","dateStart");
	calendarFromDate.setAttribute("value",cardData.dateStart);
	cardEditorDateC.appendChild(calendarFromDate);

	//Calendar dateEnd
	var calendarToDate = document.createElement('input');
	calendarToDate.setAttribute("type","date");
	calendarToDate.setAttribute("name","date-end");
	calendarToDate.setAttribute("id","dateEnd");
	calendarToDate.setAttribute("value",cardData.dateEnd);
	cardEditorDateC.appendChild(calendarToDate);

	//Push settings
	var PushSettingButton = document.createElement('button');
    PushSettingButton.setAttribute("type","Submit")
    PushSettingButton.setAttribute("name","BtnPushSettings")
	PushSettingButton.setAttribute("id","BtnPushSettings");
	PushSettingButton.setAttribute("class","btn");
    PushSettingButton.innerHTML = "Confirm";
	PushSettingButton.setAttribute("onclick","pushData()");
	containerEditCard.appendChild(PushSettingButton);

	//Delete card
	var DeleteCardButton = document.createElement('button');
    DeleteCardButton.setAttribute("type","Submit")
    DeleteCardButton.setAttribute("name","BtnDeleteCard")
	DeleteCardButton.setAttribute("id","BtnDeleteCard");
	DeleteCardButton.setAttribute("class","btn");
    DeleteCardButton.innerHTML = "Delete";
	DeleteCardButton.setAttribute("onclick","delCardfromEdit()");
	containerEditCard.appendChild(DeleteCardButton);

	//Important: Store the ID of the card that is being edited.
	$(cardEditBody).data("cardToEdit",cardElem);

	//Important: Store the Data of the card that is being edited
	$(cardEditBody).data("prop",cardData);
}

function delCardfromEdit() {
	alert("Will implement function");
}

function changeColor(color) {
    var editElem = document.getElementById('containerEditCard');
    editElem.style.border = "7px solid " + color;
}

function changeAvatarColor(color) {
    document.getElementsByClassName('avatar')[0].style.color = color;
}

var allCards = [];

function Card(title, desc, dateStart, dateEnd, color, persons, id) {
    this.title = title;
    this.desc = desc;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.color = color;
    this.persons = persons;
    this.id = id;
}

function editCard(title, desc, dateStart, dateEnd, color, persons, id) {
    allCards.push(new Card(title, desc, dateStart, dateEnd, color, persons, id));
}

function pushData() {
    var color = '';
    if (document.getElementById('radio0').checked == true) {
        color = 'red';
    } else if (document.getElementById('radio1').checked == true) {
        color = 'orange';
    } else if (document.getElementById('radio2').checked == true) {
        color = 'green';
    } else if (document.getElementById('radio3').checked == true) {
        color = 'blue';
    } else if (document.getElementById('radio4').checked == true) {
        color = 'pink';
    }

	//Adding user's.
    var persons = [];
    var addUserContainer = document.getElementById('addUsersField');
    var addUserInputBoxes = $(addUserContainer).find('input[id*=inputUsernameText]')
    for (i = 0; i < addUserInputBoxes.length; i++){
    	var usernameInputVal = addUserInputBoxes[i].value;
    	if (usernameInputVal != ''){
    		persons.push(usernameInputVal);
    	}
    }

    id = new Date().getTime();
    title = document.getElementById('editCardTitleInput').value;
    desc = document.getElementById('editCardDescInput').value;
    dateStart = document.getElementById('dateStart').value;
    dateEnd = document.getElementById('dateEnd').value;

    //Edit the card's data
     var editDiv = document.getElementById("cardEditBody"); //Retrieve div in editForm which contains what card we're editing.

	//Retrieve obj of the card we're editing.
	var cardProps =  $(editDiv).data("prop")

	//Retrieve div ID of the card we're editing.
     var cardToEdit = $(editDiv).data("cardToEdit")[0];

     //Edit the data properties from the original card
     cardProps.title = this.title;
     cardProps.description = this.desc;

     cardProps.persons = persons;
     if (color != ''){
     	cardProps.color = color;
     }
     cardProps.dateStart = this.dateStart;
     cardProps.dateEnd = this.dateEnd;

     //Replace the old obj of data properties with new obj that has updated values.
     $(cardToEdit).data("prop",cardProps);

     //Changes the title of the card ID that we're editing
     $(cardToEdit).find("div[class='cardTitle']")[0].innerHTML = this.title;

    closeEditor();
    displayCardSummary(cardToEdit);
}

function closeEditor(){
	//Delete the edit form
    document.getElementById("cardEditBody").remove();
	document.getElementById("darkenPage").remove();
}

function addExistingUser(userName){
	//e.preventDefault();
	var wrapper = $('#addUsersField');
	//if (x < max_fields) {
		//x++;
		$(wrapper).append('<div class "usernameAdd"><input value = "' + userName + '"" type="text" id = "inputUsernameText" name="users[]"/><a href="#" class="delete"><i class="fas fa-times"></i></a></div>');
	//} else {
	//	alert('User limit reached');
}
