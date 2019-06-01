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
	test.style.backgroundColor = "white";

	//title Label
	var titleLabel = document.createElement('Label');
	titleLabel.setAttribute("for","editCardTitleInput");
	titleLabel.innerHTML = "<b>Title</b>";
	containerEditCard.appendChild(titleLabel);

	//Title input box
	var titleInput = document.createElement("input")
	titleInput.setAttribute("type","text");
	titleInput.setAttribute("id","editCardTitleInput");
	titleInput.setAttribute("name","title");
	titleInput.setAttribute("placeholder","Enter title");
	titleInput.setAttribute("value",cardData.title);
	containerEditCard.appendChild(titleInput);


	//descriptionLabel
	var DescLabel = document.createElement('Label');
	DescLabel.setAttribute("for","editCardDescInput");
	DescLabel.innerHTML = "<b>Description</b>";
	containerEditCard.appendChild(DescLabel);

	//Description input box
	var descInput = document.createElement("input")
	descInput.setAttribute("type","text");
	descInput.setAttribute("id","editCardDescInput");
	descInput.setAttribute("name","desc");
	descInput.setAttribute("placeholder","Enter description");
	descInput.setAttribute("value",cardData.description);
	containerEditCard.appendChild(descInput);


	//budgetLabel
	var BudgetLabel = document.createElement('Label');
	BudgetLabel.setAttribute("for","editCardBudgetInput");
	BudgetLabel.innerHTML = "<b>Budget</b>";
	containerEditCard.appendChild(BudgetLabel);

	//budget input box
	var BudgetInput = document.createElement("input")
	BudgetInput.setAttribute("type","text");
	BudgetInput.setAttribute("id","editCardBudgetInput");
	BudgetInput.setAttribute("name","budget");
	BudgetInput.setAttribute("placeholder","Enter budget");
	BudgetInput.setAttribute("value",cardData.budget);
	containerEditCard.appendChild(BudgetInput);

	//Avatars
	for (i = 0; i < 4; i ++){
		var AvatarLabel = document.createElement('Label');
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
		containerEditCard.appendChild(AvatarLabel);
		AvatarLabel.appendChild(Avatar);
	}


	
	//Card color
	for (i = 0; i < 5; i ++){
		var ColorLabel = document.createElement('Label');
		var Color = document.createElement('input');
		Color.setAttribute("type","radio");
		Color.setAttribute("id","radio" + i);
		Color.setAttribute("name","colorRadio");
		Color.setAttribute("value","small");
		if (i == 0){
			ColorLabel.innerHTML = "<i onclick= \"changeColor('5px solid red') \" class='fas fa-square fa-2x red' required'></i>";
		}
		else if (i == 1){
			ColorLabel.innerHTML = "<i onclick= \"changeColor('5px solid orange')\" class='fas fa-square fa-2x orange'></i>";
		}
		else if (i == 2){
			ColorLabel.innerHTML = "<i onclick= \"changeColor('5px solid green')\" class='fas fa-square fa-2x green'></i>";
		}
		else if (i == 3){
			ColorLabel.innerHTML = "<i onclick= \"changeColor('5px solid blue')\" class='fas fa-square fa-2x blue'></i>";
		}
		else if (i == 4){
			ColorLabel.innerHTML = "<i onclick= \"changeColor('5px solid pink')\" class='fas fa-square fa-2x pink'></i>";
		}
		containerEditCard.appendChild(ColorLabel);
		ColorLabel.appendChild(Color);
	}



	//Calendar dateStart
	var calendarFromDate = document.createElement('input');
	calendarFromDate.setAttribute("type","date");	
	calendarFromDate.setAttribute("name","date-start");
	calendarFromDate.setAttribute("id","date-start");	
	calendarFromDate.setAttribute("value",cardData.dateStart);
	containerEditCard.appendChild(calendarFromDate);

	//Calendar dateEnd
	var calendarToDate = document.createElement('input');
	calendarToDate.setAttribute("type","date");	
	calendarToDate.setAttribute("name","date-end");
	calendarToDate.setAttribute("id","date-end");	
	calendarToDate.setAttribute("value",cardData.dateEnd);
	containerEditCard.appendChild(calendarToDate);

	//Push settings
	var PushSettingButton = document.createElement('button');
	PushSettingButton.setAttribute("id","BtnPushSettings")	
	PushSettingButton.setAttribute("onclick","pushData()");
	cardEditBody.appendChild(PushSettingButton);


	//Important: Store the ID of the card that is being edited.
	$(cardEditBody).data("cardToEdit",cardElem);

	//Important: Store the Data of the card that is being edited
	$(cardEditBody).data("prop",cardData);

}

/*
function changeColor(color) {
    document.getElementsByClassName('modal-content')[0].style.border = color;
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
*/

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
        persons.push('person0')
    } 
    if (document.getElementById('ava1').checked == true) {
        persons.push('person1')
    } 
    if (document.getElementById('ava2').checked == true) {
        persons.push('person2')
    } 
    if (document.getElementById('ava3').checked == true) {
        persons.push('person3')
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
     cardProps.persons = this.persons;
     cardProps.color = this.color;
     cardProps.dateStart = this.dateStart;
     cardProps.dateEnd = this.dateEnd;





     //Replace the old obj of data properties with new obj that has updated values.
     $(cardToEdit).data("prop",cardProps);

     //Changes the title of the card ID that we're editing
     $(cardToEdit).find("div[class='cardTitle']")[0].innerHTML = this.title;

    //Delete the edit form
    document.getElementById("cardEditBody").remove();
}