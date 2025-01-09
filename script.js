document.getElementById('cover-right').addEventListener('click', () => {
    const leftCover = document.getElementById('cover-left');
    const rightCover = document.getElementById('cover-right');
    const innerImage = document.getElementById('inner-image');

    // Ruota le coperture
    leftCover.style.transform = 'rotateY(-180deg)';
    rightCover.style.transform = 'rotateY(180deg)';

    // Mostra l'immagine interna dopo l'animazione
    setTimeout(() => {
        innerImage.style.display = 'flex';
    }, 1000); // Durata corrispondente alla transizione
});
