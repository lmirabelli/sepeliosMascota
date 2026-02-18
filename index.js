function moveSlide(direction) {
    const slider = document.getElementById('slider');
    const slideWidth = slider.querySelector('.slide').clientWidth;
    slider.scrollLeft += direction * slideWidth;
}