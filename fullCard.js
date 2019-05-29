var modal = document.getElementById('card');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function changeColor(color) {
    document.getElementsByClassName('modal-content')[0].style.border = color;
}

function displayInfo() {
    var x = document.getElementById('infoForm');
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById('showInfo').innerHTML = text;
    document.getElementById('card').style.display = 'none';
}