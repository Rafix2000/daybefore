document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    const loader = document.getElementById('loader');
    const stars = document.querySelectorAll('#loader svg .logo-animation-loader');
    const mainHeader = document.getElementById('main-header');
    const logoLinkHeader = document.getElementById('logo-link-header');
    const mainPageContent = document.getElementById('main-page-content');
    const mainFooter = document.getElementById('main-footer');
    const shopifyButtonContainer = document.getElementById('shopify-buy-button-container');

    // Fonction pour afficher le contenu principal et le bouton Shopify
    function showMainContent() {
        console.log('Showing main content and Shopify button');
        if (mainHeader) mainHeader.classList.remove('opacity-0');
        if (mainPageContent) mainPageContent.classList.remove('opacity-0');
        if (mainFooter) mainFooter.classList.remove('opacity-0');

        if (shopifyButtonContainer) {
            shopifyButtonContainer.classList.remove('shopify-button-hidden-initially');
            shopifyButtonContainer.classList.add('shopify-button-visible');
        }
    }

    if (logoLinkHeader) {
        logoLinkHeader.addEventListener('click', (event) => {
        });
    }

    if (loader && stars.length > 0) {
        console.log('Loader script starting');
        let starIndex = 0;
        const totalStars = stars.length;
        const starAppearInterval = 150; // Délai entre chaque étoile
        const animationStarsDuration = starAppearInterval * totalStars; // Durée totale de l'anim des étoiles
        const extraBufferForLoader = 500; // Temps supplémentaire après les étoiles avant de masquer le loader
        
        const loaderDisappearDelay = animationStarsDuration + extraBufferForLoader;
        
        // Délai pour afficher le contenu. On veut que le contenu APPARAISSE
        // PENDANT que le loader s'efface ou juste après son effacement complet.
        // La transition d'opacité du loader est de 1000ms.
        // On peut faire apparaître le contenu au milieu de cette transition.
        const contentAppearDelay = loaderDisappearDelay + 0; // Affiche le contenu dès que le loader commence à disparaître (ou un peu avant si transition opacity loader est longue)

        function showNextStar() {
            if (starIndex < totalStars) {
                if (stars[starIndex]) {
                    stars[starIndex].classList.remove('opacity-0');
                    stars[starIndex].classList.add('opacity-100');
                }
                starIndex++;
                setTimeout(showNextStar, starAppearInterval);
            }
        }

        setTimeout(showNextStar, 250); // Délai initial avant la première étoile

        setTimeout(() => {
            console.log('Hiding loader');
            if (loader) {
                loader.classList.add('opacity-0'); // Déclenche la transition d'opacité de 1s du loader
                setTimeout(() => {
                    if (loader) loader.style.display = 'none'; // Cache complètement après la transition
                    console.log('Loader display set to none');
                }, 1000); // Doit correspondre à la durée de `transition-opacity duration-1000` sur le loader
            }
        }, loaderDisappearDelay);

        setTimeout(showMainContent, contentAppearDelay);

    } else {
        console.warn("Loader ou étoiles non trouvés. Affichage direct du contenu.");
        if (loader) loader.style.display = 'none'; // S'assurer que le loader est caché s'il existe mais que les étoiles manquent
        showMainContent(); // Affiche tout immédiatement
    }
});
document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour gérer les transitions de page
  function handleLinkClick(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const link = event.currentTarget;
    const href = link.href;

    // Ajoute la classe de fondu sortant au body
    document.body.classList.add("page-transition-out");

    // Attends que la transition soit terminée (0.2s) avant de changer de page
    setTimeout(() => {
      window.location.href = href; // Redirige vers la nouvelle page
    }, 200); //Correspond à la durée de la transition en css
  }

  // Ajoute un écouteur d'événements à tous les liens de la page
  const links = document.querySelectorAll("a"); // Sélectionne tous les liens
  links.forEach((link) => {
    // Exclure les liens qui commencent par "#" (ancre) ou qui ont l'attribut "data-no-transition"
    if (!link.href.startsWith("#") && !link.dataset.noTransition) {
      link.addEventListener("click", handleLinkClick);
    }
  });
});