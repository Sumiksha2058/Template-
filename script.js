const cards = document.querySelectorAll('.card');

function setActiveCard() {
    const viewportCenter = window.innerHeight / 2;
    let closestCardIndex = -1;
    let closestCardDistance = Number.MAX_VALUE;

    cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestCardDistance) {
            closestCardDistance = distance;
            closestCardIndex = index;
        }
    });

    cards.forEach((card, index) => {
        card.classList.remove('zoom-in', 'zoom-out');
        if (index === closestCardIndex) {
            card.classList.add('zoom-in');
        } else {
            card.classList.add('zoom-out');
        }
    });
}


window.addEventListener('load', setActiveCard);
window.addEventListener('scroll', setActiveCard);

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        setActiveCard();
    });
});