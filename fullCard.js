var modal = document.getElementById('card');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function CreateEditCardForm(cardID) {
	var cardEditBody = document.createElement("div");
	cardEditBody.setAttribute("id","card");
	cardEditBody.setAttribute("class","modal");
	
	var infoForm = document.createElement("form");
	infoForm.setAttribute("id","infoForm");
	infoForm.setAttribute("class","modal-content animate");
	cardEditBody.appendChild(infoForm);
	
	var containerEditCard = document.createElement("div");
	containerEditCard.setAttribute("class","containerEditCard");
	infoForm.appendChild(containerEditCard);

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
	containerEditCard.appendChild(titleInput);


	//DscriptionLabel
	var titleLabel = document.createElement('Label');
	titleLabel.setAttribute("for","editCardTitleInput");
	titleLabel.innerHTML = "<b>Title</b>";
	containerEditCard.appendChild(titleLabel);

	//Title input box
	var titleInput = document.createElement("input")
	titleInput.setAttribute("type","text");
	titleInput.setAttribute("id","editCardDesInput");
	titleInput.setAttribute("name","desc");
	titleInput.setAttribute("placeholder","Enter description");
	containerEditCard.appendChild(titleInput);

	
	
	test = document.getElementById("boardContainer")
	test.appendChild(cardEditBody);
	test.style.backgroundColor = "white";
}


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

function pushData() {

    var color = '';
    if (document.getElementById('redRadio').checked == true) {
        color = 'red';
    } else if (document.getElementById('orangeRadio').checked == true) {
        color = 'orange';
    } else if (document.getElementById('greenRadio').checked == true) {
        color = 'green';
    } else if (document.getElementById('blueRadio').checked == true) {
        color = 'blue';
    } else if (document.getElementById('pinkRadio').checked == true) {
        color = 'pink';
    }

    var persons = [];

    if (document.getElementById('ava1').checked == true) {
        persons.push('person1')
    } 
    if (document.getElementById('ava2').checked == true) {
        persons.push('person2')
    } 
    if (document.getElementById('ava3').checked == true) {
        persons.push('person3')
    } 
    if (document.getElementById('ava4').checked == true) {
        persons.push('person4')
    }
    
    id = new Date().getTime();
    title = document.getElementById('titleInput').value;
    desc = document.getElementById('descInput').value;
    dateStart = document.getElementById('date-start').value;
    dateEnd = document.getElementById('date-end').value;
    budget = document.getElementById('budgetInput').value;

    editCard(title, desc, dateStart, dateEnd, color, persons, id, budget);

    console.log(allCards);
}