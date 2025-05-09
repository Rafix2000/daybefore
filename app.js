document.addEventListener('DOMContentLoaded', () => {
    const mainProductImage = document.getElementById('main-product-image');
const thumbnailButtons = document.querySelectorAll('.thumbnail-button');

if (mainProductImage && thumbnailButtons.length > 0) {
    thumbnailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newImageSrc = button.dataset.imageSrc;
            if (newImageSrc) {
                mainProductImage.src = newImageSrc;
                const newImageAlt = button.querySelector('img')?.alt || "Image du produit (mockup)";
                mainProductImage.alt = newImageAlt;
            }
            thumbnailButtons.forEach(btn => {
                btn.classList.remove('border-brand-accent');
                btn.classList.add('border-transparent');
            });
            button.classList.add('border-brand-accent');
            button.classList.remove('border-transparent');
        });
    });
}
    const loader = document.getElementById('loader');
    const stars = document.querySelectorAll('#loader svg .logo-animation-loader');
    // Cible les éléments principaux du contenu
    const mainHeader = document.getElementById('main-header');
    const mainPageContent = document.getElementById('main-page-content');
    const mainFooter = document.getElementById('main-footer');

    let starIndex = 0;
    const totalStars = stars.length;
    const starAppearInterval = 150; // Temps en ms entre l'apparition de chaque étoile
    const loaderDisappearDelay = starAppearInterval * totalStars + 500; // Temps avant que le loader disparaisse
    const contentAppearDelay = loaderDisappearDelay + 100; // Temps avant que le contenu apparaisse

    function showNextStar() {
        if (starIndex < totalStars) {
            stars[starIndex].classList.remove('opacity-0');
            stars[starIndex].classList.add('opacity-100'); // Force l'opacité si besoin
            starIndex++;
            setTimeout(showNextStar, starAppearInterval);
        }
    }

    // Commence l'animation des étoiles
    setTimeout(showNextStar, 250); // Petit délai initial avant la première étoile

    // Fait disparaître le loader
    setTimeout(() => {
        if (loader) {
            loader.classList.add('opacity-0');
            // Optionnel: supprime le loader du DOM après la transition pour la performance
            setTimeout(() => loader.style.display = 'none', 1000); // 1000ms = durée de la transition du loader
        }
    }, loaderDisappearDelay);

    // Fait apparaître le contenu principal
    setTimeout(() => {
        if (mainHeader) mainHeader.classList.remove('opacity-0');
        if (mainPageContent) mainPageContent.classList.remove('opacity-0');
        if (mainFooter) mainFooter.classList.remove('opacity-0');
        // Si tu avais un seul wrapper #main-content:
        // const mainContent = document.getElementById('main-content');
        // if (mainContent) mainContent.classList.remove('opacity-0');
    }, contentAppearDelay);
    
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
});