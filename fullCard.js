var modal = document.getElementById('card');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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

    title = document.getElementById('titleInput').value;
    desc = document.getElementById('descInput').value;
    dateStart = document.getElementById('date-start').value;
    dateEnd = document.getElementById('date-end').value;
    id = new Date().getTime();
    budget = document.getElementById('budgetInput').value;

    editCard(title, desc, dateStart, dateEnd, color, persons, id, budget);

    console.log(allCards);
}