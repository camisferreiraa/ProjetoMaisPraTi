document.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.getElementById('customCarousel');
    
  
    const bootstrapCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000, 
      ride: 'carousel'
    });
    
    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
      bootstrapCarousel.prev();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
      bootstrapCarousel.next();
    });
  });