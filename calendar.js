document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'interaction'],
        editable: true,
        eventLimit: true,
        defaultView: 'dayGridMonth',
        header: {
            center: 'addEventButton'
        },
        customButtons: {
            addEventButton: {
                text: 'Add event',
                click: function () {
                    var eventName = prompt('Enter a name');
                    var dateStr = prompt('Enter date in YYYY-MM-DD');
                    var date = new Date(dateStr + 'T00:00:00');
                    var eventColor = prompt('Choose color');

                    if (!isNaN(date.valueOf())) { //Date check
                        calendar.addEvent({
                            title: eventName,
                            start: date,
                            color: eventColor,
                            allDay: true
                        });
                    } else {
                        alert('Invalid date.');
                    }
                }
            }
        }
    });

    calendar.render();
});