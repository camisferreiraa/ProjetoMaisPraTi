const services = [
    { id: 1, name: 'Manicure Simples', price: 'R$ 30,00' },
    { id: 2, name: 'Manicure Francesa', price: 'R$ 40,00' },
    { id: 3, name: 'Pedicure Simples', price: 'R$ 35,00' },
    { id: 4, name: 'Pedicure Completa', price: 'R$ 50,00' },
    { id: 5, name: 'Spar dos Pés', price: 'R$60,00'},
    { id: 5, name: 'Unha em Gel', price: 'R$120,00'},

];

const serviceCardsContainer = document.getElementById('service-cards');
const orderListContainer = document.getElementById('order-list');

function addServiceToOrder(service) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = `${service.name} - ${service.price}`;
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-sm btn-danger';
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => listItem.remove();
    listItem.appendChild(removeButton);
    orderListContainer.appendChild(listItem);
}

services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'col-md-6 mb-4';
    card.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${service.name}</h5>
                <p class="card-text">${service.price}</p>
                <button class="btn btn-primary add-to-order" data-id="${service.id}">Adicionar à Lista</button>
            </div>
        </div>
    `;
    serviceCardsContainer.appendChild(card);

    card.querySelector('.add-to-order').onclick = () => addServiceToOrder(service);
});

document.getElementById('clear-order').onclick = () => {
    orderListContainer.innerHTML = '';
};

document.getElementById('confirm-selection').addEventListener('click', function() {
    const selectedServices = [];
    document.getElementById('#order-list').forEach(ul => {
        if (ul) {
            selectedServices.push(ul.value);
        }
    });

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (selectedServices.length === 0 || !date || !time) {
        alert('Por favor, selecione pelo menos um serviço, uma data e um horário.');
        return;
    }

    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
    localStorage.setItem('appointmentDate', date);
    localStorage.setItem('appointmentTime', time);

    window.location.href = '/thankyou.html';
});
