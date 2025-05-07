// 1. Sélectionner le bouton
// D'abord, ajoutons un ID à notre bouton dans index.html pour le trouver facilement :
// <button id="addToCartBtn" class="bg-brand-secondary ...">Ajouter au Panier</button>

const addToCartButton = document.getElementById('addToCartBtn'); // Récupère l'élément bouton par son ID

// 2. Vérifier si le bouton a été trouvé (bonne pratique)
if (addToCartButton) {
  // 3. Ajouter un "écouteur d'événement" pour le clic
  addToCartButton.addEventListener('click', function() {
    // 4. Ce qui se passe quand on clique
    console.log('Bouton "Ajouter au Panier" cliqué ! Produit : Nom de Mon Super Produit');
    // Plus tard, ici, on pourrait faire des choses plus complexes (ouvrir un panier, etc.)
  });
} else {
  console.error('Le bouton avec lID "addToCartBtn" n\'a pas été trouvé.');
}