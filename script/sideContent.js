function openCalendar() {
    alert("Calendar");
}

function openStatistics() {
    alert("Statistics");
}


// ADJUSTS TRASHCAN ICON
var cardTrash = document.getElementById("trashcanButton");
$(cardTrash).droppable( {
        drop: drop
    } );
