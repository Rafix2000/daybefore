document.addEventListener('DOMContentLoaded', () => {
    // --- CODE DU LOADER ---
    const loader = document.getElementById('loader');
    const stars = document.querySelectorAll('#loader svg .logo-animation-loader'); // ATTENTION A CETTE CLASSE
    const mainHeader = document.getElementById('main-header');
    const logoLinkHeader = document.getElementById('logo-link-header');
    if (logoLinkHeader) {
        logoLinkHeader.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du lien (qui est d'aller à "#")
            window.location.reload(); // Actualise la page
        });
    }
    const mainPageContent = document.getElementById('main-page-content');
    const mainFooter = document.getElementById('main-footer');

    if (loader && stars.length > 0) { // Seulement si le loader et les étoiles sont trouvés
        let starIndex = 0;
        const totalStars = stars.length;
        const starAppearInterval = 150;
        const loaderDisappearDelay = starAppearInterval * totalStars + 500;
        const contentAppearDelay = loaderDisappearDelay + 100;

        function showNextStar() {
            if (starIndex < totalStars) {
                if (stars[starIndex]) { // Vérifie que l'étoile existe
                    stars[starIndex].classList.remove('opacity-0');
                    stars[starIndex].classList.add('opacity-100');
                }
                starIndex++;
                setTimeout(showNextStar, starAppearInterval);
            }
        }

        setTimeout(showNextStar, 250);

        setTimeout(() => {
            if (loader) {
                loader.classList.add('opacity-0');
                setTimeout(() => {
                    if (loader) loader.style.display = 'none';
                }, 1000);
            }
        }, loaderDisappearDelay);

        setTimeout(() => {
            if (mainHeader) mainHeader.classList.remove('opacity-0');
            if (mainPageContent) mainPageContent.classList.remove('opacity-0');
            if (mainFooter) mainFooter.classList.remove('opacity-0');
        }, contentAppearDelay);

    } else {
        console.warn("Loader ou étoiles (.logo-animation-loader) non trouvés. L'animation de chargement ne démarrera pas.");
        // Si pas de loader, on s'assure que le contenu principal est visible
        if (mainHeader) mainHeader.classList.remove('opacity-0');
        if (mainPageContent) mainPageContent.classList.remove('opacity-0');
        if (mainFooter) mainFooter.classList.remove('opacity-0');
    }

    // --- CODE DE LA GALERIE D'IMAGES ---
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

    // --- CODE DE LA NEWSLETTER ---
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) { // Vérifie que le formulaire existe avant d'essayer d'accéder à ses enfants
        const newsletterInput = newsletterForm.querySelector('input[type="email"]');
        const newsletterSubmitButton = newsletterForm.querySelector('button[type="submit"]');
        const newsletterStatus = document.getElementById('newsletter-status'); // Doit exister dans le HTML

        if (newsletterInput && newsletterSubmitButton) {
            newsletterForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const email = newsletterInput.value;

                if (email && email.includes('@')) {
                    console.log('Newsletter - Email soumis :', email);
                    newsletterSubmitButton.textContent = 'Envoi...';
                    newsletterSubmitButton.disabled = true;

                    setTimeout(() => {
                        if (newsletterStatus) {
                            newsletterStatus.textContent = `Merci ! ${email} a été ajouté à notre newsletter.`;
                            newsletterStatus.className = 'mt-2 text-sm text-green-400';
                        }
                        newsletterForm.reset();
                        newsletterSubmitButton.textContent = 'S\'inscrire';
                        newsletterSubmitButton.disabled = false;

                        setTimeout(() => {
                            if (newsletterStatus) newsletterStatus.textContent = '';
                        }, 5000);
                    }, 1500);
                } else {
                    if (newsletterStatus) {
                        newsletterStatus.textContent = 'Veuillez entrer une adresse e-mail valide.';
                        newsletterStatus.className = 'mt-2 text-sm text-red-400';
                    }
                }
            });
        }
    }


    // --- CODE DU PANIER ET DES TAILLES ---
    const sizeButtons = document.querySelectorAll('.size-button');
    const selectedSizeInput = document.getElementById('selected-size');
    const addToCartButton = document.getElementById('addToCartBtn'); // UNE SEULE DÉCLARATION ICI

    if (sizeButtons.length > 0 && selectedSizeInput && addToCartButton) { // Ajout de addToCartButton ici
        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                sizeButtons.forEach(btn => {
                    btn.classList.remove('bg-brand-accent', 'text-raisin-noir', 'border-brand-accent');
                    btn.classList.add('border-gray-600', 'text-gray-300');
                });
                button.classList.add('bg-brand-accent', 'text-raisin-noir', 'border-brand-accent');
                button.classList.remove('border-gray-600', 'text-gray-300');

                const selectedSize = button.dataset.size;
                selectedSizeInput.value = selectedSize;
                console.log('Taille sélectionnée :', selectedSize);
                addToCartButton.disabled = false;
                 // Optionnel: Enlever la classe de désactivation
                // addToCartButton.classList.remove('opacity-50', 'cursor-not-allowed');

            });
        });
        
        addToCartButton.disabled = true;
        // Optionnel: Ajouter une classe pour le style désactivé
        // addToCartButton.classList.add('opacity-50', 'cursor-not-allowed');


        addToCartButton.addEventListener('click', function() {
            const currentSelectedSize = selectedSizeInput.value;
            if (currentSelectedSize) {
                console.log(`Produit ajouté au panier (simulation) : Taille ${currentSelectedSize}`);
                alert(`T-shirt (Taille ${currentSelectedSize}) ajouté au panier ! Préparez-vous pour la précommande du 4 Juin !`);
            } else {
                console.log('Veuillez sélectionner une taille.');
                alert('Veuillez sélectionner une taille avant d\'ajouter au panier.');
            }
        });
    } else if (addToCartButton) { // Cas où il n'y a pas de boutons de taille mais un bouton panier
        // Comportement du bouton panier sans sélection de taille (si applicable)
        addToCartButton.addEventListener('click', function() {
            console.log(`Produit ajouté au panier (simulation) : Pas de taille spécifiée`);
            alert(`T-shirt ajouté au panier ! Préparez-vous pour la précommande du 4 Juin !`);
        });
    }
});