var modal = document.getElementById('card');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function changeColor(color) {
    document.getElementsByClassName('modal-content')[0].style.border = color;
}