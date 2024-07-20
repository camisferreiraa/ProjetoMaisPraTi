document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Armazenar os dados no localStorage
    localStorage.setItem('bookingDetails', JSON.stringify({ name, email, service, date, time }));

    // Redirecionar para a página de agradecimento
    window.location.href = '/thankyou.html';
});