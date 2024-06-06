document.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionner les éléments
    const soleil = document.querySelector('div.soleil img');
    const sky = document.querySelector('div.sky');
    const prairie = document.querySelector('div.prairie');
    const fusee = document.querySelector('div.fusee img');
    const etoile = document.querySelector('div.star img');

    // Ajouter un événement de clic sur la fusée
    fusee.addEventListener('click', () => {
        // Ajouter les classes pour déclencher les animations
        sky.classList.add('moving-sky');
        prairie.classList.add('moving-prairie');
        soleil.classList.add('disappearing-soleil');
        etoile.classList.add('apparition-etoile');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner l'élément du soleil et l'élément audio
    const soleil = document.querySelector('div.soleil img');
    const audio = document.querySelector('audio.musique');
    const audio2 = document.querySelector('audio.enregistrement');
    audio.volume = 0.2;
    audio2.volume = 1;

    // Ajouter un événement de clic sur le soleil
    soleil.addEventListener('click', () => {
        // Vérifier si l'audio est déjà en cours de lecture
        if (audio.paused) {
            // Démarrer la lecture de l'audio
            audio.play();
            audio2.play();
        } else {
            // Mettre en pause l'audio si il est déjà en lecture
            audio.pause();
            audio2.pause();
        }
    });
});