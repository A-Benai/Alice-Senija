document.getElementById('cover-right').addEventListener('click', () => {
    const leftCover = document.getElementById('cover-left');
    const rightCover = document.getElementById('cover-right');
    const innerContent = document.getElementById('inner-content');

    // Ruota le due coperture
    leftCover.style.transform = 'rotateY(-180deg)';
    rightCover.style.transform = 'rotateY(180deg)';

    // Mostra il contenuto interno dopo l'apertura
    setTimeout(() => {
        innerContent.style.opacity = '1';
    }, 1500); // Dopo 1.5 secondi (durata della transizione)
});
