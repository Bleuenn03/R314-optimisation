(function() {
  // Utiliser setTimeout pour éviter une boucle bloquante
  setTimeout(() => {
    const waste = [];
    for (let i = 0; i < 100; i++) { // Réduire le nombre d'itérations
      waste.push(Math.random() * i);
    }
    window.__waste = waste;
  }, 0);

  window.addEventListener('load', function() {
    const imgs = document.querySelectorAll('.card img');

    // Utiliser le chargement paresseux des images et ajouter la classe 'loaded'
    imgs.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
      }
    });


  });
})();
