document.getElementById('cover-right').addEventListener('click', () => {
    // Aggiungi transizioni alla copertura sinistra e destra
    document.getElementById('cover-left').style.transform = 'translateX(-100%)';
    document.getElementById('cover-right').style.transform = 'translateX(100%)';

    // Mostra l'immagine interna
    setTimeout(() => {
        document.getElementById('inner-image').style.display = 'flex';
    }, 500); // Dopo 500ms per lasciare tempo alla transizione
});
