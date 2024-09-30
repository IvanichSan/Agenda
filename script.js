const eventForm = document.getElementById('event-form');
const eventTitleInput = document.getElementById('event-title');
const eventFechaInput = document.getElementById('event-fecha');
const eventList = document.getElementById('events');

eventForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const eventTitle = eventTitleInput.value;
    const eventFecha = eventFechaInput.value;

    if (eventTitle===''|| eventFecha==='') {
        alert('Falta Titulo y/o Fecha');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span>${eventTitle} - ${eventFecha}</span> <button class="delete-btn">Eliminar Evento</button>`

    eventList.appendChild(li)

    eventForm.reset();
    
    li.querySelector('.delete-btn').addEventListener('click', function(){
        li.remove();
    })
});