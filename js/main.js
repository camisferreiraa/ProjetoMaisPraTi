document.addEventListener('DOMContentLoaded', function() {
    var testimonialsSection = document.getElementById('testimonialsSection');
    var loadMoreButton = document.getElementById('loadMoreTestimonials');
    var page = 1; 

    function loadTestimonials(page) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `/json/avaliações.json`, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var testimonials = JSON.parse(xhr.responseText);
                displayTestimonials(testimonials);
            }
        };
        xhr.send();
    }

    function displayTestimonials(testimonials) {
        testimonials.forEach(function(testimonial) {
            var testimonialElement = document.createElement('div');
            testimonialElement.classList.add('testimonial');
            testimonialElement.innerHTML = `
                <h3>${testimonial.cliente}</h3>
                <p>${testimonial.comentario}</p>
                <p>Rating: ${testimonial.avaliacao}/5 <i class="bi bi-heart-fill"></i></p>
            `;
            testimonialsSection.appendChild(testimonialElement);
        });
    }

    loadMoreButton.addEventListener('click', function() {
        page++;
        loadTestimonials(page);
    });

    loadTestimonials(page);
});
