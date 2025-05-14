document.querySelectorAll('.item').forEach(card => {
    const images = card.querySelector('.carousel-images');
    const prevBtn = card.querySelector('.carousel-btn.prev');
    const nextBtn = card.querySelector('.carousel-btn.next');
    let index = 0;
    const total = images.children.length;

    function updateCarousel() {
      images.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % total;
      updateCarousel();
    });
});