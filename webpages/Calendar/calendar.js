// Calendar state
let currentDate = new Date();
let events = JSON.parse(localStorage.getItem('calendarEvents')) || {};

// Initialize the calendar
function initCalendar() {
    renderCalendar(currentDate);
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Event modal handling
    const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    let selectedDate = null;

    document.querySelectorAll('.day').forEach(day => {
        day.addEventListener('click', (e) => {
            selectedDate = e.currentTarget.getAttribute('data-date');
            document.getElementById('eventDate').value = formatDate(new Date(selectedDate));
            eventModal.show();
        });
    });

    document.getElementById('saveEvent').addEventListener('click', () => {
        const title = document.getElementById('eventTitle').value;
        const type = document.getElementById('eventType').value;

        if (!title) {
            alert('Please enter an event title');
            return;
        }

        if (!events[selectedDate]) {
            events[selectedDate] = [];
        }

        events[selectedDate].push({ title, type });
        localStorage.setItem('calendarEvents', JSON.stringify(events));
        renderCalendar(currentDate);
        eventModal.hide();
    });
}

// Render the calendar
function renderCalendar(date) {
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = '';

    const monthYearElement = document.getElementById('monthYear');
    monthYearElement.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    // Add empty cells for days from the previous month
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty-day other-month';
        calendarElement.appendChild(emptyDay);
    }

    // Add cells for each day in the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        const currentDay = new Date(date.getFullYear(), date.getMonth(), i);
        const dayString = formatDate(currentDay);

        dayElement.className = 'day';
        dayElement.setAttribute('data-date', dayString);
        dayElement.textContent = i;

        if (currentDay.toDateString() === new Date().toDateString()) {
            dayElement.classList.add('today');
        }

        if (events[dayString]) {
            events[dayString].forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = `event ${event.type}`;
                eventElement.textContent = event.title;
                dayElement.appendChild(eventElement);
            });
        }

        dayElement.addEventListener('click', (e) => {
            selectedDate = dayString;
            document.getElementById('eventDate').value = formatDate(new Date(selectedDate));
            const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
            eventModal.show();
        });

        calendarElement.appendChild(dayElement);
    }

    // Add empty cells for days from the next month
    const totalCells = startingDay + daysInMonth;
    const emptyCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    for (let i = 0; i < emptyCells; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty-day other-month';
        calendarElement.appendChild(emptyDay);
    }
}

// Format date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Initialize the calendar
initCalendar();
