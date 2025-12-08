(function() {
  // Utiliser setTimeout pour éviter une boucle bloquante
  setTimeout(() => {
    const waste = [];
    for (let i = 0; i < 20000; i++) { // Réduire le nombre d'itérations
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

    // Utiliser requestIdleCallback() au lieu de while pour les délais
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Simuler un petit délai sans bloquer le thread principal
        const t0 = performance.now();
        while (performance.now() - t0 < 1000) {}
      });
    }
  });
})();
