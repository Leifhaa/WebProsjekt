//var modal = document.getElementById('card');
/*window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/

function CreateEditCardForm(cardID) {
	//Get the object of the card.
	var cardElem = $("#" + cardID).closest('li[class*=cardContent]');
    var cardData = $(cardElem).data("prop")

	//darkBg while editor is open
	var cardEditBg = document.createElement("div");
	cardEditBg.setAttribute("id","cardEditBg");

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
	containerEditCard.setAttribute("class","containerEditCard");
	infoForm.appendChild(containerEditCard);

	test = document.getElementById("boardContainer")
	test.appendChild(cardEditBody);

	// APPENDS THE DARK BG TO body
    test2 = document.body;
    test2.appendChild(cardEditBg);

	//Close button for editor
	var editorCloseBtn = document.createElement("div");
    editorCloseBtn.setAttribute("id", "editorCloseBtn");
    editorCloseBtn.setAttribute("class", "closeEditorIcon");
    editorCloseBtn.setAttribute("onclick", "closeEditor()");
    editorCloseBtn.innerHTML = "<i class='fas fa-times'></i>";

	test3 = document.getElementById("cardEditBody");
	containerEditCard.appendChild(editorCloseBtn);


	/*
	//title Label
	var titleLabel = document.createElement('Label');
	titleLabel.setAttribute("for","editCardTitleInput");
	titleLabel.innerHTML = "Title";
	containerEditCard.appendChild(titleLabel);
	*/

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

	/*
	//descriptionLabel
	var DescLabel = document.createElement('Label');
	DescLabel.setAttribute("for","editCardDescInput");
	DescLabel.innerHTML = "Description";
	containerEditCard.appendChild(DescLabel);
	*/

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

	/*
	//budgetLabel
	var BudgetLabel = document.createElement('Label');
	BudgetLabel.setAttribute("for","editCardBudgetInput");
	BudgetLabel.innerHTML = "Budget";
	containerEditCard.appendChild(BudgetLabel);
	*/
	//Budget div
	var cardEditorBudget = document.createElement('div');
	cardEditorBudget.setAttribute("class", "editCardItemCont");
	cardEditorBudget.innerHTML = "Budget";
	containerEditCard.appendChild(cardEditorBudget);

	//budget input box
	var budgetInput = document.createElement("input")
	budgetInput.setAttribute("type","text");
	budgetInput.setAttribute("id","editCardBudgetInput");
	budgetInput.setAttribute("class", "editCardInputField");
	budgetInput.setAttribute("name","budget");
	budgetInput.setAttribute("placeholder","Enter budget");
	budgetInput.setAttribute("value",cardData.budget);
	cardEditorBudget.appendChild(budgetInput);

	//Avatars

	// Avatar div
	var cardEditorAvatar = document.createElement('div');
	cardEditorAvatar.setAttribute("class", "editCardItemCont");
	cardEditorAvatar.innerHTML = "Users";
	containerEditCard.appendChild(cardEditorAvatar);

	/*
	// Avatar container div
	var cardEditorAvatarC = document.createElement('div');
	cardEditorAvatarC.setAttribute("class", "editCardAvatar");
	cardEditorAvatar.appendChild(cardEditorAvatarC);
	*/

	var createUser = document.createElement('div');
	createUser.setAttribute("id", "addUsersField");
	cardEditorAvatar.appendChild(createUser);

	var addUsersButton = document.createElement('button');
	addUsersButton.setAttribute('id', 'addFormField')
	addUsersButton.innerHTML = 'Add Users';
	createUser.appendChild(addUsersButton);

	var addUserInputDiv = document.createElement('div');
	var addUsersInput = document.createElement('input');
	addUsersInput.setAttribute('type', 'text');
	addUsersInput.setAttribute('name', 'users[]');

	$(document).ready(function() {

		var max_fields = 6;
		var wrapper = $('#addUsersField');
		var add_button = $('#addFormField');

		var x = 1;
		$(add_button).click(function(e) {

			e.preventDefault();
			if (x < max_fields) {
				x++;
				$(wrapper).append('<div><input type="text" name="users[]"/><a href="#" class="delete">Delete</a></div>');
			} else {
				alert('User limit reached');
			}
		});

		$(wrapper).on('click', '.delete', function(e) {
			e.preventDefault();
			$(this).parent('div').remove();
			x--;
		})
	});

	// Custom select

	var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("editCardAvatar");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

	/* AVATAR LABELS COMMENTED OUT
	for (i = 0; i < 4; i ++){
		var AvatarLabel = document.createElement('label');
		var Avatar = document.createElement('input');
		Avatar.setAttribute("type","checkbox");
		Avatar.setAttribute("id","ava" + i);
		Avatar.setAttribute("name","avatars");
		Avatar.setAttribute("value","small");
		if (i == 0){
			AvatarLabel.innerHTML = "<i class='fas fa-user-ninja fa-2x avatar'></i>";
		}
		else if (i == 1){
			AvatarLabel.innerHTML = "<i class='fas fa-user-astronaut fa-2x avatar'></i>";
		}
		else if (i == 2){
			AvatarLabel.innerHTML = "<i class='fas fa-user-ninja fa-2x avatar'></i>";
		}
		else if (i == 3){
			AvatarLabel.innerHTML = "<i class='fas fa-user-astronaut fa-2x avatar'></i>";
		}


		cardEditorAvatarC.appendChild(AvatarLabel);
		AvatarLabel.appendChild(Avatar);

		if (cardData.persons != null && cardData.persons.includes("ava" + i)){
			Avatar.checked = true;
		}
	}

	*/



	//Card color

	// Color div
	var cardEditorColor = document.createElement('div');
	cardEditorColor.setAttribute("class", "editCardItemCont");
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
	calendarFromDate.setAttribute("id","date-start");
	calendarFromDate.setAttribute("value",cardData.dateStart);
	cardEditorDateC.appendChild(calendarFromDate);

	//Calendar dateEnd
	var calendarToDate = document.createElement('input');
	calendarToDate.setAttribute("type","date");
	calendarToDate.setAttribute("name","date-end");
	calendarToDate.setAttribute("id","date-end");
	calendarToDate.setAttribute("value",cardData.dateEnd);
	cardEditorDateC.appendChild(calendarToDate);

	//Push settings
	var PushSettingButton = document.createElement('button');
    PushSettingButton.setAttribute("type","Submit")
    PushSettingButton.setAttribute("name","BtnPushSettings")
	PushSettingButton.setAttribute("id","BtnPushSettings");
    PushSettingButton.innerHTML = "Ok";
	PushSettingButton.setAttribute("onclick","pushData()");
	containerEditCard.appendChild(PushSettingButton);


	//Important: Store the ID of the card that is being edited.
	$(cardEditBody).data("cardToEdit",cardElem);

	//Important: Store the Data of the card that is being edited
	$(cardEditBody).data("prop",cardData);

}

function changeColor(color) {
    var editElem = document.getElementById('cardEditBody');
    editElem.style.border = "thick solid " + color;
    //[0].style.border = color;

	// WHEN COLOR SELECTED, CHANGE BORDER TO INDICATE SELECTION
	//$(".fa-square").css("border", "#ff00cc");

}

function changeAvatarColor(color) {
    document.getElementsByClassName('avatar')[0].style.color = color;
}

var allCards = [];

function Card(title, desc, dateStart, dateEnd, color, persons, id, budget) {
    this.title = title;
    this.desc = desc;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.color = color;
    this.persons = persons;
    this.id = id;
    this.budget = budget;
}

function editCard(title, desc, dateStart, dateEnd, color, persons, id, budget) {
    allCards.push(new Card(title, desc, dateStart, dateEnd, color, persons, id, budget));
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

    var persons = [];

    if (document.getElementById('ava0').checked == true) {
        persons.push('ava0')
    }
    if (document.getElementById('ava1').checked == true) {
        persons.push('ava1')
    }
    if (document.getElementById('ava2').checked == true) {
        persons.push('ava2')
    }
    if (document.getElementById('ava3').checked == true) {
        persons.push('ava3')
    }

    id = new Date().getTime();
    title = document.getElementById('editCardTitleInput').value;
    desc = document.getElementById('editCardDescInput').value;
    dateStart = document.getElementById('date-start').value;
    dateEnd = document.getElementById('date-end').value;
    budget = document.getElementById('editCardBudgetInput').value;

    //Edit the card's data
     var editDiv = document.getElementById("cardEditBody"); //Retrieve div in editForm which contains what card we're editing.

	//Retrieve obj of the card we're editing.
	var cardProps =  $(editDiv).data("prop")

	//Retrieve div ID of the card we're editing.
     var cardToEdit = $(editDiv).data("cardToEdit")[0];

     //Edit the data properties from the original card
     cardProps.title = this.title;
     cardProps.description = this.desc;
     cardProps.budget = this.budget;
     cardProps.persons = persons;
     cardProps.color = color;
     cardProps.dateStart = this.dateStart;
     cardProps.dateEnd = this.dateEnd;





     //Replace the old obj of data properties with new obj that has updated values.
     $(cardToEdit).data("prop",cardProps);

     //Changes the title of the card ID that we're editing
     $(cardToEdit).find("div[class='cardTitle']")[0].innerHTML = this.title;

    closeEditor();
}

function closeEditor(){
	//Delete the edit form
    document.getElementById("cardEditBody").remove();
	document.getElementById("cardEditBg").remove();
}
